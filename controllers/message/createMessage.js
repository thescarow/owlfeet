const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const linkify = require("linkifyjs")
const { getLinkPreview } = require("link-preview-js")
// const dns = require("node:dns")

const Message = require("../../models/message")
const Chat = require("../../models/chat")
//////////////////////
const {
  deleteAwsS3Object,
  signedUrlForGetAwsS3Object
} = require("../../services/awsS3")
///////
const {
  selectSafeMessageField,
  selectMessageFieldForRepliedMessage,
  filterMessageFieldForDeletedForAll
} = require("../../common/filter-field/filterMessageField")

const {
  selectChatFieldForChatBox
} = require("../../common/filter-field/filterChatField")
const { checkInFollowing } = require("../../common/checkUserFollowStatus")
// router.post("/", getLoginUser, createMessage)

exports.createMessage = async (req, res) => {
  try {
    if (req.user) {
      const userMessage = req.body
      const newMessageData = {}

      if (userMessage.chat) {
        let messageChat = await Chat.findOne({
          _id: userMessage.chat,
          currentChatMembers: { $elemMatch: { $eq: req.user.id } }
        })
          .select({ isGroupChat: 1, currentChatMembers: 1 })
          .lean()

        if (messageChat) {
          if (!messageChat.isGroupChat) {
            let otherUserId = messageChat.currentChatMembers.find(
              userId => userId.toString() != req.user.id.toString()
            )

            if (!checkInFollowing(req.user.id, otherUserId)) {
              return res.json({
                isSuccess: false,
                error:
                  "You Are Not Allowed To Send Message To This Chat, First Follow Him/Her"
              })
            }
          }

          newMessageData.chat = messageChat._id
          newMessageData.sender = req.user.id
          newMessageData.reader = messageChat.currentChatMembers
          newMessageData.seenStatus = [
            { seenBy: req.user.id, seenTime: Date.now() }
          ]

          if (userMessage.hasMediaContent) {
            if (
              userMessage.hasOwnProperty("mediaContentType") &&
              userMessage.hasOwnProperty("mediaContentPath")
            ) {
              newMessageData.hasMediaContent = true
              newMessageData.mediaContentType = userMessage.mediaContentType
              newMessageData.mediaContentMimeType =
                userMessage.mediaContentMimeType
              newMessageData.mediaContentPath = userMessage.mediaContentPath
            } else {
              return res.json({
                isSuccess: false,
                error: "Send All The Required Fields With Request"
              })
            }
          } else {
            if (userMessage.hasOwnProperty("textContent")) {
              newMessageData.textContent = userMessage.textContent
            } else {
              return res.json({
                isSuccess: false,
                error: "Send All The Required Fields With Request"
              })
            }
          }

          if (
            userMessage.isRepliedMessage &&
            userMessage.hasOwnProperty("repliedTo")
          ) {
            let userRepliedMessage = await Message.findById(
              userMessage.repliedTo
            )
              .select({ chat: 1 })
              .lean()
            if (
              userRepliedMessage &&
              userRepliedMessage.chat.toString() === messageChat._id.toString()
            ) {
              newMessageData.isRepliedMessage = true
              newMessageData.repliedTo = userRepliedMessage._id
            } else {
              return res.json({
                isSuccess: false,
                error: "You are not allowed to reply to this message"
              })
            }
          } else {
            newMessageData.isRepliedMessage = false
          }
          let newMessageDocument = new Message(newMessageData)

          newMessageDocument = await newMessageDocument.save()
          let createdNewMessage = await Message.findById(newMessageDocument._id)
            .populate({
              path: "sender",
              select: { username: 1, firstName: 1, lastName: 1, profile: 1 },
              options: {
                lean: true
              }
            })
            .populate({
              path: "chat",
              select: selectChatFieldForChatBox,
              options: {
                lean: true
              }
            })
            .populate({
              path: "repliedTo",
              select: selectMessageFieldForRepliedMessage,
              populate: {
                path: "sender",
                select: { username: 1, firstName: 1, lastName: 1 }
              },

              options: {
                lean: true
              }
            })
            .select(selectSafeMessageField)
            .lean()

          if (
            createdNewMessage.isRepliedMessage === true &&
            createdNewMessage.repliedTo.isDeletedForAll === true
          ) {
            createdNewMessage.repliedTo = filterMessageFieldForDeletedForAll(
              createdNewMessage.repliedTo
            )
          }

          if (
            createdNewMessage.sender.hasOwnProperty("profile") &&
            createdNewMessage.sender.profile !== ""
          ) {
            createdNewMessage.sender.profile = await signedUrlForGetAwsS3Object(
              createdNewMessage.sender.profile
            )
          }

          if (
            createdNewMessage.hasMediaContent &&
            createdNewMessage.mediaContentType !== "youtube"
          ) {
            createdNewMessage.mediaContentPath =
              await signedUrlForGetAwsS3Object(
                createdNewMessage.mediaContentPath
              )
          } else {
            if (
              createdNewMessage.hasOwnProperty("textContent") &&
              createdNewMessage.textContent !== ""
            ) {
              // const linkifyOptions = {
              //   attributes: null,
              //   className: "hello",
              //   defaultProtocol: "http",
              //   events: null,
              //   format: (value, type) => value,
              //   formatHref: (href, type) => href,
              //   ignoreTags: [],
              //   nl2br: false,
              //   rel: null,
              //   render: null,
              //   tagName: "a",
              //   target: null,
              //   truncate: Infinity,
              //   validate: true
              // }
              let linkPreviewOptions = {
                // resolveDNSHost: async url => {
                //   return new Promise((resolve, reject) => {
                //     const hostname = new URL(url).hostname
                //     dns.lookup(hostname, (err, address, family) => {
                //       if (err) {
                //         reject(err)
                //         return
                //       }

                //       resolve(address) // if address resolves to localhost or '127.0.0.1' library will throw an error
                //     })
                //   }).catch(e => {
                //     // will throw a detected redirection to localhost
                //   })
                // },
                // imagesPropertyType: "og", // fetches only open-graph images,

                headers: {
                  "user-agent": "googlebot", // fetches with googlebot crawler user agent
                  "Accept-Language": "en-US" // fetches site for French language
                  // ...other optional HTTP request headers
                },
                // timeout: 1000,
                followRedirects: `manual`,
                handleRedirects: (baseURL, forwardedURL) => {
                  const baseURLObj = new URL(baseURL)
                  const forwardedURLObj = new URL(forwardedURL)
                  if (
                    forwardedURLObj.hostname === baseURLObj.hostname ||
                    forwardedURLObj.hostname === "www." + baseURLObj.hostname ||
                    "www." + forwardedURLObj.hostname === baseURLObj.hostname
                  ) {
                    return true
                  } else {
                    return false
                  }
                }
              }
              let allLinks = linkify.find(createdNewMessage.textContent)

              if (allLinks.length > 0) {
                // console.log("allLinks:", allLinks)
                try {
                  let data = await getLinkPreview(
                    allLinks[0].href,
                    linkPreviewOptions
                  )
                  if (data) {
                    // console.log("linkPreviewData:", data)
                    createdNewMessage.hasLinkPreview = true
                    createdNewMessage.linkPreviewData = data
                  }
                } catch (err) {
                  createdNewMessage.hasLinkPreview = false
                  // console.log("linkPreviewError:", err)
                }

                createdNewMessage.hasLinks = true
                createdNewMessage.linksData = allLinks
              } else {
                createdNewMessage.hasLinks = false
                createdNewMessage.hasLinkPreview = false
              }
            }
          }

          res.json({
            isSuccess: true,
            message: createdNewMessage
          })
          attachSocketForCreatingNewMessage(
            req,
            messageChat,
            newMessageDocument,
            createdNewMessage
          )
        } else {
          if (
            userMessage.hasMediaContent &&
            userMessage.mediaContentType !== "youtube"
          ) {
            await deleteAwsS3Object(userMessage.mediaContentPath)
          }

          res.json({
            isSuccess: false,
            error:
              "You Are Not Allowed To Send Message To This Chat, First Ask Chat Admin To Add You In The Chat Group"
          })
        }
      } else {
        res.json({
          isSuccess: false,
          error: "Send All The Required Fields With Request"
        })
      }
    } else {
      res.json({
        isSuccess: false,
        error: "You Are Not Logged In, Please Log In First"
      })
    }
  } catch (err) {
    console.log(errorLog("Server Error In Creating Message"), mainErrorLog(err))
    res.status(500).json({
      isSuccess: false,
      error: "Server Error In Sending Message, Please Send It Again"
    })
  }
}

async function attachSocketForCreatingNewMessage(
  req,
  messageChat,
  newMessageDocument,
  createdNewMessage
) {
  let eventData = { message: createdNewMessage }
  messageChat.currentChatMembers.forEach(userId => {
    if (req.user.id.toString() !== userId.toString()) {
      req.io.to(userId.toString()).emit("message:new-user-message", eventData)
    }
  })
  newMessageDocument.deliveryStatus.isDelivered = true
  newMessageDocument.deliveryStatus.deliveredTime = Date.now()
  await newMessageDocument.save()
  req.io.to(req.user.id.toString()).emit("message:user-message-delivered", {
    messageId: newMessageDocument._id,
    chatId: newMessageDocument.chat,
    deliveredTime: Date.now()
  })
}

const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const linkify = require("linkifyjs")
const { getLinkPreview } = require("link-preview-js")
const dns = require("node:dns")

const Message = require("../../models/message")
const Chat = require("../../models/chat")
const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")
///////
const {
  selectSafeMessageField,
  selectMessageFieldForRepliedMessage,
  filterMessageFieldForDeletedForAll
} = require("../../common/filter-field/filterMessageField")

const {
  selectChatFieldForMessage
} = require("../../common/filter-field/filterChatField")

// router.get("/fetch-message/:chatId", getLoginUser, fetchMessages)

exports.fetchMessages = async (req, res) => {
  try {
    if (req.user) {
      const chatId = req.params.chatId
      const totalReceivedMessagesCount = req.query.totalReceivedMessagesCount
      const chat = await Chat.findOne({
        _id: chatId,
        allChatMembers: { $elemMatch: { $eq: req.user.id } },
        isDeleted: false
      })
        .select({ _id: 1 })
        .lean()
      if (chat) {
        let allMessages = await Message.find({
          chat: chat._id,
          reader: { $elemMatch: { $eq: req.user.id } },
          deletedFor: { $not: { $elemMatch: { $eq: req.user.id } } }
        })
          .populate({
            path: "sender",
            select: { username: 1, firstName: 1, lastName: 1, profile: 1 },
            options: {
              lean: true
            }
          })
          .populate({
            path: "chat",
            select: selectChatFieldForMessage,
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
          .sort({ createdAt: -1 })
          .skip(totalReceivedMessagesCount)
          .limit(10)
          .lean()

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

        await Promise.all(
          allMessages.map(async message => {
            if (
              message.isRepliedMessage === true &&
              message.repliedTo.isDeletedForAll === true
            ) {
              message.repliedTo = filterMessageFieldForDeletedForAll(
                message.repliedTo
              )
            }
            if (message.isDeletedForAll === true) {
              message = filterMessageFieldForDeletedForAll(message)
            }
            if (message.isInfoMessage === false) {
              if (
                message.sender.hasOwnProperty("profile") &&
                message.sender.profile !== ""
              ) {
                message.sender.profile = await signedUrlForGetAwsS3Object(
                  message.sender.profile
                )
              }
              if (message.hasMediaContent === true) {
                if (message.hasDirectMediaContentPath === false) {
                  message.mediaContentPath = await signedUrlForGetAwsS3Object(
                    message.mediaContentPath
                  )
                }
              } else {
                if (
                  message.hasOwnProperty("textContent") &&
                  message.textContent !== ""
                ) {
                  let allLinks = linkify.find(message.textContent)
                  message.hasLinks = false
                  message.hasLinkPreview = false

                  if (allLinks.length > 0) {
                    try {
                      let data = await getLinkPreview(
                        allLinks[0].href,
                        linkPreviewOptions
                      )
                      if (data) {
                        message.hasLinkPreview = true
                        message.linkPreviewData = data
                      }
                    } catch (err) {
                      message.hasLinkPreview = false
                    }

                    message.hasLinks = true
                    message.linksData = allLinks
                  }
                }
              }
            }
          })
        )
        attachSocketForFetchingMessage(req, chat)

        res.json({
          isSuccess: true,
          allMessages: allMessages
        })
      } else {
        res.json({
          isSuccess: false,
          error: "You Are Not Allowed To Access Messages from This Chat"
        })
      }
    } else {
      res.json({
        isSuccess: false,
        error: "You Are Not Logged In, Please Log In First"
      })
    }
  } catch (err) {
    console.log(errorLog("Server Error In fetching Message"), mainErrorLog(err))
    res.status(500).json({
      isSuccess: false,
      error: "Server Error In Getting Messages, Please Refresh Your Page"
    })
  }
}

async function attachSocketForFetchingMessage(req, chat) {
  let allNotDeliveredMessages = await Message.find({
    chat: chat._id,
    reader: { $elemMatch: { $eq: req.user.id } },
    "deliveryStatus.isDelivered": false
  }).select({ sender: 1, deliveryStatus: 1, isInfoMessage: 1 })

  if (allNotDeliveredMessages.length > 0) {
    await Promise.all(
      allNotDeliveredMessages.map(async message => {
        if (message.deliveryStatus.isDelivered === false) {
          message.deliveryStatus.isDelivered = true
          message.deliveryStatus.deliveredTime = Date.now()
          await message.save()
          if (message.isInfoMessage === false) {
            req.io
              .to(message.sender.toString())
              .emit("message:user-message-delivered", {
                messageId: message._id,
                chatId: chat._id,
                deliveredTime: message.deliveryStatus.deliveredTime
              })
          }
        }
      })
    )
  }
}

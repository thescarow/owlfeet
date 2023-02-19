const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const Message = require("../../models/message")
const Chat = require("../../models/chat")
//////////////////////
const {
  deleteAwsS3Object,
  signedUrlForGetAwsS3Object
} = require("../../services/awsS3")
///////
const { selectMessageField } = require("./common/filterMessageField")
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
              userId => userId != req.user.id
            )

            if (!checkInFollowing(req.user.id, otherUserId)) {
              return res.json({
                isSuccess: false,
                error:
                  '"You Are Not Allowed To Send Message To This Chat, First Follow Him/Her'
              })
            }
          }

          newMessageData.chat = messageChat._id
          newMessageData.sender = req.user.id
          newMessageData.reader = messageChat.currentChatMembers

          if (userMessage.hasMediaContent) {
            if (userMessage.mediaContentType && userMessage.mediaContentPath) {
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
            if (userMessage.textContent) {
              newMessageData.textContent = userMessage.textContent
            } else {
              return res.json({
                isSuccess: false,
                error: "Send All The Required Fields With Request"
              })
            }
          }
          const newMessage = new Message(newMessageData)

          await newMessage.save()
          let createdNewMessage = await Message.findById(newMessage._id)
            .populate({
              path: "sender",
              select: { username: 1, firstName: 1, lastName: 1, profile: 1 },
              options: {
                lean: true
              }
            })
            .populate({
              path: "chat",
              select: {
                isGroupChat: 1,
                chatName: 1,
                chatPic: 1,

                currentChatMembers: 1
              },
              options: {
                lean: true
              }
            })
            .select(selectMessageField)
            .lean()

          if (
            createdNewMessage.sender.hasOwnProperty("profile") &&
            createdNewMessage.sender.profile !== ""
          ) {
            createdNewMessage.sender.profile = await signedUrlForGetAwsS3Object(
              createdNewMessage.sender.profile
            )
          }
          if (createdNewMessage.chat.isGroupChat) {
            if (
              createdNewMessage.chat.hasOwnProperty("chatPic") &&
              createdNewMessage.chat.chatPic !== ""
            ) {
              createdNewMessage.chat.chatPic = await signedUrlForGetAwsS3Object(
                createdNewMessage.chat.chatPic
              )
            }
          } else {
            if (
              createdNewMessage.sender.hasOwnProperty("profile") &&
              createdNewMessage.sender.profile !== ""
            ) {
              createdNewMessage.chat.chatPic = createdNewMessage.sender.profile
            }
            createdNewMessage.chat.chatName = createdNewMessage.sender.firstName
          }

          if (
            createdNewMessage.hasMediaContent &&
            createdNewMessage.mediaContentType !== "youtube"
          ) {
            createdNewMessage.mediaContentPath =
              await signedUrlForGetAwsS3Object(
                createdNewMessage.mediaContentPath
              )
          }

          createdNewMessage.chat.currentChatMembers.forEach(userId => {
            if (req.user.id.toString() !== userId.toString()) {
              req.io
                .to(userId.toString())
                .emit("chat:new-message", createdNewMessage)
            }
          })
          // console.log(createdNewMessage)
          res.json({
            isSuccess: true,
            message: createdNewMessage
          })
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
              "You Are Not Allowed To Send Message To This Chat, First Ask Chat Admins To Add You In The Chat Group"
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

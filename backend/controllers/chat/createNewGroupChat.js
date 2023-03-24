const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const Chat = require("../../models/chat")
const Message = require("../../models/message")
const User = require("../../models/user")
///////
const {
  createAndSendInfoMessage
} = require("./common/createAndSendInfoMessage")
const { infoMessageType } = require("../../models/common/infoMessageType")
const { checkInFollowing } = require("../../common/checkUserFollowStatus")
////////
const {
  signedUrlForGetAwsS3Object,
  deleteAwsS3Object
} = require("../../services/awsS3")
const {
  timeDifferenceFromNow
} = require("../../common/calculateTimeDifference")
///////////////

// router.post("/create-new-group-chat", getLoginUser, createNewGroupChat)
exports.createNewGroupChat = async (req, res) => {
  try {
    if (req.user) {
      let newGroupChatData = req.body
      if (
        newGroupChatData.chatUserIds.length >= 2 &&
        newGroupChatData.chatUserIds.length <= 10
      ) {
        if (newGroupChatData.chatName.trim() !== "") {
          let allMembersInFollowingList = true
          await Promise.all(
            newGroupChatData.chatUserIds.map(async userId => {
              if (!(await checkInFollowing(req.user.id, userId))) {
                allMembersInFollowingList = false
              }
            })
          )

          if (allMembersInFollowingList) {
            newGroupChatData.chatUserIds.push(req.user.id)
            newGroupChatData.chatUserIds = Array.from(
              new Set(newGroupChatData.chatUserIds)
            )

            let newChatData = {
              isGroupChat: true,
              groupChatAdmin: [req.user.id],
              currentChatMembers: newGroupChatData.chatUserIds,
              allChatMembers: newGroupChatData.chatUserIds,
              chatPic: newGroupChatData.chatPic ? newGroupChatData.chatPic : "",
              chatName: newGroupChatData.chatName.trim(),
              chatDescription: newGroupChatData.chatDesc.trim()
            }

            let newChat = new Chat(newChatData)
            newChat = await newChat.save()

            let createdNewChat = await Chat.findById(newChat._id)
              .select({ allChatMembers: 0 })
              .populate({
                path: "currentChatMembers",
                select: { firstName: 1, lastName: 1, username: 1, profile: 1 },
                options: {
                  lean: true
                }
              })
              .lean()
            if (
              createdNewChat.hasOwnProperty("chatPic") &&
              createdNewChat.chatPic !== ""
            ) {
              createdNewChat.chatPic = await signedUrlForGetAwsS3Object(
                createdNewChat.chatPic
              )
            }
            createdNewChat.chatCreatedTime = timeDifferenceFromNow(
              createdNewChat.createdAt
            )

            for (let i = 0; i < createdNewChat.currentChatMembers.length; i++) {
              if (
                createdNewChat.currentChatMembers[i]._id.toString() !==
                req.user.id.toString()
              ) {
                req.io
                  .to(createdNewChat.currentChatMembers[i]._id.toString())
                  .emit("chat:create-new-group-chat", createdNewChat)
              }
            }

            res.json({ isSuccess: true, chat: createdNewChat })
            createInfoMessage(createdNewChat, req)
          } else {
            if (
              newGroupChatData.hasOwnProperty("chatPic") &&
              newGroupChatData.chatPic !== ""
            ) {
              await deleteAwsS3Object(newGroupChatData.chatPic)
            }
            res.json({
              isSuccess: false,
              error:
                "All Selected Members Are Not In Your Following List,Please Edit Your Members List"
            })
          }
        } else {
          if (
            newGroupChatData.hasOwnProperty("chatPic") &&
            newGroupChatData.chatPic !== ""
          ) {
            await deleteAwsS3Object(newGroupChatData.chatPic)
          }
          res.json({
            isSuccess: false,
            error: "Please Choose A Name For Your Group"
          })
        }
      } else if (newGroupChatData.chatUserIds.length > 10) {
        if (
          newGroupChatData.hasOwnProperty("chatPic") &&
          newGroupChatData.chatPic !== ""
        ) {
          await deleteAwsS3Object(newGroupChatData.chatPic)
        }
        res.json({
          isSuccess: false,
          error: "Sorry,You Can Only Select Up To 10 Members"
        })
      } else {
        if (
          newGroupChatData.hasOwnProperty("chatPic") &&
          newGroupChatData.chatPic !== ""
        ) {
          await deleteAwsS3Object(newGroupChatData.chatPic)
        }
        res.json({
          isSuccess: false,
          error: "Please Select Atleast 2 Members"
        })
      }
    } else {
      if (
        newGroupChatData.hasOwnProperty("chatPic") &&
        newGroupChatData.chatPic !== ""
      ) {
        await deleteAwsS3Object(newGroupChatData.chatPic)
      }
      res.json({
        isSuccess: false,
        error: "You Are Not Logged In, Please Log In First"
      })
    }
  } catch (err) {
    console.log(
      errorLog("Server Error In Creating New Group Chat:"),
      mainErrorLog(err)
    )
    res.status(500).json({
      isSuccess: false,
      error: "Server Error In Creating New Group Chat, Please Try Again"
    })
  }
}

async function createInfoMessage(chat, req) {
  let user = await User.findById(req.user.id)
    .select({ firstName: 1, lastName: 1, username: 1 })
    .lean()
  let messageContent = `${user.firstName} ${user.lastName} created *${chat.chatName}*  group`
  let messageType = infoMessageType.NEW_GROUP
  createAndSendInfoMessage(messageContent, messageType, chat, req)
}

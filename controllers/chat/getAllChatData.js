const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const Chat = require("../../models/chat")
const Message = require("../../models/message")
const User = require("../../models/user")
////////
const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")

//////
const {
  timeDifferenceFromNow
} = require("../../common/calculateTimeDifference")

// const {
//   selectBasicInfoUserField
// } = require("../../common/filter-field/filterUserField")
const {
  filterChatFieldForNonMember,
  selectSafeChatField
} = require("../../common/filter-field/filterChatField")
const {
  selectLatestMessageField
} = require("../../common/filter-field/filterMessageField")

const { checkInFollowing } = require("../../common/checkUserFollowStatus")

exports.getAllChatData = async (req, res) => {
  try {
    if (req.user) {
      let allChat = await Chat.find({
        allChatMembers: {
          $elemMatch: { $eq: req.user.id }
        },
        isDeleted: false
      })
        .select(selectSafeChatField)
        .sort({ updatedAt: -1 })
        .lean()

      await Promise.all(
        allChat.map(async chat => {
          // if (
          //   chat.hasOwnProperty("chatCustomBackground") &&
          //   chat.chatCustomBackground.hasBackgroundImage
          // ) {
          //   chat.chatCustomBackground.backgroundImagekey =
          //     chat.chatCustomBackground.backgroundImage

          //   chat.chatCustomBackground.backgroundImage =
          //     await signedUrlForGetAwsS3Object(
          //       chat.chatCustomBackground.backgroundImage
          //     )
          // }
          let unseenMessagesCount = await Message.countDocuments({
            chat: chat._id,
            reader: { $elemMatch: { $eq: req.user.id } },
            "seenStatus.seenBy": { $ne: req.user.id }
          })
          chat.unseenMessagesCount = unseenMessagesCount

          let latestMessage = await Message.findOne({
            chat: chat._id,
            reader: { $elemMatch: { $eq: req.user.id } },
            deletedFor: { $not: { $elemMatch: { $eq: req.user.id } } }
          })
            .select(selectLatestMessageField)
            .populate({
              path: "sender",
              select: {
                firstName: 1,
                lastName: 1,
                username: 1
              },
              options: {
                lean: true
              }
            })
            .sort({ createdAt: -1 })
            .lean()

          if (latestMessage) {
            chat.latestMessage = latestMessage
            chat.latestMessageTime = timeDifferenceFromNow(
              latestMessage.createdAt
            )
          } else {
            chat.chatCreatedTime = timeDifferenceFromNow(chat.createdAt)
          }

          chat.canSendMessageToThisChat = true
          if (chat.isGroupChat) {
            if (chat.hasOwnProperty("chatPic") && chat.chatPic !== "") {
              chat.chatPic = await signedUrlForGetAwsS3Object(chat.chatPic)
            }

            if (
              !chat.currentChatMembers.some(
                userId => userId.toString() === req.user.id.toString()
              )
            ) {
              chat = filterChatFieldForNonMember(chat)
              chat.canSendMessageToThisChat = false
            }
          } else {
            let chatOtherMemberId = chat.currentChatMembers.find(
              userId => userId.toString() !== req.user.id.toString()
            )
            let chatOtherMember = await User.findById(chatOtherMemberId)
              .select({
                username: 1,
                firstName: 1,
                lastName: 1,
                bio: 1,
                profile: 1,
                isActive: 1,
                lastActive: 1
              })
              .lean()
            if (
              chatOtherMember.hasOwnProperty("profile") &&
              chatOtherMember.profile !== ""
            ) {
              chat.chatPic = await signedUrlForGetAwsS3Object(
                chatOtherMember.profile
              )
            }
            chat.isUserActive = chatOtherMember.isActive
            chat.userLastActive = chatOtherMember.lastActive
            chat.chatName =
              chatOtherMember.firstName + " " + chatOtherMember.lastName
            chat.chatDescription = chatOtherMember.bio

            if (!(await checkInFollowing(req.user.id, chatOtherMemberId))) {
              chat.canSendMessageToThisChat = false
            }
          }
        })
      )

      allChat = allChat.filter(chat => {
        if (chat.isGroupChat) {
          return true
        } else {
          return chat.latestMessage ? true : false
        }
      })

      let allChatData = {}

      allChat.forEach(chat => {
        allChatData[chat._id] = chat
      })
      res.json({ isSuccess: true, allChatData: allChatData })
    } else {
      res.json({
        isSuccess: false,
        error: "You Are Not Logged In, Please Log In First"
      })
    }
  } catch (err) {
    console.log(
      errorLog("Server Error In Getting All Chat Data:"),
      mainErrorLog(err)
    )
    res.json({
      isSuccess: false,
      error: "Server Error In Getting All Chat Data"
    })
  }
}

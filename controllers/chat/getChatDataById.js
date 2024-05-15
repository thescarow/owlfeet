const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const Chat = require("../../models/chat")
const Message = require("../../models/message")
///////
const {
  timeDifferenceFromNow
} = require("../../common/calculateTimeDifference")

const { checkInFollowing } = require("../../common/checkUserFollowStatus")
////////
const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")
///////////////

const {
  filterChatFieldForNonMember,
  selectSafeChatField
} = require("../../common/filter-field/filterChatField")
const {
  filterMessageFieldForDeletedForAll,
  selectLatestMessageField
} = require("../../common/filter-field/filterMessageField")
// router.get("/:chatId", getLoginUser, fetchChatWithid)
exports.getChatDataById = async (req, res) => {
  try {
    if (req.user) {
      const chatId = req.params.chatId
      let chat = await Chat.findOne({
        _id: chatId,
        allChatMembers: { $elemMatch: { $eq: req.user.id } },
        isDeleted: false
      })
        .select(selectSafeChatField)
        .populate({
          path: "currentChatMembers",
          select: {
            profile: 1,
            username: 1,
            firstName: 1,
            lastName: 1,
            bio: 1,
            isActive: 1,
            lastActive: 1
          },
          options: {
            lean: true
          }
        })
        .lean()

      if (chat) {
        if (
          chat.hasOwnProperty("chatCustomBackground") &&
          chat.chatCustomBackground.hasBackgroundImage
        ) {
          chat.chatCustomBackground.backgroundImagekey =
            chat.chatCustomBackground.backgroundImage

          chat.chatCustomBackground.backgroundImage =
            await signedUrlForGetAwsS3Object(
              chat.chatCustomBackground.backgroundImage
            )
        }

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
              username: 1,
              profile: 1
            },
            options: {
              lean: true
            }
          })
          .sort({ createdAt: -1 })
          .lean()

        if (latestMessage) {
          if (latestMessage.isDeletedForAll === true) {
            latestMessage = filterMessageFieldForDeletedForAll(latestMessage)
          }
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
              user => user._id.toString() === req.user.id.toString()
            )
          ) {
            chat = filterChatFieldForNonMember(chat)
            chat.canSendMessageToThisChat = false
          }
        } else {
          let chatOtherMember = chat.currentChatMembers.find(
            user => user._id.toString() !== req.user.id.toString()
          )
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

          chat.chatName = chatOtherMember.firstName
          chat.chatDescription = chatOtherMember.bio

          if (!(await checkInFollowing(req.user.id, chatOtherMember._id))) {
            chat.canSendMessageToThisChat = false
          }
        }

        if (chat.currentChatMembers) {
          await Promise.all(
            chat.currentChatMembers.map(async user => {
              if (user.hasOwnProperty("profile") && user.profile !== "") {
                user.profile = await signedUrlForGetAwsS3Object(user.profile)
              }
            })
          )
        }

        res.json({ isSuccess: true, chat: chat })
      } else {
        res.json({
          isSuccess: false,
          error: "This Chat Is Not Exist For You"
        })
      }
    } else {
      res.json({
        isSuccess: false,
        error: "You Are Not Logged In, Please Log In First"
      })
    }
  } catch (err) {
    console.log(
      errorLog("Server Error In Getting Chat Data By Id:"),
      mainErrorLog(err)
    )
    res.status(500).json({
      isSuccess: false,
      error: "Server Error In Accessing Chat Data, Please Try Again"
    })
  }
}

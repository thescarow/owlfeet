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

const { selectLoginUserForClientField } = require("../../common/userData")
//////////////////
const { filterChatFieldForNonMember } = require("./common/filterChatField")
const { checkInFollowing } = require("../../common/checkUserFollowStatus")

//@description     Render profile Page by username
//@route           GET /chat
//@access          Accessing login User
exports.getChatPageWithAllChat = async (req, res) => {
  try {
    if (req.user) {
      let loginUser = await User.findById(req.user.id)
        .select(selectLoginUserForClientField)
        .lean()

      if (loginUser.hasOwnProperty("profile") && loginUser.profile != "") {
        loginUser.profile = await signedUrlForGetAwsS3Object(loginUser.profile)
      }
      let allChat = await Chat.find({
        allChatMembers: {
          $elemMatch: { $eq: req.user.id }
        }
      })
        .select({ allChatMembers: 0 })
        .sort({ updatedAt: -1 })
        .lean()

      await Promise.all(
        allChat.map(async chat => {
          let latestMessage = await Message.findOne({
            chat: chat._id,
            reader: { $elemMatch: { $eq: req.user.id } },
            deletedFor: { $not: { $elemMatch: { $eq: req.user.id } } }
          })
            .select({
              sender: 1,
              hasMediaContent: 1,
              mediaContentType: 1,
              textContent: 1,
              createdAt: 1,
              updatedAt: 1
            })
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
            .sort({ updatedAt: -1 })
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
              userId => userId != req.user.id
            )
            let chatOtherMember = await User.findById(chatOtherMemberId)
              .select({
                username: 1,
                firstName: 1,
                lastName: 1,
                bio: 1,
                profile: 1
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

            chat.chatName = chatOtherMember.firstName
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

      res.render("./chat/chat.ejs", {
        pageName: "chat",
        isLogin: true,
        loginUser: loginUser,
        allChat: allChat
      })
    } else {
      res.render("./chat/chat.ejs", {
        pageName: "chat",
        isLogin: false
      })
    }
  } catch (err) {
    console.log(
      errorLog("Server Error In Get Chat Page With All Chat:"),
      mainErrorLog(err)
    )
    res.render("./error/commonServerError", {
      errorTitle: "Server Error",
      errorMessage: "please try again or go to Home Page"
    })
  }
}

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

////////
const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")
///////////////
const {
  selectChatFieldForChatBox
} = require("../../common/filter-field/filterChatField")

// router.get("/get-chat-box/:chatId", getLoginUser, fetchChatBoxById)
exports.getChatBoxDataById = async (req, res) => {
  try {
    if (req.user) {
      const chatId = req.params.chatId
      let chat = await Chat.findOne({
        _id: chatId,
        currentChatMembers: { $elemMatch: { $eq: req.user.id } },
        isDeleted: false
      })
        .select(selectChatFieldForChatBox)
        .populate({
          path: "currentChatMembers",
          select: {
            profile: 1,
            username: 1,
            firstName: 1,
            lastName: 1,
            isActive: 1,
            lastActive: 1
          },
          options: {
            lean: true
          }
        })
        .lean()

      if (chat) {
        chat.chatCreatedTime = timeDifferenceFromNow(chat.createdAt)

        if (chat.isGroupChat) {
          if (chat.hasOwnProperty("chatPic") && chat.chatPic !== "") {
            chat.chatPic = await signedUrlForGetAwsS3Object(chat.chatPic)
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
      errorLog("Server Error In Getting Chat Box Data By Id:"),
      mainErrorLog(err)
    )
    res.status(500).json({
      isSuccess: false,
      error: "Server Error In Accessing Chat Box, Please Try Again"
    })
  }
}

const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const Chat = require("../../models/chat")
const User = require("../../models/user")
///////
const { checkInFollowing } = require("../../common/checkUserFollowStatus")

// router.post("/access-chat-id", getLoginUser, accessChatId)
exports.getUserChatId = async (req, res) => {
  try {
    if (req.user) {
      const userId = req.body.userId
      if (!userId) {
        return res.json({
          isSuccess: false,
          error: "Send All The Required Fields With Request"
        })
      }
      const user = await User.findById(userId)
        .select({
          _id: 1,
          firstName: 1,
          lastName: 1,
          username: 1
        })
        .lean()
      if (user) {
        if (await checkInFollowing(req.user.id, userId)) {
          let isChat = await Chat.findOne({
            isGroupChat: false,
            $and: [
              {
                currentChatMembers: {
                  $elemMatch: { $eq: req.user.id }
                }
              },
              {
                currentChatMembers: {
                  $elemMatch: { $eq: userId }
                }
              }
            ],
            currentChatMembers: { $size: 2 }
          })
            .select({ _id: 1 })
            .lean()

          if (isChat) {
            res.json({
              isSuccess: true,
              chatId: isChat._id
            })
          } else {
            let chatData = {
              isGroupChat: false,
              currentChatMembers: [req.user.id, userId],
              allChatMembers: [req.user.id, userId]
            }

            const createdChat = new Chat(chatData)
            await createdChat.save()
            res.json({
              isSuccess: true,
              chatId: createdChat._id
            })
          }
        } else {
          res.json({
            isSuccess: false,
            error: `To Message ${user.firstName} ${user.lastName}, First Follow Him/Her`
          })
        }
      } else {
        res.json({
          isSuccess: false,
          error: "User Not Found, Please Try Again"
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
      errorLog("Server Error In Accessing Chat Id:"),
      mainErrorLog(err)
    )
    res.status(500).json({
      isSuccess: false,
      error: "Server Error In Accessing Chat Here, Please Try Again"
    })
  }
}

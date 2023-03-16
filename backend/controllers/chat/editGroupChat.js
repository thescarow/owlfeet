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
const {
  signedUrlForGetAwsS3Object,
  deleteAwsS3Object
} = require("../../services/awsS3")

///////////////
const { selectChatField } = require("./common/filterChatField")
const { filterChatFieldForNonMember } = require("./common/filterChatField")
// router.post("/edit-group-chat", getLoginUser, editGroupChat)

exports.editGroupChat = async (req, res) => {
  try {
    if (req.user) {
      let groupChatData = req.body

      if (
        groupChatData.chatUserIds.length >= 2 &&
        groupChatData.chatUserIds.length <= 10
      ) {
        if (groupChatData.chatName.trim() !== "") {
          let setOfChatUserIds
          setOfChatUserIds = new Set(groupChatData.chatUserIds)
          groupChatData.chatUserIds = [...setOfChatUserIds]

          let allMembersInFollowingList = true
          await Promise.all(
            groupChatData.chatUserIds.map(async userId => {
              if (!(await checkInFollowing(req.user.id, userId))) {
                allMembersInFollowingList = false
              }
            })
          )
          setOfChatUserIds.add(req.user.id)
          groupChatData.chatUserIds = [...setOfChatUserIds]
          // groupChatData.chatUserIds.push(req.user.id)

          if (allMembersInFollowingList) {
            let newCurrentMembers,
              removedCurrentMembers,
              commonCurrentMembers,
              oldAllChatMembers

            let chat = await Chat.findOne({
              _id: groupChatData.chatId,
              groupChatAdmin: {
                $elemMatch: { $eq: req.user.id }
              },
              currentChatMembers: {
                $elemMatch: { $eq: req.user.id }
              }
            })
            if (chat) {
              // userIds from client side in string and created here are in ObjectId
              commonCurrentMembers = chat.currentChatMembers.filter(userId =>
                setOfChatUserIds.has(userId.toString())
              )
              let SetOfCommonCurrentMembers = new Set(
                commonCurrentMembers.map(userId => userId.toString())
              )

              newCurrentMembers = groupChatData.chatUserIds.filter(
                userId => !SetOfCommonCurrentMembers.has(userId.toString())
              )
              removedCurrentMembers = chat.currentChatMembers.filter(
                userId => !SetOfCommonCurrentMembers.has(userId.toString())
              )
              oldAllChatMembers = chat.allChatMembers
              /////////////////////////////////////////
              chat.chatName = groupChatData.chatName.trim()
              chat.chatDescription = groupChatData.chatDesc.trim()
              chat.chatPic =
                groupChatData.chatPic && groupChatData.chatPic !== ""
                  ? groupChatData.chatPic
                  : chat.chatPic

              chat.currentChatMembers = groupChatData.chatUserIds

              chat.allChatMembers = [
                ...new Set([...chat.allChatMembers, ...chat.currentChatMembers])
              ]

              await chat.save()
              let savedChat = await Chat.findById(chat._id)
                .select(selectChatField)
                .populate({
                  path: "currentChatMembers",
                  select: {
                    profile: 1,
                    username: 1,
                    firstName: 1,
                    lastName: 1,
                    bio: 1
                  },
                  options: {
                    lean: true
                  }
                })
                .lean()

              if (
                savedChat.hasOwnProperty("chatPic") &&
                savedChat.chatPic !== ""
              ) {
                savedChat.chatPic = await signedUrlForGetAwsS3Object(
                  savedChat.chatPic
                )
              }
              savedChat.chatCreatedTime = timeDifferenceFromNow(
                savedChat.createdAt
              )
              await Promise.all(
                savedChat.currentChatMembers.map(async user => {
                  if (user.hasOwnProperty("profile") && user.profile !== "") {
                    user.profile = await signedUrlForGetAwsS3Object(
                      user.profile
                    )
                  }
                })
              )

              // console.log(savedChat)
              console.log(
                "commonCurrentMembers:",
                commonCurrentMembers,
                "----",
                "newCurrentMembers:",
                newCurrentMembers,
                "----",
                "removedCurrentMembers:",
                removedCurrentMembers,
                "***************",
                "setOfCommonCurrentMembers",
                SetOfCommonCurrentMembers
              )

              attachSocket(
                req,
                savedChat,
                commonCurrentMembers,
                newCurrentMembers,
                removedCurrentMembers,
                oldAllChatMembers
              )

              savedChat.canSendMessageToThisChat = true
              res.json({ isSuccess: true, chat: savedChat })
            } else {
              if (
                groupChatData.hasOwnProperty("chatPic") &&
                groupChatData.chatPic !== ""
              ) {
                await deleteAwsS3Object(groupChatData.chatPic)
              }
              res.json({
                isSuccess: false,
                error:
                  "You Are Not Allowed To Edit This Chat, Ask Group Admin To Promote You To Admin"
              })
            }
          } else {
            if (
              groupChatData.hasOwnProperty("chatPic") &&
              groupChatData.chatPic !== ""
            ) {
              await deleteAwsS3Object(groupChatData.chatPic)
            }
            res.json({
              isSuccess: false,
              error:
                "All Selected Members Are Not In Your Following List,Please Edit Your Members List"
            })
          }
        } else {
          if (
            groupChatData.hasOwnProperty("chatPic") &&
            groupChatData.chatPic !== ""
          ) {
            await deleteAwsS3Object(groupChatData.chatPic)
          }
          res.json({
            isSuccess: false,
            error: "Please Choose A Name For Your Group"
          })
        }
      } else if (groupChatData.chatUserIds.length > 10) {
        if (
          groupChatData.hasOwnProperty("chatPic") &&
          groupChatData.chatPic !== ""
        ) {
          await deleteAwsS3Object(groupChatData.chatPic)
        }
        res.json({
          isSuccess: false,
          error: "Sorry,You Can Only Select Up To 10 Members"
        })
      } else {
        if (
          groupChatData.hasOwnProperty("chatPic") &&
          groupChatData.chatPic !== ""
        ) {
          await deleteAwsS3Object(groupChatData.chatPic)
        }
        res.json({
          isSuccess: false,
          error: "Please Select Atleast 2 Members"
        })
      }
    } else {
      if (
        groupChatData.hasOwnProperty("chatPic") &&
        groupChatData.chatPic !== ""
      ) {
        await deleteAwsS3Object(groupChatData.chatPic)
      }
      res.json({
        isSuccess: false,
        error: "You Are Not Logged In, Please Log In First"
      })
    }
  } catch (err) {
    console.log(
      errorLog("Server Error In Editing Group Chat:"),
      mainErrorLog(err)
    )
    res.status(500).json({
      isSuccess: false,
      error: "Server Error In Editing Group Chat, Please Try Again"
    })
  }
}

function attachSocket(
  req,
  chat,
  commonCurrentMembers,
  newCurrentMembers,
  removedCurrentMembers,
  oldAllChatMembers
) {
  commonCurrentMembers.forEach(userId => {
    chat.canSendMessageToThisChat = true
    if (userId.toString() !== req.user.id.toString()) {
      req.io.to(userId.toString()).emit("chat:edit-group-chat", chat)
    }
  })

  newCurrentMembers.forEach(userId => {
    if (
      oldAllChatMembers.some(
        memberId => memberId.toString() === userId.toString()
      )
    ) {
      chat.canSendMessageToThisChat = true
      if (userId.toString() !== req.user.id.toString()) {
        req.io.to(userId.toString()).emit("chat:edit-group-chat", chat)
      }
    } else {
      chat.canSendMessageToThisChat = true
      if (userId.toString() !== req.user.id.toString()) {
        req.io.to(userId.toString()).emit("chat:create-new-group-chat", chat)
      }
    }
  })

  let chatForRemovedCurrentMembers = filterChatFieldForNonMember(chat)
  removedCurrentMembers.forEach(userId => {
    chatForRemovedCurrentMembers.canSendMessageToThisChat = false
    if (userId.toString() !== req.user.id.toString()) {
      req.io
        .to(userId.toString())
        .emit("chat:edit-group-chat", chatForRemovedCurrentMembers)
    }
  })
}

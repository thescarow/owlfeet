const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const Message = require("../../models/message")

//////////////////////
const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")
///////
// const {
//   selectSafeMessageField
// } = require("../../common/filter-field/filterMessageField")

// router.get("/message/data/status/:messageId", getLoginUser, getMessageStatusData)

exports.getMessageStatusData = async (req, res) => {
  try {
    if (req.user) {
      const messageId = req.params.messageId
      let message = await Message.findOne({
        _id: messageId,
        reader: { $elemMatch: { $eq: req.user.id } },
        sender: { $eq: req.user.id }
      })
        .select({
          _id: 1,
          seenStatus: 1,
          deliveryStatus: 1,
          reader: 1,
          chat: 1,
          sender: 1
        })
        .populate({
          path: "seenStatus.seenBy",
          select: { firstName: 1, lastName: 1, profile: 1, username: 1 },
          options: {
            lean: true
          }
        })
        .lean()

      if (message) {
        message.readerCount = message.reader.length
        delete message.reader

        await Promise.all(
          message.seenStatus.map(async entry => {
            if (
              entry.seenBy.hasOwnProperty("profile") &&
              entry.seenBy.profile !== ""
            ) {
              entry.seenBy.profile = await signedUrlForGetAwsS3Object(
                entry.seenBy.profile
              )
            }
          })
        )
        res.json({ isSuccess: true, message: message })
      } else {
        res.json({
          isSuccess: false,
          error: "You Are Not Allowed To See This Message Info"
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
      errorLog("Server Error In Getting Message Status Data"),
      mainErrorLog(err)
    )
    res.status(500).json({
      isSuccess: false,
      error: " Server Error In Getting Message Status Data, Please Try Again"
    })
  }
}

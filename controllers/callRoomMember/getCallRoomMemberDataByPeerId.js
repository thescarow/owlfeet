const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////

const CallRoomMember = require("../../models/callRoomMember")

const {
  selectSafeCallRoomMemberField
} = require("../../common/filter-field/filterCallRoomMemberField")
const {
  selectUserFieldForCallRoom
} = require("../../common/filter-field/filterUserField")

const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")

// router.post("/call-room-member/data/member", getLoginUser, fetchChatBoxById)
exports.getCallRoomMemberDataByPeerId = async (req, res) => {
  try {
    if (req.user) {
      const data = req.body
      if (data.hasOwnProperty("peerId") && data.hasOwnProperty("callRoomId")) {
        let callRoomMember = await CallRoomMember.findOne({
          peerId: data.peerId,
          callRoom: data.callRoomId
        })
          .select(selectSafeCallRoomMemberField)
          .populate({
            path: "user",
            select: selectUserFieldForCallRoom,
            options: {
              lean: true
            }
          })
          .lean()

        if (callRoomMember) {
          if (
            callRoomMember.user.hasOwnProperty("profile") &&
            callRoomMember.user.profile !== ""
          ) {
            callRoomMember.user.profile = await signedUrlForGetAwsS3Object(
              callRoomMember.user.profile
            )
          }
          res.json({ isSuccess: true, callRoomMember: callRoomMember })
        } else {
          res.json({
            isSuccess: false,
            error: "This member have not joined this room till now "
          })
        }
      } else {
        res.json({
          isSuccess: false,
          error: "please send all the required fields with the request"
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
      errorLog("Server Error In Getting Call Room member Data By User Id:"),
      mainErrorLog(err)
    )
    res.status(500).json({
      isSuccess: false,
      error: "Server error in accessing call room member, Please try again"
    })
  }
}

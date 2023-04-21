const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////

const CallRoomMember = require("../../models/callRoomMember")

// router.put("/call-room-member/update-peer-id, updatePeerId)
exports.updatePeerId = async (req, res) => {
  try {
    if (req.user) {
      const data = req.body
      if (
        data.hasOwnProperty("userId") &&
        data.hasOwnProperty("callRoomId") &&
        data.hasOwnProperty("peerId")
      ) {
        if (data.userId.toString() === req.user.id.toString()) {
          let callRoomMember = await CallRoomMember.findOne({
            user: data.userId,
            callRoom: data.callRoomId
          }).select({ peerId: 1 })

          if (callRoomMember) {
            callRoomMember.peerId = data.peerId

            await callRoomMember.save()

            res.json({
              isSuccess: true
            })
          } else {
            res.json({
              isSuccess: false,
              error:
                "User has not joined this room successfully, please refresh your page"
            })
          }
        } else {
          res.json({
            isSuccess: false,
            error: "You are not allowed to update this peer id"
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
      errorLog("Server Error In Updating Peer Id:"),
      mainErrorLog(err)
    )
    res.status(500).json({
      isSuccess: false,
      error: "Server error updating peer, Please refresh your page"
    })
  }
}

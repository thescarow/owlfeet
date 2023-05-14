const CallRoomMember = require("../../../models/callRoomMember")
exports.createCallRoomMember = async userData => {
  let callRoomMember = await CallRoomMember.findOne({
    callRoom: userData.roomId,
    user: userData.userId
  }).lean()
  if (!callRoomMember) {
    let newCallRoomMemberData = {
      callRoom: userData.roomId,
      user: userData.userId,
      isCameraOn: userData.isCameraOn,
      isScreenShareOn: userData.isScreenShareOn,
      isAudioOn: userData.isAudioOn
    }
    let newCallRoomMember = new CallRoomMember(newCallRoomMemberData)
    await newCallRoomMember.save()
    return true
  } else {
    return false
  }
}

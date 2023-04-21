const mongoose = require("mongoose")
const callRoomMemberSchema = new mongoose.Schema(
  {
    callRoom: { type: mongoose.Schema.Types.ObjectId, ref: "CallRoom" },

    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    peerId: { type: String, default: "" },

    isVideoOn: {
      type: Boolean,
      default: false
    },
    isAudioOn: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model("CallRoomMember", callRoomMemberSchema)

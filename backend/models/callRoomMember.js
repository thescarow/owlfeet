const mongoose = require("mongoose")
const callRoomMemberSchema = new mongoose.Schema(
  {
    callRoom: { type: mongoose.Schema.Types.ObjectId, ref: "CallRoom" },

    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    userName: { type: String, default: "", trim: true },

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

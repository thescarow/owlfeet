const mongoose = require("mongoose")
const { roomStatusType } = require("./common/roomStatusType")

const callRoomSchema = new mongoose.Schema(
  {
    roomPic: {
      type: String,
      default: ""
    },

    roomName: { type: String, default: "", trim: true },

    roomDescription: {
      type: String,
      default: "",
      trim: true
    },

    roomStatus: {
      type: String,
      default: roomStatusType.WAITING
    },

    isChatRoom: {
      type: Boolean,
      default: false
    },

    roomChat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" }
  },
  { timestamps: true }
)

module.exports = mongoose.model("CallRoom", callRoomSchema)

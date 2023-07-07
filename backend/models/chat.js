const mongoose = require("mongoose")
const chatSchema = new mongoose.Schema(
  {
    isGroupChat: { type: Boolean, default: false },

    groupChatAdmin: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

    currentChatMembers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

    allChatMembers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

    chatPic: {
      type: String,
      default: ""
    },

    chatCustomBackground: {
      hasBackgroundColor: { type: Boolean, default: false },
      hasBackgroundImage: { type: Boolean, default: false },
      backgroundColor: { type: String, default: "#fff" },
      backgroundImage: { type: String, default: "" }
    },

    chatName: { type: String, default: "", trim: true },

    chatDescription: {
      type: String,
      default: "",
      trim: true
    },

    isOnCall: { type: Boolean, default: false },

    callRoomId: { type: mongoose.Schema.Types.ObjectId, ref: "CallRoom" },

    isDeleted: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model("Chat", chatSchema)

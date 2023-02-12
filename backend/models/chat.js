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

    chatName: { type: String, default: "", trim: true },

    chatDescription: {
      type: String,
      default: "",
      trim: true
    },
    isDeleted: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model("Chat", chatSchema)

const mongoose = require("mongoose")
const { mediaContentType } = require("./common/mediaContentType")
const messageSchema = new mongoose.Schema(
  {
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },

    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    reader: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],

    seenBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

    hasMediaContent: {
      type: Boolean,
      default: false
    },

    mediaContentType: {
      type: String,
      default: mediaContentType.DEFAULT
    },
    mediaContentMimeType: {
      type: String
    },
    mediaContentPath: {
      type: String,
      default: ""
    },

    textContent: { type: String, trim: true, default: "" },

    isRepliedMessage: {
      type: Boolean,
      default: false
    },

    repliedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message"
    },

    deletedFor: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }]
  },
  { timestamps: true }
)

module.exports = mongoose.model("Message", messageSchema)

const mongoose = require("mongoose")
const { mediaContentType } = require("./common/mediaContentType")
const { infoMessageType } = require("./common/infoMessageType")
const messageSchema = new mongoose.Schema(
  {
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },

    reader: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],

    seenBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

    deletedFor: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],

    ////
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

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
    //// info message
    isInfoMessage: { type: Boolean, default: false },

    infoMessageType: { type: String, default: infoMessageType.INFO },

    infoMessageContent: { type: String, trim: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model("Message", messageSchema)

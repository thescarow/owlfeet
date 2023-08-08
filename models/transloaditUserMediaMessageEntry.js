const mongoose = require("mongoose")

const transloaditUserMediaMessageEntrySchema = new mongoose.Schema(
  {
    isMessageDeleted: {
      type: Boolean,
      default: false,
      required: true
    },

    assemblyId: {
      type: String,
      default: "",
      required: true
    },
    fileId: {
      type: String,
      default: "",
      required: true
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: "",
      required: true
    },
    chatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
      default: "",
      required: true
    },
    clientMessageId: {
      type: String,
      default: "",
      required: true
    },
    isRepliedMessage: {
      type: Boolean,
      default: false
    },
    repliedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
      default: ""
    }
  },
  { timestamps: true }
)
module.exports = mongoose.model(
  "TransloaditUserMediaMessageEntry",
  transloaditUserMediaMessageEntrySchema
)

const mongoose = require("mongoose")
const { mediaContentType } = require("./common/mediaContentType")
const { infoMessageType } = require("./common/infoMessageType")
const messageSchema = new mongoose.Schema(
  {
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat"
    },

    reader: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
      }
    ],

    seenStatus: [
      {
        seenBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        seenTime: { type: Date }
      }
    ],

    deliveryStatus: {
      isDelivered: { type: Boolean, default: false },
      deliveredTime: { type: Date }
    },

    deletedFor: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

    isDeletedForAll: { type: Boolean, default: false },
    ////
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    hasMediaContent: {
      type: Boolean,
      default: false
    },

    mediaContentType: {
      type: String,
      default: ""
    },
    mediaContentMimeType: {
      type: String,
      default: ""
    },

    hasDirectMediaContentPath: {
      type: Boolean,
      default: false
    },

    mediaContentPath: {
      type: String,
      default: ""
    },

    mediaImageSpecs: {
      width: { type: String, default: "" },
      height: { type: String, default: "" },
      url: { type: String, default: "" },
      averageColor: { type: String, default: "#888" }
    },

    mediaVideoSpecs: {
      width: { type: String, default: "" },
      height: { type: String, default: "" },
      url: { type: String, default: "" }
    },

    mediaVideoClipSpecs: {
      width: { type: String, default: "" },
      height: { type: String, default: "" },
      mediaQuality: {
        hasLow: { type: Boolean, default: false },
        low: {
          width: { type: String, default: "" },
          height: { type: String, default: "" },
          url: { type: String, default: "" }
        },
        hasMedium: { type: Boolean, default: false },
        medium: {
          width: { type: String, default: "" },
          height: { type: String, default: "" },
          url: { type: String, default: "" }
        },
        hasHigh: { type: Boolean, default: false },
        high: {
          width: { type: String, default: "" },
          height: { type: String, default: "" },
          url: { type: String, default: "" }
        }
      },

      hasPreview: { type: Boolean, default: false },
      preview: {
        width: { type: String, default: "" },
        height: { type: String, default: "" },
        hasMp4: { type: Boolean, default: false },
        mp4: { type: String, default: "" },
        hasWebp: { type: Boolean, default: false },
        webp: { type: String, default: "" },
        hasGif: { type: Boolean, default: false },
        gif: { type: String, default: "" }
      }
    },

    mediaStickerSpecs: {
      width: { type: String, default: "" },
      height: { type: String, default: "" },
      hasMp4: { type: Boolean, default: false },
      mp4: { type: String, default: "" },
      hasWebp: { type: Boolean, default: false },
      webp: { type: String, default: "" },
      hasGif: { type: Boolean, default: false },
      gif: { type: String, default: "" },

      hasPreview: { type: Boolean, default: false },
      preview: {
        width: { type: String, default: "" },
        height: { type: String, default: "" },
        hasMp4: { type: Boolean, default: false },
        mp4: { type: String, default: "" },
        hasWebp: { type: Boolean, default: false },
        webp: { type: String, default: "" },
        hasGif: { type: Boolean, default: false },
        gif: { type: String, default: "" }
      }
    },

    textContent: {
      type: String,
      trim: true,
      default: ""
    },

    isRepliedMessage: {
      type: Boolean,
      default: false
    },

    repliedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message"
    },
    //// info message
    isInfoMessage: {
      type: Boolean,
      default: false
    },

    infoMessageType: {
      type: String,
      default: infoMessageType.INFO
    },

    infoMessageContent: {
      type: String,
      trim: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model("Message", messageSchema)

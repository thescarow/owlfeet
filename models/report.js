const mongoose = require("mongoose")

const reportSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    username: {
      type: String
    },
    report: {
      type: String,
      default: "",
      required: true
    }
  },
  { timestamps: true }
)
module.exports = mongoose.model("Report", reportSchema)

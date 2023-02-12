const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const { getLoginUser } = require("../middleware/auth.middleware")
const User = require("../models/user")
const FollowRequest = require("../models/followRequest")

router.get("/", getLoginUser, async (req, res) => {
  console.log(req.user.id)

  res.send("test working")
})

module.exports = router

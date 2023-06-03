const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const { getLoginUser } = require("../middleware/auth.middleware")

router.get("/", getLoginUser, async (req, res) => {
  res.render("./test/test", {
    pageName: "profile",
    accountType: "signup"
  })
})
router.get("/2", getLoginUser, async (req, res) => {
  res.render("./test/test2", {
    pageName: "profile",
    accountType: "signup"
  })
})

module.exports = router

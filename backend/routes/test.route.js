const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const { getLoginUser } = require("../middleware/auth.middleware")

router.get("/", getLoginUser, async (req, res) => {
  // console.log("req.user:", req.user)
  // if (req.user) {

  res.render("./test/test", {
    pageName: "profile",
    accountType: "signup"
  })

  // if (
  //   req.url == "/login" ||
  //   req.url == "/signin" ||
  //   req.url == "/account" ||
  //   req.url == "/profile"
  // )
  // res.render("./user-auth/account1", {
  //   pageName: "profile",
  //   accountType: "login"
  // })
  // }
})

module.exports = router

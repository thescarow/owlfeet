const express = require("express")
const jwt = require("jsonwebtoken")
const router = express.Router()
const getloginuser = require("../middleware/getloginuser")

router.get("/", getloginuser, async (req, res) => {
  if (req.userId) {
    res.render("add", {
      page_name: "add"
    })
  } else {
    res.send("please login to create news")
  }
})

module.exports = router

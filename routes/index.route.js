const express = require("express")
const router = express.Router()
const { getLoginUser } = require("../middleware/auth.middleware")
const { getHomePage } = require("../controllers/index")

router.get("/", getHomePage)

// router.post("/fetchNews", getLoginUser, indexController.postFetchNews)

////render account page

module.exports = router

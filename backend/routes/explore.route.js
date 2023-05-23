const { Router } = require("express")
const router = Router()
const { getLoginUser } = require("../middleware/auth.middleware")
const { getExplorePage } = require("../controllers/explore")

router.get("/", getLoginUser, getExplorePage)

module.exports = router

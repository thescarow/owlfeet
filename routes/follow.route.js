const { Router } = require("express")
const router = Router()
const { getLoginUser } = require("../middleware/auth.middleware")
const {
  fetchFollower,
  fetchOtherUserFollower,
  fetchFollowing,
  fetchOtherUserFollowing,
  fetchSentFollowRequest,
  fetchReceivedFollowRequest,
  fetchFollowSuggestion,

  sendFollowRequest,
  acceptReceivedFollowRequest,
  removeFollower,
  unfollow,

  cancelSentFollowRequest,
  deleteReceivedFollowRequest
} = require("../controllers/follow")

router.get("/follower", getLoginUser, fetchFollower)
router.get("/follower/:userId", getLoginUser, fetchOtherUserFollower)
router.get("/following", getLoginUser, fetchFollowing)
router.get("/following/:userId", getLoginUser, fetchOtherUserFollowing)
router.get("/sent-follow-request", getLoginUser, fetchSentFollowRequest)
router.get("/received-follow-request", getLoginUser, fetchReceivedFollowRequest)
router.get("/follow-suggestion", getLoginUser, fetchFollowSuggestion)

router.patch("/send-follow-request/:userId", getLoginUser, sendFollowRequest)
router.patch(
  "/cancel-sent-follow-request/:userId",
  getLoginUser,
  cancelSentFollowRequest
)
router.patch("/unfollow/:userId", getLoginUser, unfollow)

router.patch("/remove-follower/:userId", getLoginUser, removeFollower)

router.patch(
  "/accept-received-follow-request/:userId",
  getLoginUser,
  acceptReceivedFollowRequest
)
router.patch(
  "/delete-received-follow-request/:userId",
  getLoginUser,
  deleteReceivedFollowRequest
)

module.exports = router

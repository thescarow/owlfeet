const { fetchFollower } = require("./fetchFollower")
const { fetchOtherUserFollower } = require("./fetchOtherUserFollower")
const { fetchFollowing } = require("./fetchFollowing")
const { fetchOtherUserFollowing } = require("./fetchOtherUserFollowing")
const { fetchSentFollowRequest } = require("./fetchSentFollowRequest")
const { fetchReceivedFollowRequest } = require("./fetchReceivedFollowRequest")
const { fetchFollowSuggestion } = require("./fetchFollowSuggestion")

const { sendFollowRequest } = require("./sendFollowRequest")
const { acceptReceivedFollowRequest } = require("./acceptReceivedFollowRequest")
const { removeFollower } = require("./removeFollower")
const { unfollow } = require("./unfollow")

const { cancelSentFollowRequest } = require("./cancelSentFollowRequest")
const { deleteReceivedFollowRequest } = require("./deleteReceivedFollowRequest")

module.exports = {
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
}

const { getProfilePageByUsername } = require("./getProfilePageByUsername")
const { fetchFollowingUsers } = require("./fetchFollowingUsers")
const { getLoginUserData } = require("./getLoginUserData")
const { getProfileUserData } = require("./getProfileUserData")

module.exports = {
  getProfilePageByUsername,
  fetchFollowingUsers,
  getLoginUserData,
  getProfileUserData
}

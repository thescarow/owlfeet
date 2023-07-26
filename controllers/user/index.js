const { getProfilePageByUsername } = require("./getProfilePageByUsername")
const { fetchFollowingUsers } = require("./fetchFollowingUsers")
const { fetchMainUsersData } = require("./fetchMainUsersData")
const { getLoginUserData } = require("./getLoginUserData")
const { getProfileUserData } = require("./getProfileUserData")
const { checkLoginStatus } = require("./checkLoginStatus")

module.exports = {
  getProfilePageByUsername,
  fetchMainUsersData,
  fetchFollowingUsers,
  getLoginUserData,
  getProfileUserData,
  checkLoginStatus
}

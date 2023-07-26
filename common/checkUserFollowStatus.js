const User = require("../models/user")
const FollowRequest = require("../models/followRequest")
//ownerUserId == user in which we are checking
//userId == this user is checked
exports.checkInReceivedFollowRequest = async (ownerUserId, userId) => {
  const followRequest = await FollowRequest.findOne({
    from: userId,
    to: ownerUserId
  })

  return followRequest
}
exports.checkInSentFollowRequest = async (ownerUserId, userId) => {
  const followRequest = await FollowRequest.findOne({
    from: ownerUserId,
    to: userId
  })

  return followRequest
}

exports.checkInFollower = async (ownerUserId, userId) => {
  const ownerUser = await User.findOne({
    _id: ownerUserId,
    followers: userId
  })
    .select({ _id: 1 })
    .lean()

  if (ownerUser) {
    return true
  } else {
    return false
  }
}
exports.checkInFollowing = async (ownerUserId, userId) => {
  const ownerUser = await User.findOne({
    _id: ownerUserId,
    followings: userId
  })
    .select({ _id: 1 })
    .lean()
  if (ownerUser) {
    return true
  } else {
    return false
  }
}

exports.getReceivedFollowRequestTotalCount = async userId => {
  let followRequestCount = await FollowRequest.countDocuments({
    to: userId
  })
  return followRequestCount
}

const User = require("../models/user")
const listUserField = {
  _id: 1,
  role: 1,
  privacy: 1,
  firstName: 1,
  lastName: 1,
  username: 1,
  gender: 1,
  profile: 1
}
const loginUserField = {
  _id: 1,
  role: 1,
  privacy: 1,
  firstName: 1,
  lastName: 1,
  username: 1,
  gender: 1,
  profile: 1,
  followers: 1,
  followings: 1,
  location: 1,
  bio: 1,
  birthday: 1
}

const otherUserField = {
  _id: 1,
  role: 1,
  privacy: 1,
  firstName: 1,
  lastName: 1,
  username: 1,
  bio: 1,
  location: 1,
  profile: 1,
  followers: 1,
  followings: 1
}

//////
exports.selectListUserField = {
  _id: 1,
  role: 1,
  privacy: 1,
  firstName: 1,
  lastName: 1,
  username: 1,
  gender: 1,
  profile: 1
}
exports.selectMessageUserField = {
  _id: 1,
  role: 1,
  privacy: 1,
  firstName: 1,
  lastName: 1,
  username: 1,
  gender: 1,
  profile: 1,
  bio: 1
}
exports.selectSafeUserField = {
  _id: 1,
  role: 1,
  privacy: 1,
  firstName: 1,
  lastName: 1,
  username: 1,
  gender: 1,
  profile: 1,
  followers: 1,
  followings: 1,
  location: 1,
  bio: 1,
  birthday: 1
} //remove password , mobile and email

exports.selectLoginUserForClientField = {
  _id: 1,
  role: 1,
  privacy: 1,
  firstName: 1,
  lastName: 1,
  username: 1,
  gender: 1,
  profile: 1,
  bio: 1
}
exports.filterListUserData = user => {
  const userDataFilterArray = Object.keys(listUserField)

  for (key in user) {
    if (!userDataFilterArray.includes(key)) {
      delete user[key]
    }
  }
}

exports.filterOtherUserField = user => {
  const userDataFilterArray = Object.keys(otherUserField)
  for (key in user) {
    if (!userDataFilterArray.includes(key)) {
      delete user[key]
    }
  }
}

exports.filterUserFollowListToLength = user => {
  user.followerLength = user.followers.length
  user.followingLength = user.followings.length
  delete user.followings
  delete user.followers
}

exports.getListUser = async userId => {
  const user = await User.findById({ _id: userId }).select(listUserField)

  return user
}
exports.getWholeUser = async userId => {
  const user = await User.findById({ _id: userId })
  return user
}

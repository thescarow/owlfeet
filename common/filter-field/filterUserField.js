const User = require("../../models/user")
const listUserField = {
  _id: 1,
  role: 1,
  privacy: 1,
  firstName: 1,
  lastName: 1,
  username: 1,
  profile: 1,
  gender: 1,
  isActive: 1
  // lastActive:1,
  // location: 1,
  // bio: 1,
  // birthday: 1,
  // followers: 1,
  // followings: 1
  // mobile: 1,
  // password: 1,
  // email: 1,
  // isEmailVerified: 1,
}

const otherUserField = {
  _id: 1,
  role: 1,
  privacy: 1,
  firstName: 1,
  lastName: 1,
  username: 1,
  profile: 1,
  gender: 1,
  location: 1,
  bio: 1,
  followers: 1,
  followings: 1
  // isActive: 1
  // lastActive:1,
  // birthday: 1,
  // mobile: 1,
  // password: 1,
  // email: 1,
  // isEmailVerified: 1,
}

//////////////////////////////////////////////
exports.selectLoginUserField = {
  _id: 1,
  role: 1,
  privacy: 1,
  firstName: 1,
  lastName: 1,
  username: 1,
  profile: 1,
  gender: 1,
  location: 1,
  bio: 1,
  birthday: 1,
  followers: 1,
  followings: 1,
  isActive: 1,
  lastActive: 1,
  email: 1,
  isEmailVerified: 1
  //   mobile: 1,
  //   password: 1,
}

exports.selectListUserField = {
  _id: 1,
  role: 1,
  privacy: 1,
  firstName: 1,
  lastName: 1,
  username: 1,
  profile: 1,
  gender: 1,
  isActive: 1
  // lastActive:1,
  //   location: 1,
  //   bio: 1,
  //   birthday: 1,
  //   followers: 1,
  //   followings: 1
  //   mobile: 1,
  //   password: 1,
  //   email: 1,
  //   isEmailVerified: 1,
}

exports.selectMessageUserField = {
  _id: 1,
  role: 1,
  privacy: 1,
  firstName: 1,
  lastName: 1,
  username: 1,
  profile: 1,
  gender: 1,
  isActive: 1
  // lastActive:1,
  //   location: 1,
  //   bio: 1,
  //   birthday: 1,
  //   followers: 1,
  //   followings: 1
  //   mobile: 1,
  //   password: 1,
  //   email: 1,
  //   isEmailVerified: 1,
}

exports.selectSafeUserField = {
  _id: 1,
  role: 1,
  privacy: 1,
  firstName: 1,
  lastName: 1,
  username: 1,
  profile: 1,
  gender: 1,
  location: 1,
  bio: 1,
  birthday: 1,
  followers: 1,
  followings: 1,
  isActive: 1,
  lastActive: 1
  //   mobile: 1,
  //   password: 1,
  //   email: 1,
  //   isEmailVerified: 1,
}

exports.selectBasicInfoUserField = {
  _id: 1,
  role: 1,
  privacy: 1,
  firstName: 1,
  lastName: 1,
  username: 1,
  profile: 1,
  gender: 1,
  bio: 1
  // isActive: 1
  // lastActive:1,
  //   location: 1,
  //   birthday: 1,
  //   followers: 1,
  //   followings: 1
  //   mobile: 1,
  //   password: 1,
  //   email: 1,
  //   isEmailVerified: 1,
}

exports.selectUserFieldForCallRoom = {
  _id: 1,
  firstName: 1,
  lastName: 1,
  profile: 1,
  gender: 1,
  bio: 1
  // isActive: 1,
  // role: 1,
  // privacy: 1,
  // username: 1,
  // lastActive:1,
  //   location: 1,
  //   birthday: 1,
  //   followers: 1,
  //   followings: 1
  //   mobile: 1,
  //   password: 1,
  //   email: 1,
  //   isEmailVerified: 1,
  // createdAt:1,
  // updatedAt:1
}
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
exports.filterListUserField = user => {
  const filteredKeyArray = Object.keys(listUserField)

  for (key in user) {
    if (!filteredKeyArray.includes(key)) {
      delete user[key]
    }
  }
}

exports.filterOtherUserField = user => {
  const filteredKeyArray = Object.keys(otherUserField)
  for (key in user) {
    if (!filteredKeyArray.includes(key)) {
      delete user[key]
    }
  }
}

exports.filterUserFollowFieldToLength = user => {
  user.followerLength = user.followers.length
  user.followingLength = user.followings.length
  delete user.followings
  delete user.followers
}

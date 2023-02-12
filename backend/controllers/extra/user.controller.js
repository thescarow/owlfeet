const chalk = require("chalk")
const { findOne } = require("../../models/user")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const User = require("../../models/user")
const {
  deleteAwsS3Object,
  signedUrlForGetAwsS3Object
} = require("../../services/awsS3")

//@description     Render profile Page by username
//@route           GET /user/:username
//@access          Accessing login User
exports.getProfilePageByUsername = async (req, res) => {
  try {
    let isOwner = false,
      isLogin = false
    let user = await User.findOne({ username: req.params.username })
      .select({
        firstName: 1,
        lastName: 1,
        username: 1,
        profile: 1,
        bio: 1,
        followers: 1,
        followings: 1,
        location: 1
      })
      .lean()
    if (user) {
      user.profileUrl = await signedUrlForGetAwsS3Object(user.profile)
      if (req.user) {
        isLogin = true
        if (req.user.username == user.username) {
          isOwner = true
        }
      }
      console.log(user)
      res.render("./user/profile.ejs", {
        user: user,
        isOwner: isOwner,
        isLogin: isLogin
      })
    } else {
      res.render("./error/commonServerError", {
        errorTitle: "User not found",
        errorMessage:
          "Can you please find this user and request him/her to join our community"
      })
    }
  } catch (e) {
    res.render("./error/commonServerError", {
      errorTitle: "Server Error",
      errorMessage: "please try again or go to Home Page"
    })
  }
}

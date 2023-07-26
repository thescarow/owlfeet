const chalk = require("chalk")
const { request } = require("express")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const { userPrivacy } = require("../../models/common/userRoleNPrivacy")
const User = require("../../models/user")
const { selectListUserField } = require("../../common/userData")
const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")

//router.get("/following/:userId", getLoginUser, fetchOtherUserFollowing)
exports.fetchOtherUserFollowing = async (req, res) => {
  try {
    if (req.user) {
      let skipNumber = parseInt(req.query.skipNumber)
      let userId = req.params.userId
      let user = await User.findById(userId)
        .select({ followings: 1, privacy: 1, firstName: 1, lastName: 1 })
        .populate({
          path: "followings",
          select: selectListUserField,
          options: {
            skip: skipNumber,
            limit: 7
          }
        })
        .lean()
      if (user) {
        let ownerUser = await User.findById(req.user.id).lean()
        if (
          ownerUser.followings.includes(userId) ||
          user.privacy === userPrivacy.PUBLIC ||
          userId === req.user.id
        ) {
          if (user.followings.length) {
            for (let i = 0; i < user.followings.length; i++) {
              if (
                user.followings[i].hasOwnProperty("profile") &&
                user.followings[i].profile !== ""
              )
                user.followings[i].profile = await signedUrlForGetAwsS3Object(
                  user.followings[i].profile
                )
            }
            res.json({ isSuccess: true, user: user.followings })
          } else {
            res.json({ isSuccess: false })
          }
        } else {
          res.json({
            isSuccess: false,
            error: `To See ${user.firstName} ${user.lastName} Following List, First Follow Him/Her`
          })
        }
      } else {
        res.json({
          isSuccess: false,
          error: "User Not Found"
        })
      }
    } else {
      res.json({
        isSuccess: false,
        error: "You Are Not Logged In, Please Log In First"
      })
    }
  } catch (err) {
    console.log(
      errorLog("Server Error In Fetching Other User Following:"),
      mainErrorLog(err)
    )

    res.status(500).json({
      isSuccess: false,
      error: "Server Error In Fetching Following,Please Try Again"
    })
  }
}

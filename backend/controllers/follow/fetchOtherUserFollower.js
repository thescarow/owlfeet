const chalk = require("chalk")
const { request } = require("express")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
//router.get("/following/:userId", getLoginUser, fetchOtherUserFollowing)
const { userPrivacy } = require("../../models/common/userRoleNPrivacy")
const User = require("../../models/user")
const { selectListUserField } = require("../../common/userData")
const { signedUrlForGetAwsS3Object } = require("../../services/awsS3")
exports.fetchOtherUserFollower = async (req, res) => {
  try {
    if (req.user) {
      let skipNumber = parseInt(req.query.skipNumber)
      let userId = req.params.userId
      let user = await User.findById(userId)
        .select({ followers: 1, privacy: 1, firstName: 1, lastName: 1 })
        .populate({
          path: "followers",
          select: selectListUserField,
          options: {
            skip: skipNumber,
            limit: 7
          }
        })
        .lean()
      if (user) {
        let ownerUser = await User.findById(req.user.id)
          .select({ followers: 1 })
          .lean()
        if (
          ownerUser.followers.includes(userId) ||
          user.privacy === userPrivacy.PUBLIC ||
          userId === req.user.id
        ) {
          if (user.followers.length) {
            for (let i = 0; i < user.followers.length; i++) {
              user.followers[i].profileUrl = await signedUrlForGetAwsS3Object(
                user.followers[i].profile
              )
            }
            res.json({ isSuccess: true, user: user.followers })
          } else {
            res.json({ isSuccess: false })
          }
        } else {
          res.json({
            isSuccess: false,
            error: `To See ${user.firstName} ${user.lastName} Followers List, First Follow Him/Her`
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
      errorLog("Server Error In Fetching Other User Followers:"),
      mainErrorLog(err)
    )

    res.status(500).json({
      isSuccess: false,
      error: "Server Error In Fetching Followers,Please Try Again"
    })
  }
}

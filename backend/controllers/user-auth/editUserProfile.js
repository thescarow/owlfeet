const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const User = require("../../models/user")
const jwt = require("jsonwebtoken")
const createDOMPurify = require("dompurify")
const { JSDOM } = require("jsdom")
const window = new JSDOM("").window
const DOMPurify = createDOMPurify(window)
const { deleteAwsS3Object } = require("../../services/awsS3")
const {
  cookieExpireDays,
  jwtExpireDays
} = require("../../common/authExpireDays")

//@description     edit User Profile
//@route           PATCH /userAuth/userEditProfile
//@access          private
exports.editUserProfile = async (req, res) => {
  try {
    if (req.user) {
      let user = await User.findById(req.user.id)
      let editProfileData = req.body
      for (let key in editProfileData) {
        editProfileData[key] = DOMPurify.sanitize(editProfileData[key])
        editProfileData[key] = editProfileData[key].trim()
      }
      if (user.username != editProfileData.username) {
        const chechUsername = await User.find({
          username: editProfileData.username
        }).lean()
        if (chechUsername.length) {
          deleteAwsS3Object(editProfileData.profile)
          return res.json({
            isSuccess: false,
            error:
              "Your username is already taken, please choose diffrent username"
          })
        }
      }

      if (
        editProfileData.firstName != "" &&
        editProfileData.username != "" &&
        editProfileData.state != "" &&
        editProfileData.city != "" &&
        editProfileData.birthday != ""
      ) {
        user.firstName = editProfileData.firstName
        user.lastName = editProfileData.lastName
        user.email = editProfileData.email
        user.username = editProfileData.username
        user.gender = editProfileData.gender
        user.birthday = new Date(editProfileData.birthday)
        user.location.country = editProfileData.country
        user.location.state = editProfileData.state
        user.location.city = editProfileData.city
        user.bio = editProfileData.bio
        user.profile = editProfileData.profile

        user.save()

        const accessToken = jwt.sign(
          {
            username: user.username,
            userId: user._id,
            userRole: user.role
          },
          process.env.JWT_SECRET,
          {
            expiresIn: jwtExpireDays
          }
        )

        res.cookie("user", accessToken, {
          expires: new Date(Date.now() + 84600 * 1000 * cookieExpireDays),
          httpOnly: true,
          secure: true, //for https connection only
          sameSite: "Lax",
          signed: true
          // domain: '' // default exclude all subdomain
          // path: '/' // Path for the cookie
        })
        res.json({
          isSuccess: true,
          username: user.username
        })
      } else {
        deleteAwsS3Object(editProfileData.profile)
        res.json({
          isSuccess: false,
          error: "Error: please fill all the required fields"
        })
      }
    } else {
      res.json({
        isSuccess: false,
        error: "Please Login First To Edit Your Profile"
      })
    }
  } catch (err) {
    console.log(
      errorLog("Server Error in Edit User Profile:"),
      mainErrorLog(err)
    )
    res.status(500).json({
      isSuccess: false,
      error: "Server Error In Editing Use Profile, Please Try Again"
    })
  }
}

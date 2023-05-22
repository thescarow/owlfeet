const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const User = require("../../models/user")
const bcrypt = require("bcrypt")
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
//@description     Signup User
//@route           POST /user-auth/user-signup
//@access          Public
exports.userSignup = async (req, res) => {
  try {
    let signupData = req.body
    // check for space in password
    for (let key in signupData) {
      if (key != "signupPassword") {
        signupData[key] = DOMPurify.sanitize(signupData[key])
        signupData[key] = signupData[key].trim()
      }
    }
    const chechUsername = await User.find({
      username: signupData.signupUsername
    }).lean()
    if (chechUsername.length) {
      deleteAwsS3Object(signupData.signupProfile)
      return res.json({
        isSuccess: false,
        error: "Your username is already taken, please choose diffrent username"
      })
    }
    const chechMobile = await User.find({
      mobile: signupData.signupMobile
    }).lean()
    if (chechMobile.length) {
      deleteAwsS3Object(signupData.signupProfile)
      return res.json({
        isSuccess: false,
        error:
          "Your Mobile Number is already taken, please choose diffrent Mobile Number"
      })
    }

    if (
      signupData.signupFirstName != "" &&
      signupData.signupPassword != "" &&
      signupData.signupUsername != "" &&
      signupData.signupState != "" &&
      signupData.signupCity != "" &&
      signupData.signupBirthday != ""
    ) {
      const signupHashedPassword = await bcrypt.hash(
        signupData.signupPassword,
        10
      )

      const createdUser = new User({
        firstName: signupData.signupFirstName,
        lastName: signupData.signupLastName,
        username: signupData.signupUsername,
        mobile: signupData.signupMobile,
        email: signupData.signupEmail,
        bio: signupData.signupBio,
        "location.country": signupData.signupCountry,
        "location.city": signupData.signupCity,
        "location.state": signupData.signupState,
        birthday: new Date(signupData.signupBirthday),
        password: signupHashedPassword,
        profile: signupData.signupProfile,
        gender: signupData.signupGender
      })

      const savedUser = await createdUser.save()

      const accessToken = jwt.sign(
        {
          username: savedUser.username,
          userId: savedUser._id,
          userRole: savedUser.role
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
        username: savedUser.username
      })
    } else {
      deleteAwsS3Object(signupData.signupProfile)
      res.json({
        isSuccess: false,
        error: "Error: please fill all the required fields"
      })
    }
  } catch (err) {
    console.log(errorLog("Server Error in sign up:"), mainErrorLog(err))
    res
      .status(500)
      .json({ isSuccess: false, error: "Server error,please try again" })
  }
}

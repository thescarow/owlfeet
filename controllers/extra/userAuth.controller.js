const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const createDOMPurify = require("dompurify")
const { JSDOM } = require("jsdom")
const window = new JSDOM("").window
const DOMPurify = createDOMPurify(window)
const City = require("country-state-city").City
/////////////////////////////////////////////////////////////
const { mobileOtpProcess } = require("../../common/mobileOtpProcess.common")
const User = require("../../models/user")
const MobileOtp = require("../../models/mobileOtp")
const { deleteAwsS3Object } = require("../../services/awsS3")
////////////////////////////////////////////////////////////

//@description     Send mobile otp and store it in database
//@route           POST /userAuth/sendSignupMobileOtp or /userAuth/sendResetPasswordOtp

//@access          Check New and Register Mobile

exports.sendMobileOtp = async (req, res) => {
  try {
    const mobile = req.body.mobile
    const mobileValidator = /^[5-9][0-9]{9}$/
    if (mobileValidator.test(mobile)) {
      let otpExist = await MobileOtp.findOne({ mobile: mobile })
        .sort({ createdAt: -1 })
        .lean()
      if (!otpExist || Date.now() - otpExist.createdAt.getTime() >= 120000) {
        const result = await mobileOtpProcess(mobile)
        // if result has an error property then its mean there is an error in sending otp
        if (result.error) {
          ///beacuase undefine value result false
          console.log(errorAndSkipLog(result.error))
          res.status(500).json({ success: false, error: "Server Error" })
        } else if (result.returnData.return == false) {
          res.json({
            success: false,
            error: "Invalid Mobile Number, Please check it and send Otp again"
          })
        } else if (result.returnData.return == true) {
          res.json({ success: true }) // success response
        }
      } else {
        res.json({
          success: false,
          error:
            "Otp already sent,please wait for given time after that resend it again"
        })
      }
    } else {
      //nuber could not pass the validator
      res.json({
        success: false,
        error: "Invalid Mobile Number, Please check it and send Otp again"
      })
    }
  } catch (err) {
    console.log(errorLog("Server Error in sendMobileOtp:", mainErrorLog(err)))
    res.status(500).json({ success: false, error: "Server Error" })
  }
}

//@description     Check mobile otp and delete from database
//@route           POST /userAuth/checkMobileOtp
//@access          Public
exports.checkMobileOtp = async (req, res) => {
  try {
    res.json({ success: true })
    // const otp = req.body.otp
    // const mobile = req.body.mobile
    // if (otp.length == 6 && mobile.length == 10) {
    //   const mobileOtpRecord = await MobileOtp.findOne({
    //     mobile: mobile
    //   })
    //     .sort({ createdAt: -1 })
    //     .lean()
    //   if (mobileOtpRecord) {
    //     if (mobileOtpRecord.expireAt.getTime() > Date.now()) {
    //       if (await bcrypt.compare(otp, mobileOtpRecord.otp)) {
    //         // await MobileOtp.deleteMany({
    //         //   mobile: mobileOtpRecord.mobile
    //         // })
    //         res.json({ success: true })
    //       } else {
    //         res.json({
    //           success: false,
    //           error: "Incorrect Otp"
    //         })
    //       }
    //     } else {
    //       await MobileOtp.deleteMany({ mobile: mobileOtpRecord.mobile })
    //       res.json({
    //         success: false,
    //         error: "Otp expired please send otp again"
    //       })
    //     }
    //   } else {
    //     res.json({
    //       success: false,
    //       error: "please send otp first and then try to signup"
    //     })
    //   }
    // } else {
    //   res.json({
    //     success: false,
    //     error: "incorrect mobile number or otp,please check them"
    //   })
    // }
  } catch (err) {
    console.log(errorLog("Error in check Mobile Otp:"), mainErrorLog(err))
    res.status(500).json({ success: false, error: "Server Error" })
  }
}

/////////////////////////////////////////////////////////////

const { generateUsername } = require("../common/userAuth/generateUsername")
//@description     Check username and if it is not unique, generate an unique username
//@route           GET /userAuth/checkUsername?checkUsername=&firstname=
//@access          Public
exports.checkUsername = async (req, res) => {
  try {
    let filterSpecial = new RegExp("[^a-zA-Z.]", "g")
    let filterSpace = new RegExp("\\s", "g")
    let change = false
    let checkUsername = req.query.checkUsername
    if (
      checkUsername.search(filterSpace) != -1 ||
      checkUsername.search(filterSpecial) != -1
    ) {
      change = true
    }
    checkUsername = checkUsername.replace(filterSpecial, "")
    checkUsername = checkUsername.replace(filterSpace, "")

    let firstName = req.query.firstName

    let user = await User.countDocuments({ username: checkUsername })
    if (user > 0) {
      let newUsername = await generateUsername(firstName)
      res.json({ isUnique: false, newUsername: newUsername })
    } else {
      res.json({ isUnique: true, change: change, newUsername: checkUsername })
    }
  } catch (err) {
    console.log(errorLog("error in checkUsername:"), mainErrorLog(err))
    res.status(500).json({ error: "Server Error" })
  }
}
//@description     Generate unique username
//@route           GET /userAuth/generateUsername?firstname=
//@access          Public
exports.generateUsername = async (req, res) => {
  let firstName = req.query.firstName
  let newUsername = await generateUsername(firstName)

  res.json({ newUsername: newUsername })
}
//@description     Generate cities for stateCode and countryCode
//@route           GET /userAuth/generateCities?stateCode=
//@access          Public
exports.generateCities = async (req, res) => {
  let stateCode = req.query.stateCode
  let countryCode = "IN"
  let cities = City.getCitiesOfState(countryCode, stateCode)
  cities = cities.map(city => {
    return city.name
  })
  res.json({
    citiesName: cities
  })
}
//@description     Signup User
//@route           POST /userAuth/userSignup
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
        success: false,
        error: "Your username is already taken, please choose diffrent username"
      })
    }
    const chechMobile = await User.find({
      mobile: signupData.signupMobile
    }).lean()
    if (chechMobile.length) {
      deleteAwsS3Object(signupData.signupProfile)
      return res.json({
        success: false,
        error:
          "Your Mobile Number is already taken, please choose diffrent Mobile Number"
      })
    }

    console.log("signupData:", dataLog(signupData))
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
        profile: signupData.signupProfile
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
          expiresIn: "30d"
        }
      )

      res.cookie("user", accessToken, {
        maxAge: 60 * 60 * 24 * 30 * 1000 // milisecond 1 day 30days
      })
      res.json({
        success: true,
        username: savedUser.username
      })
    } else {
      deleteAwsS3Object(signupData.signupProfile)
      res.json({
        success: false,
        error: "Error: please fill all the required fields"
      })
    }
  } catch (err) {
    console.log(errorLog("Server Error in sign up:"), mainErrorLog(err))
    res
      .status(500)
      .json({ success: false, error: "Server error,please try again" })
  }
}

//@description     Login user
//@route           POST /userAuth/userLogin
//@access          Public
exports.userLogin = async (req, res) => {
  try {
    let loginUser = req.body.loginUser
    let loginPassword = req.body.loginPassword
    let user
    if (!isNaN(loginUser)) {
      user = await User.findOne({ mobile: loginUser }).lean()
    } else {
      user = await User.findOne({ username: loginUser }).lean()
    }

    if (user) {
      if (await bcrypt.compare(loginPassword, user.password)) {
        const accessToken = jwt.sign(
          { username: user.username, userId: user._id, userRole: user.role },
          process.env.JWT_SECRET,
          {
            expiresIn: "30d"
          }
        )
        res.cookie("user", accessToken, {
          maxAge: 60 * 60 * 24 * 30 * 1000 //30 days
        })
        res.json({ success: true, username: user.username })
      } else {
        res.json({ success: false, error: "User and Password does not match" })
      }
    } else {
      res.json({ success: false, error: "User is not exist" })
    }
  } catch (err) {
    console.log("Error in loginUser:", err)
    res.json({ success: false, error: "Server Error" })
  }
}

//@description     Render reset Password Page
//@route           GET /userAuth/resetPassword
//@access          Accessing login User
exports.getResetPasswordPage = (req, res) => {
  if (req.user) {
    res.redirect(`/users/${req.user.username}`)
  } else {
    res.render("./userAuth/resetPassword")
  }
}

//@description     Reseting Password
//@route           POST /userAuth/resetPassword
//@access          Public
exports.resetPassword = async (req, res) => {
  try {
    let data = req.body
    if (data.mobile && data.password) {
      const user = await User.findOne({ mobile: data.mobile })
      const hashedPassword = await bcrypt.hash(data.password, 10)
      user.password = hashedPassword
      await user.save()
      res.json({
        success: true
      })
    } else {
      res.json({ success: false, error: "please fill all fields" })
    }
  } catch (err) {
    res.json({ success: false, error: "Server Error" })
  }
}

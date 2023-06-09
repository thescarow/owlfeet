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

const { checkValidPassword } = require("./common/checkValidPassword")
const { checkValidUsername } = require("./common/checkValidUsername")
const { checkValidAccessToken } = require("./common/checkValidAccessToken")
//@description     Signup User
//@route           POST /user-auth/user-signup
//@access          Public
exports.userSignup = async (req, res) => {
  try {
    let signupData = req.body
    signupData.signupProfile =
      signupData.signupProfile && signupData.signupProfile.toString() !== ""
        ? signupData.signupProfile.toString()
        : ""
    if (
      signupData.signupProfile &&
      signupData.signupMobile &&
      signupData.signupFirstName &&
      signupData.signupPassword &&
      signupData.signupUsername &&
      signupData.signupState &&
      signupData.signupCity &&
      signupData.signupBirthday &&
      signupData.signupAccessToken
    ) {
      deleteAwsKey(signupData.signupProfile)
      return res.json({
        isSuccess: false,
        error: "Please send all the required data with the request"
      })
    } else {
      for (let key in signupData) {
        if (key != "signupPassword") {
          signupData[key] = DOMPurify.sanitize(signupData[key])
          signupData[key] = signupData[key].trim()
        }
      }

      let resultUsername = await checkValidUsername(signupData.signupUsername)
      if (!resultUsername.isValid) {
        deleteAwsKey(signupData.signupProfile)
        return res.json({
          isSuccess: false,
          error: resultUsername.error
        })
      } else {
        let resultPassword = checkValidPassword(signupData.signupPassword)
        if (!resultPassword.isValid) {
          deleteAwsKey(signupData.signupProfile)
          return res.json({
            isSuccess: false,
            error: resultPassword.error
          })
        } else {
          if (signupData.signupFirstName.toString() === "") {
            deleteAwsKey(signupData.signupProfile)
            return res.json({
              isSuccess: false,
              error:
                "First name can not be empty, or you can't use spaces as your first name"
            })
          } else {
            // if(signupData.signupBirthday)
            const mobileValidator = /^[5-9][0-9]{9}$/

            if (!mobileValidator.test(signupData.signupMobile)) {
              return res.json({
                isSuccess: false,
                error:
                  "Invalid Mobile Number, Please check it and send Otp again"
              })
            } else {
              const chechMobile = await User.findOne({
                mobile: signupData.signupMobile
              })
                .select({ _id: 1 })
                .lean()
              if (chechMobile) {
                deleteAwsKey(signupData.signupProfile)
                return res.json({
                  isSuccess: false,
                  error:
                    "This Mobile Number is already taken, Please choose diffrent one"
                })
              } else {
                let resultToken = await checkValidAccessToken(
                  signupData.signupMobile,
                  signupData.signupAccessToken
                )
                if (!resultToken.isValid) {
                  deleteAwsKey(signupData.signupProfile)
                  return res.json({
                    isSuccess: false,
                    error: resultToken.error
                  })
                } else {
                  const signupHashedPassword = await bcrypt.hash(
                    signupData.signupPassword,
                    10
                  )

                  const createdUser = new User({
                    firstName: signupData.signupFirstName,
                    lastName: signupData.signupLastName || "",
                    username: signupData.signupUsername,
                    mobile: signupData.signupMobile,
                    email: signupData.signupEmail || "",
                    bio: signupData.signupBio || "",
                    "location.country": signupData.signupCountry || "IN",
                    "location.city": signupData.signupCity || "",
                    "location.state": signupData.signupState || "",
                    birthday: new Date(signupData.signupBirthday) || new Date(),
                    password: signupHashedPassword,
                    profile: signupData.signupProfile,
                    gender: signupData.signupGender || "male"
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
                    expires: new Date(
                      Date.now() + 84600 * 1000 * cookieExpireDays
                    ),
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

                  ////////end
                }
              }
            }
          }
        }
      }
    }
  } catch (err) {
    console.log(errorLog("Server Error in sign up:"), mainErrorLog(err))
    res
      .status(500)
      .json({ isSuccess: false, error: "Server error,please try again" })
  }
}

async function deleteAwsKey(key) {
  if (key !== "") await deleteAwsS3Object(key)
}

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
// const { deleteAwsS3Object } = require("../../services/awsS3")
const {
  cookieExpireDays,
  jwtExpireDays
} = require("../../common/authExpireDays")

const { checkValidUsername } = require("./common/checkValidUsername")

//@description     edit User Profile
//@route           PATCH /userAuth/userEditProfile
//@access          private
exports.editUserProfile = async (req, res) => {
  try {
    if (!req.user) {
      return res.json({
        isSuccess: false,
        error: "You Are Not Logged In, Please Log In First"
      })
    } else {
      let editData = req.body
      editData.editProfile =
        editData.editProfile && editData.editProfile.toString() !== ""
          ? editData.editProfile.toString()
          : ""
      // because edit profile is already check here

      if (
        !(
          editData.editFirstName &&
          editData.editUsername &&
          editData.editState &&
          editData.editCity &&
          editData.editBirthday
        )
      ) {
        console.log("editData:", editData)
        return res.json({
          isSuccess: false,
          error: "Please send all the required data with the request"
        })
      } else {
        for (let key in editData) {
          if (key != "editPassword") {
            editData[key] = DOMPurify.sanitize(editData[key])
            editData[key] = editData[key].trim()
          }
        }

        let user = await User.findById(req.user.id)

        let isUsernameValid = true
        if (user.username !== editData.editUsername) {
          let resultUsername = await checkValidUsername(editData.editUsername)
          if (!resultUsername.isValid) {
            isUsernameValid = false
            return res.json({
              isSuccess: false,
              error: resultUsername.error
            })
          }
        }

        if (isUsernameValid) {
          if (editData.editFirstName.toString() === "") {
            return res.json({
              isSuccess: false,
              error:
                "First name can not be empty, or you can't use spaces as your first name"
            })
          } else {
            // if(editData.editBirthday)

            user.firstName = editData.editFirstName
            user.lastName = editData.editLastName || ""
            // user.email = editData.editEmail || ""
            user.username = editData.editUsername
            user.birthday = new Date(editData.editBirthday) || new Date()
            user.bio = editData.editBio || ""
            user.location.country = editData.editCountry || "IN"
            user.location.city = editData.editCity || ""
            user.location.state = editData.editState || ""
            user.profile = editData.editProfile
            user.gender = editData.editGender || "male"

            let savedUser = await user.save()

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
              isSuccess: true
            })

            ////////end
          }
        }
      }
    }
  } catch (err) {
    console.log(
      errorLog("Server Error in editing User profile:"),
      mainErrorLog(err)
    )
    res
      .status(500)
      .json({ isSuccess: false, error: "Server error,please try again" })
  }
}

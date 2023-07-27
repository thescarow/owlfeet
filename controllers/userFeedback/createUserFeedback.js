const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const UserFeedback = require("../../models/userFeedback")

const createDOMPurify = require("dompurify")
const { JSDOM } = require("jsdom")

const window = new JSDOM("").window
const DOMPurify = createDOMPurify(window)

//@description     User Feedback/Report User
//@route           POST /user-auth/user-feedback-report
//@access          Private //getLoginUser
exports.createUserFeedback = async (req, res) => {
  try {
    if (req.user) {
      let { id, feedbackType, message, email, url } = req.body
      // console.log(
      //   `New ${feedbackType} feedback for form ${id} from user ${email} on page ${url}: ${message}`
      // )
      // do something with feedback
      message = DOMPurify.sanitize(message).trim()
      if (message.trim() !== "") {
        const userFeedback = new UserFeedback({
          user: req.user.id,
          email: email || "",
          feedbackId: id,
          feedbackType: feedbackType,
          url: url,
          message: message
        })
        await userFeedback.save()
        res.json({
          isSuccess: true
        })
      } else {
        res.json({
          isSuccess: false,
          error: "Feedback string should not be empty"
        })
      }
    } else {
      res.json({
        isSuccess: false,
        error: `You Are Not Logged In, Please Login First To Send Your feedback`
      })
    }
  } catch (err) {
    console.log(errorLog("Server Error in userFeedback:"), mainErrorLog(err))
    res.status(500).json({
      isSuccess: false,
      error: "Server error in sending feedback,Please try again"
    })
  }
}

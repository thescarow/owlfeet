const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const Feedback = require("../../models/feedback")
const Report = require("../../models/report")

const createDOMPurify = require("dompurify")
const { JSDOM } = require("jsdom")
const window = new JSDOM("").window
const DOMPurify = createDOMPurify(window)

//@description     User Feedback/Report User
//@route           POST /user-auth/user-feedback-report
//@access          Private //getLoginUser
exports.userFeedbackReport = async (req, res) => {
  try {
    if (req.user) {
      let { userFeedbackReportType, userFeedbackReportValue } = req.body

      userFeedbackReportValue = DOMPurify.sanitize(
        userFeedbackReportValue
      ).trim()

      if (userFeedbackReportValue != "" && userFeedbackReportType != "") {
        if (userFeedbackReportType == "feedback") {
          const feedback = new Feedback({
            user: req.user.id,
            username: req.user.username || " ",
            feedback: userFeedbackReportValue
          })
          await feedback.save()
          res.json({
            isSuccess: true
          })
        } else if (userFeedbackReportType == "report") {
          const report = new Report({
            user: req.user.id,
            username: req.user.username || " ",
            report: userFeedbackReportValue
          })
          await report.save()

          res.json({
            isSuccess: true
          })
        } else {
          res.json({
            isSuccess: false,
            error: "You Are Not Allowed To Do This Operation"
          })
        }
      } else {
        res.json({
          isSuccess: false,
          error: `Please Fill All The Fields, Before Submitting The ${
            userFeedbackReportType == "feedback" ? "Feedback" : "Report"
          }`
        })
      }
    } else {
      res.json({
        isSuccess: false,
        error: `You Are Not Logged In, Please Login First To Send Your ${
          userFeedbackReportType == "feedback" ? "Feedback" : "Report"
        }`
      })
    }
  } catch (err) {
    console.log(
      errorLog("Server Error in userFeedbackReport:"),
      mainErrorLog(err)
    )
    res.status(500).json({
      isSuccess: false,
      error: "Server Error In Your Feedback/Report,Please Try Again"
    })
  }
}

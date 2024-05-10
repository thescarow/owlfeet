const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold

exports.notFound = (req, res, next) => {
  const error = new Error(`Page Not Found - ${req.originalUrl}`)
  error.status = 404
  next(error)
}

exports.errorHandler = (err, req, res, next) => {
  if (err.status == 404) {
    res.render("./error/notFound", {
      errorTitle: "I Think You Are Lost...",
      errorMessage: "Page Not Found"
    })
  } else {
    console.log(errorLog("Server Error:"), mainErrorLog(err.message))
    res.status(500).render("./error/commonServerError", {
      errorTitle: "Server Error",
      errorMessage: "Please Try Again Or Go Back To Home Page"
    })
  }
}

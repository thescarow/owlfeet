const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold

//@description     Render login and signup page

//@route           GET userAuth/login or userAuth/signin or userAuth/signup or userAuth/register or userAuth/account or userAuth/profile

//@access          Public and getLoginUser
exports.getHomePage = async (req, res) => {
  res.render("index/home.ejs", {
    pageName: "home"
  })
}

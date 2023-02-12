const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const { generateUsername } = require("./common/generateUsername")
//@description     Generate unique username
//@route           GET /userAuth/generateUsername?firstname=
//@access          Public
exports.generateUsername = async (req, res) => {
  let firstName = req.query.firstName
  let newUsername = await generateUsername(firstName)

  res.json({ newUsername: newUsername })
}

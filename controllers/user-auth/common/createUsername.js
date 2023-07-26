const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
/////////////////////////////////////////////////////////////
const User = require("../../../models/user")

// function for generating unique username
exports.createUsername = async name => {
  try {
    name = name.toString()
    name = name.trim()
    name = name.toLowerCase()

    let specialReg = new RegExp(`[^A-Za-z.0-9_\\s]`, "g") //special character
    let spaceReg = new RegExp("\\s", "g") //space character
    let capitalRegex = new RegExp("[A-Z]", "g") // capital letters(A-Z)
    let smallRegex = new RegExp("[a-z]", "g") // small alphabet(a-z)
    let smallAlpha = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ]

    let newUsername
    let isUnique = false
    name = name !== "" ? name : "user"
    name = name.replace(specialReg, "")
    name = name.replace(spaceReg, "")
    name = name.replace(capitalRegex, match => match.toLowerCase())
    while (!isUnique) {
      newUsername = name + Math.floor(Math.random() * 10000)
      if (newUsername.search(smallRegex) === -1) {
        let randomAlpha = smallAlpha[Math.floor(Math.random() * 20)]
        newUsername = name + randomAlpha + Math.floor(Math.random() * 10000)
      }
      let user = await User.countDocuments({ username: newUsername })
      if (user === 0) {
        isUnique = true
      }
    }
    return { isSuccess: true, username: newUsername }
  } catch (err) {
    console.log(errorLog("Error In Generating Username:"), mainErrorLog(err))
    return {
      isSuccess: false,
      error: "Error in generating new username, Please try again"
    }
  }
}

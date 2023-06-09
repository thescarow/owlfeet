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

    let specialReg = new RegExp(`[^A-Za-z.0-9_\\s]`, "g") //special character
    let spaceReg = new RegExp("\\s", "g") //space character

    let alphaReg = new RegExp("[a-zA-Z]", "g") // alphabate character
    let alpha = [
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
      "z",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
    ]

    let newUsername
    let isUnique = false
    name = name !== "" ? name : "user"
    name = name.replace(specialReg, "")
    name = name.replace(spaceReg, "")

    while (!isUnique) {
      newUsername = name + Math.floor(Math.random() * 10000)
      if (newUsername.search(alphaReg) === -1) {
        let randomAlpha = alpha[Math.floor(Math.random() * 20)]
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

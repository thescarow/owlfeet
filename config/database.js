const mongoose = require("mongoose")
const chalk = require("chalk")

exports.connectDB = () => {
  mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  const db = mongoose.connection
  db.on("error", error =>
    console.log(
      chalk.white.bgRed.bold(`Error in database connection: ${error}`)
    )
  )
  db.once("open", () =>
    console.log(
      chalk.white.bgGreen.bold(
        `Connected to Mongoose: ${db.host} and ${db.port}`
      )
    )
  )
}

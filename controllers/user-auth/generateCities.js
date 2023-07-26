const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
////////////////////////////////////////////////////
const City = require("country-state-city").City

exports.generateCities = async (req, res) => {
  try {
    let stateCode = req.query.stateCode
    if (stateCode) {
      let countryCode = "IN"
      let cities = City.getCitiesOfState(countryCode, stateCode)
      cities = cities.map(city => {
        return city.name
      })
      res.json({
        isSuccess: true,
        citiesName: cities
      })
    } else {
      res.json({
        isSuccess: false,
        error: "Please send all the required data with the request"
      })
    }
  } catch (err) {
    console.log(
      errorLog("Server Error In Generating Cities:"),
      mainErrorLog(err)
    )
    res.status(500).json({
      isSuccess: false,
      error: "Server Error, Please Try Again"
    })
  }
}

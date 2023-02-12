const City = require("country-state-city").City

//@description     Generate cities for stateCode and countryCode
//@route           GET /userAuth/generateCities?stateCode=
//@access          Public
exports.generateCities = async (req, res) => {
  let stateCode = req.query.stateCode
  let countryCode = "IN"
  let cities = City.getCitiesOfState(countryCode, stateCode)
  cities = cities.map(city => {
    return city.name
  })
  res.json({
    citiesName: cities
  })
}

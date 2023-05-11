exports.getCurrentTimeString = () => {
  let date = new Date()

  let timeString
  let hours = date.getHours()
  if (hours < 10) {
    hours = "0" + "" + hours
  }
  let mins = date.getMinutes()
  if (mins < 10) {
    mins = "0" + "" + mins
  }
  //   timeString = date.toDateString() + " " + hours + ":" + mins
  timeString = hours + ":" + mins
  return timeString
}

export function getTimeStringFromDate(date) {
  let dateObj = date
  if (typeof date === "string" || typeof date === "number") {
    dateObj = new Date(date)
  }

  let timeString
  let hours = dateObj.getHours()
  if (hours < 10) {
    hours = "0" + "" + hours
  }
  let mins = dateObj.getMinutes()
  if (mins < 10) {
    mins = "0" + "" + mins
  }
  timeString = dateObj.toDateString() + " " + hours + ":" + mins
  return timeString
}

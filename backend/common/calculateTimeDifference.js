exports.timeDifferenceFromNow = function (date) {
  let timeStandard = {
    sec: 1000,
    min: 60 * 1000,
    hour: 60 * 60 * 1000,
    day: 24 * 60 * 60 * 1000,
    week: 7 * 24 * 60 * 60 * 1000,
    month: 30 * 24 * 60 * 60 * 1000,
    year: 365 * 24 * 60 * 60 * 1000
  }
  let dateObj = date
  if (typeof date == "string") {
    dateObj = new Date(date)
  }
  let timeDiff = Date.now() - dateObj.getTime() // in milisec
  if (timeDiff >= timeStandard.year) {
    let count = Math.round(timeDiff / timeStandard.year)
    return count + "year"
  } else if (timeDiff >= timeStandard.month) {
    let count = Math.round(timeDiff / timeStandard.month)
    return count + "mo"
  } else if (timeDiff >= timeStandard.week) {
    let count = Math.round(timeDiff / timeStandard.week)
    return count + "week"
  } else if (timeDiff >= timeStandard.day) {
    let count = Math.round(timeDiff / timeStandard.day)
    return count + "day"
  } else if (timeDiff >= timeStandard.hour) {
    let count = Math.round(timeDiff / timeStandard.hour)
    return count + "hour"
  } else if (timeDiff >= timeStandard.min) {
    let count = Math.round(timeDiff / timeStandard.min)
    return count + "min"
  } else if (timeDiff >= timeStandard.sec) {
    let count = Math.round(timeDiff / timeStandard.sec)
    return count + "sec"
  } else {
    return "1sec"
  }
}

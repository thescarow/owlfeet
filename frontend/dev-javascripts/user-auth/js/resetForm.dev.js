import { createMainNotification } from "../../common/mainNotification.dev"
/////////////////////////////////////////////////////////////

const resetFormContainer = document.getElementById("resetFormContainer")
const resetForm = document.getElementById("resetForm")
const resetFormPage1 = document.getElementById("resetFormPage1")
const resetFormPage2 = document.getElementById("resetFormPage2")
const resetFormPage3 = document.getElementById("resetFormPage3")
////////////////////////////////////////////////////////////////////
// reset password progress
const resetProgressInfoStep = document.getElementById("resetProgressInfoStep")

const resetProgressInfoStepInfo = document.getElementById(
  "resetProgressInfoStepInfo"
)
const resetProgressBarhighlighter = document.getElementById(
  "resetProgressBarhighlighter"
)

// mobile page
const resetMobileNumber = document.getElementById("resetMobileNumber")

const resetMobileData = document.getElementById("resetMobileData") //from otp page
const sendResetOtpBtn = document.getElementById("sendResetOtpBtn")
let sendResetOtpAgainBtn = document.getElementById("sendResetOtpAgainBtn")

let resetOtpActivityTimer = document.getElementById("resetOtpActivityTimer")

let resetOtpActivityMinute = document.getElementById("resetOtpActivityMinute")

let resetOtpActivitySecond = document.getElementById("resetOtpActivitySecond")

let resetOtpTimerCounter = 0

let currentResetMobileNumber = 0
function startResetOtpTimer() {
  sendResetOtpAgainBtn.classList.add("otp-activity__btn--disabled")
  resetOtpActivityTimer.classList.add("otp-activity__timer--show")

  resetOtpTimerCounter = 120
  let timerId

  timerId = setInterval(() => {
    resetOtpActivityMinute.textContent =
      "0" + Math.floor(resetOtpTimerCounter / 60) + ":"
    let seconds = resetOtpTimerCounter % 60
    seconds = seconds < 10 ? "0" + seconds : seconds
    resetOtpActivitySecond.textContent = seconds
    resetOtpTimerCounter--
    if (resetOtpTimerCounter == 0) {
      clearInterval(timerId)
      resetOtpActivityMinute.textContent = "02:"
      resetOtpActivitySecond.textContent = "00"
      sendResetOtpAgainBtn.classList.remove("otp-activity__btn--disabled")
      resetOtpActivityTimer.classList.remove("otp-activity__timer--show")
    }
  }, 1000)
}

const mobileValidator = /^[5-9][0-9]{9}$/
sendResetOtpBtn.addEventListener("click", () => {
  if (
    resetMobileNumber.value.length === 10 &&
    mobileValidator.test(resetMobileNumber.value)
  ) {
    if (
      currentResetMobileNumber.toString() !== resetMobileNumber.value.toString()
    ) {
      currentResetMobileNumber = resetMobileNumber.value

      fetch("/user-auth/send-reset-password-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ mobile: resetMobileNumber.value })
      })
        .then(res => {
          if (res.ok) {
            return res.json()
          } else throw new Error("Server Error,Please try again")
        })
        .then(data => {
          if (data.isSuccess) {
            startResetOtpTimer()

            resetFormPage1.style.left = "-150%"
            resetFormPage2.style.left = "0%"
            resetForm.scrollTop = 0
            resetMobileData.textContent = resetMobileNumber.value
            resetProgressBarhighlighter.style.width = "66%"
            resetProgressInfoStepInfo.textContent = "OTP"
            resetProgressInfoStep.textContent = "STEP: 2 OF 3"
            createMainNotification(
              "Otp send Successfully,Please check your inbox",
              "success"
            )
          } else {
            createMainNotification(data.error, "error")
          }
        })
        .catch(err => {
          console.log("Server error", err)
          createMainNotification("Server error", "error")
        })
    } else {
      resetFormPage1.style.left = "-150%"
      resetFormPage2.style.left = "0%"
      resetForm.scrollTop = 0
      resetMobileData.textContent = resetMobileNumber.value
      resetProgressBarhighlighter.style.width = "66%"
      resetProgressInfoStepInfo.textContent = "OTP"
      resetProgressInfoStep.textContent = "STEP: 2 OF 3"
    }
  } else {
    createMainNotification("Invalid Mobile Number, Please Change It", "info")
  }
})

sendResetOtpAgainBtn.addEventListener("click", e => {
  sendResetOtpAgainBtn.classList.add("otp-activity__btn--click")
  setTimeout(() => {
    sendResetOtpAgainBtn.classList.remove("otp-activity__btn--click")
  }, 500)

  if (mobileValidator.test(resetMobileNumber.value)) {
    if (
      !sendResetOtpAgainBtn.classList.contains("otp-activity__btn--disabled")
    ) {
      let data = { mobile: resetMobileNumber.value }

      fetch("/user-auth/send-reset-password-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => {
          if (res.ok) return res.json()
          else throw new Error("Server Error")
        })
        .then(data => {
          if (data.isSuccess) {
            startResetOtpTimer()
            createMainNotification(
              "Otp sent successfully,please check your inbox",
              "success"
            )
          } else {
            createMainNotification(data.error, "error")
          }
        })
        .catch(err => {
          console.log("server error: ", err)
          createMainNotification(
            "Server error,please refresh your page and try again",
            "error"
          )
        })
    }
  } else {
    createMainNotification("Invalid mobile number,please check it", "info")
  }
})

/////////////////////////////////////////////////
// reset password Otp form
const backToMobilePageBtn = document.getElementById("backToMobilePageBtn")
const getNewPasswordFormBtn = document.getElementById("getNewPasswordFormBtn")
const resetOtpInputs = document.querySelectorAll("#resetOtpInputs input")
resetOtpInputs.forEach((input, index) => {
  input.dataset.index = index
  input.addEventListener("paste", handleOnPasteOtp)
  input.addEventListener("keyup", handleOtp)
})

function handleOnPasteOtp(e) {
  const otpData = e.clipboardData.getData("text")
  const otpArr = otpData.split("")
  if (otpArr.length == resetOtpInputs.length) {
    resetOtpInputs.forEach((input, index) => (input.value = otpArr[index]))
  } else {
    createMainNotification(
      "You have copied incomplete otp,please go and copy again",
      "info"
    )
  }
}
function handleOtp(e) {
  const inputBox = e.target
  let inputBoxValue = inputBox.value.toString()
  inputBox.value = ""
  inputBox.value = inputBoxValue ? inputBoxValue[0] : ""

  let fieldIndex = inputBox.dataset.index
  if (inputBoxValue.length > 0 && fieldIndex < resetOtpInputs.length - 1) {
    inputBox.nextElementSibling.focus()
  }

  if (e.key == "Backspace" && fieldIndex > 0) {
    inputBox.previousElementSibling.focus()
  }
}

getNewPasswordFormBtn.addEventListener("click", () => {
  let resetOtp = ""
  resetOtpInputs.forEach(input => {
    resetOtp += input.value
  })

  if (resetMobileNumber.value.length == 10 && resetOtp.length == 6) {
    let data = { otp: resetOtp, mobile: resetMobileNumber.value }
    fetch("/user-auth/check-mobile-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok) return res.json()
        else throw new Error("Server Error")
      })
      .then(data => {
        if (data.isSuccess) {
          resetFormContainer.dataset.accessToken = data.accessToken
          resetFormPage2.style.left = "-150%"
          resetFormPage3.style.left = "0%"
          resetForm.scrollTop = 0
          resetProgressBarhighlighter.style.width = "100%"
          resetProgressInfoStepInfo.textContent = "Set New Password"
          resetProgressInfoStep.textContent = "STEP: 3 OF 3"
        } else {
          createMainNotification(data.error, "error")
        }
      })
      .catch(err => {
        console.log("Server error", err)
        createMainNotification("Server error", "error")
      })
  } else {
    createMainNotification("Error: Please type correct otp", "error")
  }
})

backToMobilePageBtn.addEventListener("click", () => {
  resetFormPage2.style.left = "150%"
  resetFormPage1.style.left = "0%"
  resetForm.scrollTop = 0
  resetProgressBarhighlighter.style.width = "33%"
  resetProgressInfoStepInfo.textContent = "Your Mobile Number"
  resetProgressInfoStep.textContent = "STEP: 1 OF 3"
})
//////////////////////////////////////////
// new password page

let resetPassword = document.getElementById("resetPassword")
let resetConfirmPassword = document.getElementById("resetConfirmPassword")

const resetPasswordBtn = [
  ...document.getElementsByClassName("input-field__btn--toggle-password-view")
]

resetPasswordBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("input-field__btn--unselected")) {
      btn.classList.remove("input-field__btn--unselected")
      btn.classList.add("input-field__btn--selected")
      if (btn.classList.contains("input-field__btn--password"))
        resetPassword.type = "text"
      else if (btn.classList.contains("input-field__btn--confirm-password"))
        resetConfirmPassword.type = "text"
    } else if (btn.classList.contains("input-field__btn--selected")) {
      btn.classList.remove("input-field__btn--selected")
      btn.classList.add("input-field__btn--unselected")
      if (btn.classList.contains("input-field__btn--password"))
        resetPassword.type = "password"
      else if (btn.classList.contains("input-field__btn--confirm-password"))
        resetConfirmPassword.type = "password"
    }
  })
})
//////////////////////////////////////////////////////////////
// password strenth

// traversing the DOM and getting the input and span using their IDs
const resetPasswordStrengthDivs = [
  ...document.querySelectorAll("#resetPasswordStrength div")
]
const resetPasswordStrengthtext = document.getElementsByClassName(
  "reset-password-strength-text"
)[0]

const resetPasswordRule8 = document.getElementById("resetPasswordRule8")
const resetPasswordRuleNumber = document.getElementById(
  "resetPasswordRuleNumber"
)
const resetPasswordRuleUpper = document.getElementById("resetPasswordRuleUpper")
const resetPasswordRuleSpecial = document.getElementById(
  "resetPasswordRuleSpecial"
)

// The strong and weak password Regex pattern checker

let strongPassword = new RegExp(
  "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
)
let mediumPassword = new RegExp(
  "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))|((?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,}))" //if missing number or missing special character or missing upper case or char length is 6
)
let passwordRule8 = new RegExp("(?=.{8,})")
let passwordRuleNumber = new RegExp("\\d")
let passwordRuleUpper = new RegExp("[A-Z]")
let passwordRuleSpecial = new RegExp("[^A-Za-z0-9]")
function passwordStrengthChecker(PasswordParameter) {
  // We then change the badge's color and text based on the password strength
  resetPasswordRule8.classList.toggle(
    "true",
    passwordRule8.test(PasswordParameter)
  )
  resetPasswordRuleNumber.classList.toggle(
    "true",
    passwordRuleNumber.test(PasswordParameter)
  )
  resetPasswordRuleUpper.classList.toggle(
    "true",
    passwordRuleUpper.test(PasswordParameter)
  )
  resetPasswordRuleSpecial.classList.toggle(
    "true",
    passwordRuleSpecial.test(PasswordParameter)
  )
  if (strongPassword.test(PasswordParameter)) {
    resetPasswordStrengthDivs[0].style.backgroundColor = "#61f743"
    resetPasswordStrengthDivs[1].style.backgroundColor = "#61f743"
    resetPasswordStrengthDivs[2].style.backgroundColor = "#61f743"
    resetPasswordStrengthtext.textContent = "Good"
  } else if (mediumPassword.test(PasswordParameter)) {
    resetPasswordStrengthDivs[0].style.backgroundColor = "#f7f143"
    resetPasswordStrengthDivs[1].style.backgroundColor = "#f7f143"
    resetPasswordStrengthDivs[2].style.backgroundColor = "transparent"
    resetPasswordStrengthtext.textContent = "Fair"
  } else {
    resetPasswordStrengthDivs[0].style.backgroundColor = "#fc4444"
    resetPasswordStrengthDivs[1].style.backgroundColor = "transparent"
    resetPasswordStrengthDivs[2].style.backgroundColor = "transparent"
    resetPasswordStrengthtext.textContent = "Week"
  }
}

// Adding an input event listener when a user types to the  password input
// passwordTimeout before a callback is called

let passwordTimeout
resetPassword.addEventListener("input", () => {
  //The badge is hidden by default, so we show it
  clearTimeout(passwordTimeout)

  //We then call the passwordStrengthChecker function as a callback then pass the typed password to it

  //Incase a user clears the text, the badge is transparent again

  if (resetPassword.value.length === 0) {
    resetPasswordStrengthDivs[0].style.backgroundColor = "transparent"
    resetPasswordStrengthDivs[1].style.backgroundColor = "transparent"
    resetPasswordStrengthDivs[2].style.backgroundColor = "transparent"
    resetPasswordStrengthtext.textContent = "None"
  } else {
    passwordTimeout = setTimeout(() => {
      if (resetConfirmPassword.value !== "")
        if (resetConfirmPassword.value === resetPassword.value) {
          resetConfirmPasswordText.textContent = "Match"
        } else {
          resetConfirmPasswordText.textContent = "Not match"
        }
      passwordStrengthChecker(resetPassword.value)
    }, 500)
  }
})

resetPassword.addEventListener("keyup", e => {
  resetPassword.value = resetPassword.value.replace(/\s/g, "")
})
// confirm password
const resetConfirmPasswordText = document.getElementById(
  "resetConfirmPasswordText"
)
let confirmPasswordTimeout
resetConfirmPassword.addEventListener("input", () => {
  clearTimeout(confirmPasswordTimeout)
  confirmPasswordTimeout = setTimeout(() => {
    if (resetConfirmPassword.value !== "")
      if (resetConfirmPassword.value === resetPassword.value) {
        resetConfirmPasswordText.textContent = "Match"
      } else {
        resetConfirmPasswordText.textContent = "Not match"
      }
  }, 500)
  if (resetConfirmPassword.value.length === 0) {
    resetConfirmPasswordText.textContent = ""
  }
})
resetConfirmPassword.addEventListener("keyup", e => {
  resetConfirmPassword.value = resetConfirmPassword.value.replace(/\s/g, "")
})

const submitResetPasswordBtn = document.getElementById("submitResetPasswordBtn")

submitResetPasswordBtn.addEventListener("click", () => {
  if (resetPassword.value === resetConfirmPassword.value) {
    let data = {
      mobile: resetMobileNumber.value,
      password: resetPassword.value,
      resetAccessToken: resetFormContainer.dataset.accessToken
    }

    fetch("/user-auth/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok) return res.json()
        else throw new Error("Server Error")
      })
      .then(data => {
        if (data.isSuccess) {
          createMainNotification("Password Changed Successfully", "success")
          setTimeout(() => {
            location.replace("/user-auth/login")
          }, 2000)
        } else {
          createMainNotification(data.error, "error")
        }
      })
      .catch(err => {
        console.log("Server error: " + err)
        createMainNotification("Server error", "error")
      })
  }
})

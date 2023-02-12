const forgotPasswordForm = document.getElementById("forgotPasswordForm")
/////////////////////////////////////////////////////////////
// notification field
const otpNotification = document.getElementById("otpNotification")
const mobileNotification = document.getElementById("mobileNotification")
const forgotPasswordFormPage1 = document.getElementById(
  "forgotPasswordFormPage1"
)
const forgotPasswordFormPage2 = document.getElementById(
  "forgotPasswordFormPage2"
)
const forgotPasswordFormPage3 = document.getElementById(
  "forgotPasswordFormPage3"
)
////////////////////////////////////////////////////////////////////
// reset password progress
const forgotPasswordProgressInfoStep = document.getElementById(
  "forgotPasswordProgressInfoStep"
)
const forgotPasswordProgressInfoStepInfo = document.getElementById(
  "forgotPasswordProgressInfoStepInfo"
)
const forgotPasswordProgressBarhighlighter = document.getElementById(
  "forgotPasswordProgressBarhighlighter"
)

// mobile page
const mobileData = document.getElementById("mobileData") //from otp page
const mobileNumber = document.getElementById("mobileNumber")
const sendOtp = document.getElementById("sendOtp")

const mobileValidator = /^[5-9][0-9]{9}$/
sendOtp.addEventListener("click", () => {
  if (mobileValidator.test(mobileNumber.value)) {
    fetch("/user-auth/send-reset-password-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ mobile: mobileNumber.value })
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else throw new Error("Server Error,Please try again")
      })
      .then(data => {
        if (data.isSuccess) {
          forgotPasswordFormPage1.style.left = "-150%"
          forgotPasswordFormPage2.style.left = "0%"
          forgotPasswordForm.scrollTop = 0
          mobileData.textContent = mobileNumber.value
          forgotPasswordProgressBarhighlighter.style.width = "66%"
          forgotPasswordProgressInfoStepInfo.textContent = "OTP"
          forgotPasswordProgressInfoStep.textContent = "STEP: 2 OF 3"
          otpNotification.textContent =
            "Otp send Successfully,Please check your inbox"
          otpNotification.classList.add("show", "success")
          setTimeout(() => {
            otpNotification.classList.remove("show", "success")
          }, 5000)
        } else {
          mobileNotification.textContent = data.error
          mobileNotification.classList.add("show", "error")
          setTimeout(() => {
            mobileNotification.classList.remove("show", "error")
          }, 5000)
        }
      })
      .catch(err => {
        mobileNotification.textContent = "Server Error"
        mobileNotification.classList.add("show", "error")
        setTimeout(() => {
          mobileNotification.classList.remove("show", "error")
        }, 5000)
      })
  } else {
    mobileNotification.textContent = "Invalid Mobile Number, Please Change It"
    mobileNotification.classList.add("show")

    setTimeout(() => {
      mobileNotification.classList.remove("show")
    }, 5000)
  }
})

/////////////////////////////////////////////////
// reset password Otp form
const backToMobilePage = document.getElementById("backToMobilePage")
const getNewPasswordForm = document.getElementById("getNewPasswordForm")
const inputs = document.querySelectorAll("#otp input")
inputs.forEach((input, index) => {
  input.dataset.index = index
  input.addEventListener("paste", handleOnPasteOtp)
  input.addEventListener("keyup", handleOtp)
})

function handleOnPasteOtp(e) {
  const data = e.clipboardData.getData("text")
  const value = data.split("")
  if (value.length == inputs.length) {
    inputs.forEach((input, index) => (input.value = value[index]))
  } else {
    otpNotification.textContent =
      "You have copied incomplete otp,please go and copy again"
    otpNotification.classList.add("show")
    setTimeout(() => {
      otpNotification.classList.remove("show")
    }, 5000)
  }
}

function handleOtp(e) {
  const input = e.target
  let value = input.value
  input.value = ""
  input.value = value ? value[0] : ""

  let fieldIndex = input.dataset.index
  if (value.length > 0 && fieldIndex < inputs.length - 1) {
    input.nextElementSibling.focus()
  }

  if (e.key == "Backspace" && fieldIndex > 0) {
    input.previousElementSibling.focus()
  }
}
getNewPasswordForm.addEventListener("click", () => {
  let otp = ""
  inputs.forEach(input => {
    otp += input.value
  })
  console.log(otp)
  if (mobileNumber.value.length == 10 && otp.length == 6) {
    let data = { otp: otp, mobile: mobileNumber.value }
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
          forgotPasswordFormPage2.style.left = "-150%"
          forgotPasswordFormPage3.style.left = "0%"
          forgotPasswordForm.scrollTop = 0
          forgotPasswordProgressBarhighlighter.style.width = "100%"
          forgotPasswordProgressInfoStepInfo.textContent = "Set New Password"
          forgotPasswordProgressInfoStep.textContent = "STEP: 3 OF 3"
        } else {
          otpNotification.textContent = data.error
          otpNotification.classList.add("show", "error")
          setTimeout(() => {
            otpNotification.classList.remove("show", "error")
          }, 5000)
        }
      })
      .catch(err => {
        otpNotification.textContent = "Server Error"
        otpNotification.classList.add("show", "error")
        setTimeout(() => {
          otpNotification.classList.remove("show", "error")
        }, 5000)
      })
  } else {
    otpNotification.textContent = "Error: Please type correct otp"
    otpNotification.classList.add("show", "error")
    setTimeout(() => {
      otpNotification.classList.remove("show", "error")
    }, 5000)
  }
})

backToMobilePage.addEventListener("click", () => {
  forgotPasswordFormPage2.style.left = "150%"
  forgotPasswordFormPage1.style.left = "0%"
  forgotPasswordForm.scrollTop = 0
  forgotPasswordProgressBarhighlighter.style.width = "33%"
  forgotPasswordProgressInfoStepInfo.textContent = "Your Mobile Number"
  forgotPasswordProgressInfoStep.textContent = "STEP: 1 OF 3"
})

//////////////////////////////////////////////////////////////
// reset password form
const password = document.getElementById("password")
const passwordStrengthDivs = [
  ...document.querySelectorAll("#passwordStrength div")
]
const passwordStrengthtext = document.getElementsByClassName(
  "password-strength-text"
)[0]

const passwordRule8List = document.getElementById("passwordRule8")
const passwordRuleNumberList = document.getElementById("passwordRuleNumber")
const passwordRuleUpperList = document.getElementById("passwordRuleUpper")
const passwordRuleSpecialList = document.getElementById("passwordRuleSpecial")

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
  passwordRule8List.classList.toggle(
    "true",
    passwordRule8.test(PasswordParameter)
  )
  passwordRuleNumberList.classList.toggle(
    "true",
    passwordRuleNumber.test(PasswordParameter)
  )
  passwordRuleUpperList.classList.toggle(
    "true",
    passwordRuleUpper.test(PasswordParameter)
  )
  passwordRuleSpecialList.classList.toggle(
    "true",
    passwordRuleSpecial.test(PasswordParameter)
  )
  if (strongPassword.test(PasswordParameter)) {
    for (let i = 0; i < passwordStrengthDivs.length; i++) {
      passwordStrengthDivs[i].classList.remove("weak", "medium")
      passwordStrengthDivs[i].classList.add("strong")
    }
    passwordStrengthtext.textContent = "Strong"
  } else if (mediumPassword.test(PasswordParameter)) {
    for (let i = 0; i < passwordStrengthDivs.length; i++) {
      passwordStrengthDivs[i].classList.remove("weak", "medium", "strong")
    }
    passwordStrengthDivs[0].classList.add("medium")
    passwordStrengthDivs[1].classList.add("medium")
    passwordStrengthtext.textContent = "Medium"
  } else {
    for (let i = 0; i < passwordStrengthDivs.length; i++) {
      passwordStrengthDivs[i].classList.remove("weak", "medium", "strong")
    }
    passwordStrengthDivs[0].classList.add("weak")
    passwordStrengthtext.textContent = "Low"
  }
}

// Adding an input event listener when a user types to the  password input
// passwordTimeout before a callback is called

let passwordTimeout
password.addEventListener("input", () => {
  //The badge is hidden by default, so we show it
  clearTimeout(passwordTimeout)

  //We then call the passwordStrengthChecker function as a callback then pass the typed password to it

  passwordTimeout = setTimeout(
    () => passwordStrengthChecker(password.value),
    500
  )

  //Incase a user clears the text, the badge is transparent again

  if (password.value.length == 0) {
    passwordStrengthDivs[0].style.backgroundColor = "transparent"
    passwordStrengthDivs[1].style.backgroundColor = "transparent"
    passwordStrengthDivs[2].style.backgroundColor = "transparent"
    passwordStrengthtext.textContent = "None"
  }
})

password.addEventListener("keyup", e => {
  password.value = password.value.replace(/\s/g, "")
})
///////////////////////////////////////////////////////////////
// confirm password
const confirmPasswordCheck = document.getElementById("confirmPasswordCheck")

const confirmPassword = document.getElementById("confirmPassword")
let confirmPasswordTimeout
confirmPassword.addEventListener("input", () => {
  clearTimeout(confirmPasswordTimeout)
  confirmPasswordTimeout = setTimeout(() => {
    if (confirmPassword.value == password.value) {
      confirmPasswordCheck.textContent = "match"
    } else {
      confirmPasswordCheck.textContent = "no match"
    }
  }, 500)
  if (confirmPassword.value.length == 0) {
    confirmPasswordCheck.textContent = "no match"
  }
})
confirmPassword.addEventListener("keyup", e => {
  confirmPassword.value = confirmPassword.value.replace(/\s/g, "")
})

//////////////////////////////////////////////////////////////////
// password show
const passwordShow = [...document.getElementsByClassName("password-show")]
passwordShow.forEach(btn => {
  btn.addEventListener("click", () => {
    passwordShow.forEach(eachSvg => {
      eachSvg.classList.toggle("show")
    })
    let type = password.getAttribute("type")

    if (type == "password") {
      password.type = "text"
      confirmPassword.type = "text"
    } else {
      password.type = "password"
      confirmPassword.type = "password"
    }
  })
})

const submitForgotPassword = document.getElementById("submitForgotPassword")
const submitNotification = document.getElementById("submitNotification")

submitForgotPassword.addEventListener("click", () => {
  if (password.value == confirmPassword.value) {
    let data = {
      mobile: mobileNumber.value,
      password: password.value
    }
    console.log(data)
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
          submitNotification.textContent = "Password Changed Successfully"
          submitNotification.classList.add("show", "success")
          setTimeout(() => {
            submitNotification.classList.remove("show", "success")
            location.replace("/user-auth/login")
          }, 2000)
        } else {
          submitNotification.textContent = data.error
          submitNotification.classList.add("show", "error")
          setTimeout(() => {
            submitNotification.classList.remove("show", "error")
          }, 5000)
        }
      })
      .catch(err => {
        submitNotification.textContent = "Server Error"
        submitNotification.classList.add("show", "error")
        setTimeout(() => {
          submitNotification.classList.remove("show", "error")
        }, 5000)
      })
  }
})

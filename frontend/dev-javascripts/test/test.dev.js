// import { checkKeyboard } from "../common/keyboardDetector.dev"

import { createMainNotification } from "../common/mainNotification.dev"
//build login and signup switching system between login box and signup box
let mainAccountContainer = document.getElementById("mainAccountContainer")
const openLoginBoxBtn = document.getElementById("openLoginBoxBtn")
const openSignupBoxBtn = document.getElementById("openSignupBoxBtn")
const accountBox = document.getElementById("accountBox")
const signupBox = document.getElementById("signupBox")
const loginBox = document.getElementById("loginBox")
const loginBoxInner = document.getElementById("loginBoxInner")

// const signupFormHolder = document.getElementById("signupFormHolder")

openLoginBoxBtn.addEventListener("click", e => {
  signupBox.classList.remove("signup-box--open")
  loginBox.classList.add("login-box--open")
  signupBox.scrollTop = 0
})

openSignupBoxBtn.addEventListener("click", e => {
  loginBox.classList.remove("login-box--open")
  signupBox.classList.add("signup-box--open")
  loginBoxInner.scrollTop = 0
})

// /////////////////////////////////////////////////
// ///////////////////////////////////////////////

// // start keyboard on off logic
// // import { checkKeyboard } from "../../public/javascripts/common/keyboardDetector";
// const mainNavigation = document.getElementById("mainNavigation")
// /// this is main navigation
// function onKeyboard(keyboardHeight) {
//   console.log("keyboard is Open:", keyboardHeight)
//   if (loginBox.classList.contains("slide-up")) {
//     loginBox.style.display = "none"
//   }
//   mainNavigation.style.display = "none"

//   document.body.style.height = 'calc(100% + keyboardHeight + "px")'
// }
// function offKeyboard(keyboardHeight) {
//   console.log("keyboard is off:", keyboardHeight)
//   loginBox.style.display = "initial"
//   mainNavigation.style.display = "flex"
//   document.body.style.height = "100vh"
// }
// checkKeyboard(onKeyboard, offKeyboard)
// ///////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////

const signupSendOtpBtn = document.getElementById("signupSendOtpBtn")
const signupMobile = document.getElementById("signupMobile")
const signupSendOtpTimer = document.getElementById("signupSendOtpTimer")
const signupSendOtpTimerMinute = document.getElementById(
  "signupSendOtpTimerMinute"
)
const signupSendOtpTimerSecond = document.getElementById(
  "signupSendOtpTimerSecond"
)

function startSignupOtpTimer() {
  signupSendOtpBtn.classList.add("signup-mobile__otp-btn--disabled")
  signupSendOtpTimer.classList.add("signup-mobile__otp-timer--show")

  let counter = 120
  let timerId

  timerId = setInterval(() => {
    signupSendOtpTimerMinute.textContent = "0" + Math.floor(counter / 60) + ":"
    let seconds = counter % 60
    seconds = seconds < 10 ? "0" + seconds : seconds
    signupSendOtpTimerSecond.textContent = seconds
    counter--
    if (counter == 0) {
      clearInterval(timerId)
      signupSendOtpBtn.classList.remove("signup-mobile__otp-btn--disabled ")
      signupSendOtpTimer.classList.remove("signup-mobile__otp-timer--show")
    }
  }, 1000)
}

const mobileValidator = /^[5-9][0-9]{9}$/

signupSendOtpBtn.addEventListener("click", e => {
  signupSendOtpBtn.classList.add("signup-mobile__otp-btn--click")
  setTimeout(() => {
    signupSendOtpBtn.classList.remove("signup-mobile__otp-btn--click")
  }, 500)

  if (mobileValidator.test(signupMobile.value)) {
    if (
      !signupSendOtpBtn.classList.contains("signup-mobile__otp-btn--disabled")
    ) {
      let data = { mobile: signupMobile.value }

      fetch("/user-auth/send-signup-mobile-otp", {
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
            startSignupOtpTimer()
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
// send otp to server and verify it and server send back the submit form
const checkSignupOtpBtn = document.getElementById("checkSignupOtpBtn")
const otpInputs = document.querySelectorAll("#signupOtp input")
otpInputs.forEach((input, index) => {
  input.dataset.index = index
  input.addEventListener("paste", handleOnPasteOtp)
  input.addEventListener("keyup", handleOtp)
})

function handleOnPasteOtp(e) {
  const otpData = e.clipboardData.getData("text")
  const otpArr = otpData.split("")
  if (otpArr.length === otpInputs.length) {
    otpInputs.forEach((input, index) => (input.value = otpArr[index]))
  } else {
    createMainNotification(
      "You have copied incomplete otp, Please copy again and paste here",
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
  if (inputBoxValue.length > 0 && fieldIndex < otpInputs.length - 1) {
    inputBox.nextElementSibling.focus()
  }

  if (e.key == "Backspace" && fieldIndex > 0) {
    inputBox.previousElementSibling.focus()
  }
}

checkSignupOtpBtn.addEventListener("click", () => {
  let signupOtp = ""
  otpInputs.forEach(input => {
    signupOtp += input.value
  })

  if (signupMobile.value.length === 10 && signupOtp.length === 6) {
    let data = { otp: signupOtp, mobile: signupMobile.value }
    fetch("/user-auth/check-mobile-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok) return res.json()
        else throw new Error("Server error")
      })
      .then(data => {
        if (data.isSuccess) {
          // used this value in signup javascript
          mainAccountContainer.dataset.mobileNumber = signupMobile.value
          import("./html/testSignupHtml.dev")
          import("./js/testSignup.dev")
        } else {
          createMainNotification(data.error, "error")
        }
      })
      .catch(err => {
        createMainNotification("Server error", "error")
      })
  } else if (signupMobile.value.length != 10 && signupOtp.length == 6) {
    createMainNotification("Incorrect Mobile number", "error")
  } else if (signupMobile.value.length == 10 && signupOtp.length != 6) {
    createMainNotification("Incorrect OTP", "error")
  } else {
    createMainNotification(
      "First enter your mobile number and send OTP to your number",
      "info"
    )
  }
})

// login form start here

const loginUser = document.getElementById("loginUser")
const loginPassword = document.getElementById("loginPassword")
const loginSubmitBtn = document.getElementById("loginSubmitBtn")

loginSubmitBtn.addEventListener("click", () => {
  if (loginUser.value !== "" && loginPassword.value !== "") {
    let data = {
      loginUser: loginUser.value,
      loginPassword: loginPassword.value
    }
    fetch("/user-auth/user-login", {
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
          location.replace(`/user/${data.username}`)
        } else {
          createMainNotification(data.error, "error")
        }
      })
      .catch(err => {
        console.log("Server error: " + err)
        createMainNotification("Server error:", "error")
      })
  } else if (loginUser.value === "" && loginPassword.value !== "") {
    createMainNotification(
      "Please fill Username/mobile anything, Don't leave it blank",
      "info"
    )
  } else if (loginUser.value !== "" && loginPassword.value === "") {
    createMainNotification(
      "Please fill password to unlock this security wall",
      "info"
    )
  } else {
    createMainNotification(
      "First enter your username or mobile number and then your password to break this security wall",
      "info"
    )
  }
})

loginPassword.addEventListener("keyup", e => {
  loginPassword.value = loginPassword.value.replace(/\s/g, "")
})

// password show
const toggleLoginPasswordBtn = document.getElementById("toggleLoginPasswordBtn")

toggleLoginPasswordBtn.addEventListener("click", () => {
  //   let loginPasswordType = loginPassword.getAttribute("type")
  if (
    toggleLoginPasswordBtn.classList.contains("login-password__btn--unselected")
  ) {
    toggleLoginPasswordBtn.classList.remove("login-password__btn--unselected")
    toggleLoginPasswordBtn.classList.add("login-password__btn--selected")
    loginPassword.type = "text"
  } else if (
    toggleLoginPasswordBtn.classList.contains("login-password__btn--selected")
  ) {
    toggleLoginPasswordBtn.classList.remove("login-password__btn--selected")
    toggleLoginPasswordBtn.classList.add("login-password__btn--unselected")
    loginPassword.type = "password"
  }
})

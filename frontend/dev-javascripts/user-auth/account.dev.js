// import { checkKeyboard } from "../common/keyboardDetector.dev"

import { createMainNotification } from "../common/mainNotification.dev"
//build login and register switching system between login box and register box
let mainAccountContainer = document.getElementById("mainAccountContainer")
const openLoginBoxBtn = document.getElementById("openLoginBoxBtn")
const openRegisterBoxBtn = document.getElementById("openRegisterBoxBtn")
const accountBox = document.getElementById("accountBox")
const registerBox = document.getElementById("registerBox")
const loginBox = document.getElementById("loginBox")
const loginBoxInner = document.getElementById("loginBoxInner")

// const registerFormHolder = document.getElementById("registerFormHolder")

openLoginBoxBtn.addEventListener("click", e => {
  registerBox.classList.remove("register-box--open")
  loginBox.classList.add("login-box--open")
  registerBox.scrollTop = 0
  const urlParams = new URLSearchParams(window.location.search)
  const nextUrl = urlParams.get("next")
  if (nextUrl !== null && nextUrl.trim() !== "") {
    history.pushState({}, "", `/user-auth/login?next=${nextUrl}`)
  } else {
    history.pushState({}, "", `/user-auth/login`)
  }
})

openRegisterBoxBtn.addEventListener("click", e => {
  loginBox.classList.remove("login-box--open")
  registerBox.classList.add("register-box--open")
  loginBoxInner.scrollTop = 0
  const urlParams = new URLSearchParams(window.location.search)
  const nextUrl = urlParams.get("next")
  if (nextUrl !== null && nextUrl.trim() !== "") {
    history.pushState({}, "", `/user-auth/register?next=${nextUrl}`)
  } else {
    history.pushState({}, "", `/user-auth/register`)
  }
})

let alreadyHaveAnAccountBtn = document.getElementById("alreadyHaveAnAccountBtn")
alreadyHaveAnAccountBtn.addEventListener("click", () => {
  if (registerBox.classList.contains("register-box--open")) {
    registerBox.classList.remove("register-box--open")
    registerBox.scrollTop = 0
  }
  if (!loginBox.classList.contains("login-box--open"))
    loginBox.classList.add("login-box--open")
  const urlParams = new URLSearchParams(window.location.search)
  const nextUrl = urlParams.get("next")
  if (nextUrl !== null && nextUrl.trim() !== "") {
    history.pushState({}, "", `/user-auth/login?next=${nextUrl}`)
  } else {
    history.pushState({}, "", `/user-auth/login`)
  }
})

window.addEventListener("popstate", async () => {
  if (location.pathname === "/user-auth/register") {
    loginBox.classList.remove("login-box--open")
    registerBox.classList.add("register-box--open")
    loginBoxInner.scrollTop = 0
  } else if (location.pathname === "/user-auth/login") {
    let resetFormContainer = document.getElementById("resetFormContainer")
    if (
      resetFormContainer &&
      !resetFormContainer.classList.contains("reset-form-container--hide")
    ) {
      resetFormContainer.classList.add("reset-form-container--hide")
    }

    let emailLoginContainer = document.getElementById("emailLoginContainer")
    if (
      emailLoginContainer &&
      !emailLoginContainer.classList.contains("email-login--hide")
    ) {
      emailLoginContainer.classList.add("email-login--hide")
    }

    if (accountBox.classList.contains("account-box--hide")) {
      accountBox.classList.remove("account-box--hide")
    }
    registerBox.classList.remove("register-box--open")
    loginBox.classList.add("login-box--open")
    registerBox.scrollTop = 0
  } else if (location.pathname === "/user-auth/reset-password") {
    let { createResetForm } = await import("./js/createResetForm.dev")
    createResetForm()
    await import("./js/resetForm.dev")
  } else if (location.pathname === "/user-auth/email-login") {
    let { createEmailLoginForm } = await import("./js/createEmailLoginForm.dev")
    createEmailLoginForm()
    await import("./js/emailLoginForm.dev")
  }
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

const sendRegisterOtpBtn = document.getElementById("sendRegisterOtpBtn")
const registerMobile = document.getElementById("registerMobile")
const registerOtpTimer = document.getElementById("registerOtpTimer")
const registerOtpTimerMinute = document.getElementById("registerOtpTimerMinute")
const registerOtpTimerSecond = document.getElementById("registerOtpTimerSecond")

function startRegisterOtpTimer() {
  sendRegisterOtpBtn.classList.add("account-otp-activity__btn--disabled")
  registerOtpTimer.classList.add("account-otp-activity__timer--show")

  let counter = 120
  let timerId

  timerId = setInterval(() => {
    registerOtpTimerMinute.textContent = "0" + Math.floor(counter / 60) + ":"
    let seconds = counter % 60
    seconds = seconds < 10 ? "0" + seconds : seconds
    registerOtpTimerSecond.textContent = seconds
    counter--
    if (counter == 0) {
      clearInterval(timerId)
      sendRegisterOtpBtn.classList.remove("account-otp-activity__btn--disabled")
      registerOtpTimer.classList.remove("account-otp-activity__timer--show")
    }
  }, 1000)
}

const mobileValidator = /^[5-9][0-9]{9}$/

sendRegisterOtpBtn.addEventListener("click", e => {
  sendRegisterOtpBtn.classList.add("account-otp-activity__btn--click")
  setTimeout(() => {
    sendRegisterOtpBtn.classList.remove("account-otp-activity__btn--click")
  }, 500)

  if (
    registerMobile.value.length === 10 &&
    mobileValidator.test(registerMobile.value)
  ) {
    if (
      !sendRegisterOtpBtn.classList.contains(
        "account-otp-activity__btn--disabled"
      )
    ) {
      let data = { mobile: registerMobile.value }

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
            startRegisterOtpTimer()
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
const checkRegisterOtpBtn = document.getElementById("checkRegisterOtpBtn")
const otpInputs = document.querySelectorAll("#registerOtp input")
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

checkRegisterOtpBtn.addEventListener("click", () => {
  let registerOtp = ""
  otpInputs.forEach(input => {
    registerOtp += input.value
  })

  if (registerMobile.value.length === 10 && registerOtp.length === 6) {
    let data = { otp: registerOtp, mobile: registerMobile.value }
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
      .then(async data => {
        if (data.isSuccess) {
          // used this value in register javascript
          mainAccountContainer.dataset.mobileNumber = registerMobile.value
          mainAccountContainer.dataset.accessToken = data.accessToken
          let { createSignupForm } = await import("./js/createSignupForm.dev")
          createSignupForm()
          await import("./js/signupForm.dev")
        } else {
          createMainNotification(data.error, "error")
        }
      })
      .catch(err => {
        console.log("server error: " + err)
        createMainNotification("Server error", "error")
      })
  } else if (registerMobile.value.length != 10 && registerOtp.length == 6) {
    createMainNotification("Incorrect Mobile number", "error")
  } else if (registerMobile.value.length == 10 && registerOtp.length != 6) {
    createMainNotification("Incorrect OTP", "error")
  } else {
    createMainNotification(
      "First enter your mobile number and send OTP to your number",
      "info"
    )
  }
})

// Login Form started here

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
          const urlParams = new URLSearchParams(window.location.search)
          const nextUrl = urlParams.get("next")
          if (nextUrl !== null && nextUrl.trim() !== "") {
            location.replace(`/${nextUrl}`)
          } else {
            location.replace(`/user/${data.username}`)
          }
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
    toggleLoginPasswordBtn.classList.contains(
      "account-input-field__btn--unselected"
    )
  ) {
    toggleLoginPasswordBtn.classList.remove(
      "account-input-field__btn--unselected"
    )
    toggleLoginPasswordBtn.classList.add("account-input-field__btn--selected")
    loginPassword.type = "text"
  } else if (
    toggleLoginPasswordBtn.classList.contains(
      "account-input-field__btn--selected"
    )
  ) {
    toggleLoginPasswordBtn.classList.remove(
      "account-input-field__btn--selected"
    )
    toggleLoginPasswordBtn.classList.add("account-input-field__btn--unselected")
    loginPassword.type = "password"
  }
})

let forgotPasswordBtn = document.getElementById("forgotPasswordBtn")
forgotPasswordBtn.addEventListener("click", async () => {
  let { createResetForm } = await import("./js/createResetForm.dev")
  createResetForm()
  await import("./js/resetForm.dev")
  history.pushState({}, "", `/user-auth/reset-password`)
})

let loginWithoutPasswordBtn = document.getElementById("loginWithoutPasswordBtn")
loginWithoutPasswordBtn.addEventListener("click", async () => {
  let { createEmailLoginForm } = await import("./js/createEmailLoginForm.dev")
  createEmailLoginForm()
  await import("./js/emailLoginForm.dev")
  history.pushState({}, "", `/user-auth/email-login`)
})

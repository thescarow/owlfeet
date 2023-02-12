import { checkKeyboard } from "../common/keyboardDetector.dev"

//build login and signup switching system between login box and signup box
let mainAccountContainer = document.getElementById("mainAccountContainer")
const openLogin = document.getElementById("openLogin")
const openSignup = document.getElementById("openSignup")
const signupBox = document.getElementById("signupBox")
const loginBox = document.getElementById("loginBox")
const loginBoxInner = document.getElementById("loginBoxInner")

const fromStructor = document.getElementById("fromStructor")
// const signupFormHolder = document.getElementById("signupFormHolder")

openLogin.addEventListener("click", e => {
  signupBox.classList.add("slide-up")
  loginBox.classList.remove("slide-up")
  fromStructor.scrollTop = 0
})

openSignup.addEventListener("click", e => {
  loginBox.classList.add("slide-up")
  signupBox.classList.remove("slide-up")
  loginBoxInner.scrollTop = 0
})

/////////////////////////////////////////////////
///////////////////////////////////////////////

// start keyboard on off logic
// import { checkKeyboard } from "../../public/javascripts/common/keyboardDetector";
const mainNavigation = document.getElementById("mainNavigation")
/// this is main navigation
function onKeyboard(keyboardHeight) {
  console.log("keyboard is Open:", keyboardHeight)
  if (loginBox.classList.contains("slide-up")) {
    loginBox.style.display = "none"
  }
  mainNavigation.style.display = "none"

  document.body.style.height = 'calc(100% + keyboardHeight + "px")'
}
function offKeyboard(keyboardHeight) {
  console.log("keyboard is off:", keyboardHeight)
  loginBox.style.display = "initial"
  mainNavigation.style.display = "flex"
  document.body.style.height = "100vh"
}
checkKeyboard(onKeyboard, offKeyboard)
// ///////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////

// access mobile number and send to server so that their we can send the otp to this number
const signupNotification = document.getElementById("signupNotification")
const sendOtpBtn = document.getElementById("sendOtp")
const signupMobile = document.getElementById("signupMobile")
const sendOtpCounter = document.getElementById("sendOtpCounter")
const sendOtpCounterMinute = document.getElementById("sendOtpCounterMinute")
const sendOtpCounterSecond = document.getElementById("sendOtpCounterSecond")
function otpTimeCounter() {
  let counter = 120
  let timerId
  timerId = setInterval(() => {
    sendOtpCounterMinute.textContent = "0" + Math.floor(counter / 60) + ":"
    let seconds = counter % 60
    seconds = seconds < 10 ? "0" + seconds : seconds
    sendOtpCounterSecond.textContent = seconds
    counter--
    if (counter == 0) {
      clearInterval(timerId)
    }
  }, 1000)
}
const mobileValidator = /^[5-9][0-9]{9}$/

sendOtpBtn.addEventListener("click", e => {
  sendOtpBtn.classList.add("click")
  setTimeout(() => {
    sendOtpBtn.classList.remove("click")
  }, 500)

  if (mobileValidator.test(signupMobile.value)) {
    if (!sendOtpBtn.classList.contains("disabled")) {
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
            sendOtpBtn.classList.add("disabled")
            sendOtpCounter.classList.add("show")
            otpTimeCounter()
            setTimeout(() => {
              sendOtpBtn.classList.remove("disabled")
              sendOtpCounter.classList.remove("show")
            }, 120 * 1000)
            signupNotification.textContent =
              "Otp Sent Successfully,Please Check Your Inbox"
            signupNotification.classList.add("show", "success")
            setTimeout(() => {
              signupNotification.classList.remove("show", "success")
            }, 5000)
          } else {
            signupNotification.textContent = data.error
            signupNotification.classList.add("show", "error")
            setTimeout(() => {
              signupNotification.classList.remove("show", "error")
            }, 5000)
          }
        })
        .catch(err => {
          signupNotification.textContent = "Server Error"
          signupNotification.classList.add("show", "error")
          setTimeout(() => {
            signupNotification.classList.remove("show", "error")
          }, 5000)
        })
    }
  } else {
    signupNotification.textContent = "Invalid Mobile Number,Please Check It"
    signupNotification.classList.add("show", "error")
    setTimeout(() => {
      signupNotification.classList.remove("show", "error")
    }, 5000)
  }
})
///////////////////////////////////////////////////
/////////////////////////////////////////////////
// send otp to server and verify it and server send back the submit form
const checkSignupOtp = document.getElementById("checkSignupOtp")
const inputs = document.querySelectorAll("#signupOtp input")
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
    signupNotification.textContent =
      "You have copied incomplete otp, Please copy again and paste here"
    signupNotification.classList.add("show")
    setTimeout(() => {
      signupNotification.classList.remove("show")
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
checkSignupOtp.addEventListener("click", () => {
  let otp = ""
  inputs.forEach(input => {
    otp += input.value
  })
  console.log(otp)

  if (signupMobile.value.length == 10 && otp.length == 6) {
    let data = { otp: otp, mobile: signupMobile.value }
    fetch("/user-auth/check-mobile-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok) return res.json()
        else throw new Error("Signup server failure")
      })
      .then(data => {
        if (data.isSuccess) {
          // used this value in signup javascript
          mainAccountContainer.dataset.mobileNumber = signupMobile.value
          console.log("signup successfully")
          import("./html/signupHtml.dev")
          import("./js/signup.dev")
        } else {
          signupNotification.textContent = data.error
          signupNotification.classList.add("show", "error")
          setTimeout(() => {
            signupNotification.classList.remove("show", "error")
          }, 5000)
        }
      })
      .catch(err => {
        signupNotification.textContent = "Server Error"
        signupNotification.classList.add("show", "error")
        setTimeout(() => {
          signupNotification.classList.remove("show", "error")
        }, 5000)
      })
  } else if (signupMobile.value.length != 10 && otp.length == 6) {
    signupNotification.textContent = "Incorrect Mobile Number"
    signupNotification.classList.add("show", "error")
    setTimeout(() => {
      signupNotification.classList.remove("show", "error")
    }, 5000)
  } else if (signupMobile.value.length == 10 && otp.length != 6) {
    signupNotification.textContent = "Incorrect Otp"
    signupNotification.classList.add("show", "error")
    setTimeout(() => {
      signupNotification.classList.remove("show", "error")
    }, 5000)
  }
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// login form start here

const loginUser = document.getElementById("loginUser")
const loginPassword = document.getElementById("loginPassword")
const loginSubmit = document.getElementById("loginSubmit")
const loginNotification = document.getElementById("loginNotification")

loginSubmit.addEventListener("click", () => {
  if (loginUser.value != "" && loginPassword.value != "") {
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
          console.log(data)
          location.replace(`/user/${data.username}`)
        } else {
          loginNotification.textContent = data.error
          loginNotification.classList.add("show", "error")
          setTimeout(() => {
            loginNotification.classList.remove("show", "error")
          }, 5000)
        }
      })
      .catch(err => {
        loginNotification.textContent = "Server Error"
        loginNotification.classList.add("show", "error")
        setTimeout(() => {
          loginNotification.classList.remove("show", "error")
        }, 5000)
      })
  } else if (loginUser.value == "" && loginPassword.value != "") {
    loginNotification.textContent =
      "Please fill Username/mobile anything, Don't leave it blank"
    loginNotification.classList.add("show")
    setTimeout(() => {
      loginNotification.classList.remove("show")
    }, 5000)
  } else if (loginUser.value != "" && loginPassword.value == "") {
    loginNotification.textContent =
      "Please fill password to unlock this secret wall"
    loginNotification.classList.add("show")
    setTimeout(() => {
      loginNotification.classList.remove("show")
    }, 5000)
  }
})

loginPassword.addEventListener("keyup", e => {
  loginPassword.value = loginPassword.value.replace(/\s/g, "")
})
// password show
const passwordShow = document.getElementsByClassName("password-show")[0]

passwordShow.addEventListener("click", () => {
  passwordShow.classList.toggle("show")

  let type = loginPassword.getAttribute("type")

  if (type == "password") {
    loginPassword.type = "text"
  } else {
    loginPassword.type = "password"
  }
})

import { createMainNotification } from "../../common/mainNotification.dev.js"

/////for preventing default tab behavior
window.addEventListener("keydown", e => {
  if (e.key === "Tab") e.preventDefault()
})

import Uppy from "@uppy/core"
import Dashboard from "@uppy/dashboard"
import Webcam from "@uppy/webcam"
import ImageEditor from "@uppy/image-editor"
import AwsS3Multipart from "@uppy/aws-s3-multipart"
import "@uppy/core/dist/style.css"
import "@uppy/dashboard/dist/style.css"
import "@uppy/webcam/dist/style.css"
import "@uppy/image-editor/dist/style.css"

////////////////////////////////////////////////////////////////

const uppy = new Uppy({
  id: "signupProfile",
  autoProceed: false,
  allowMultipleUploadBatches: false,
  debug: false,
  onBeforeFileAdded: (currentFile, files) => {
    currentFile.name = signupProfile.dataset.profileKey
    return currentFile
  },
  restrictions: {
    maxFileSize: 1024 * 1024 * 10,
    maxNumberOfFiles: 1,
    allowedFileTypes: ["image/jpg", "image/jpeg", "image/png", "image/gif"]
  },
  meta: { mediaType: "user-profile-picture" },
  infoTimeout: 5000
})
  .use(Dashboard, {
    trigger: "#signupProfile",
    target: "body",
    inline: false,
    // plugins: ['Webcam'],
    thumbnailWidth: 300,
    proudlyDisplayPoweredByUppy: false,
    closeModalOnClickOutside: true,
    theme: "dark",
    locale: {
      strings: {
        dropPasteImportFiles: "Upload here or Drop file here 👇"
      }
    },
    note: "Upload your profile file-size: up to 10MB, file-type: [jpeg  jpg  gif  png]"
  })
  .use(Webcam, {
    target: Dashboard,
    mirror: true,
    modes: ["picture"],
    showRecordingLength: true
  })
  .use(ImageEditor, {
    target: Dashboard,
    quality: 0.8
  })
  .use(AwsS3Multipart, {
    limit: 4,
    companionUrl: `${location.origin}/companion`
  })

uppy.on("complete", result => {
  const image = document.createElement("img")
  image.src = result.successful[0].preview
  signupProfile.innerHTML = ""
  signupProfile.appendChild(image)
  signupProfile.dataset.profileKey = result.successful[0].s3Multipart.key
})
/////////////////////////////////////////////////////

const signupFormPage1 = document.getElementById("signupFormPage1")
const signupFormPage2 = document.getElementById("signupFormPage2")
const signupFormPage3 = document.getElementById("signupFormPage3")
const signupFormPage4 = document.getElementById("signupFormPage4")

const signupForm = document.getElementById("signupForm")

const signupProgressInfoStep = document.getElementById("signupProgressInfoStep")
const signupProgressInfoStepInfo = document.getElementById(
  "signupProgressInfoStepInfo"
)
const signupProgressBarhighlighter = document.getElementById(
  "signupProgressBarhighlighter"
)

const signupNext1Btn = document.getElementById("signupNext1Btn")
const signupNext2Btn = document.getElementById("signupNext2Btn")
const signupNext3Btn = document.getElementById("signupNext3Btn")
const signupPrev1Btn = document.getElementById("signupPrev1Btn")
const signupPrev2Btn = document.getElementById("signupPrev2Btn")
const signupPrev3Btn = document.getElementById("signupPrev3Btn")
const signupSubmitBtn = document.getElementById("signupSubmitBtn")
//////////////////////////////////
//////////////////////////////////
const signupProfile = document.getElementById("signupProfile")
const signupFirstName = document.getElementById("signupFirstName")
const signupLastName = document.getElementById("signupLastName")
const signupEmail = document.getElementById("signupEmail")
const signupPassword = document.getElementById("signupPassword")
const signupConfirmPassword = document.getElementById("signupConfirmPassword")
const signupUsernameBox = document.getElementById("signupUsernameBox")
const signupUsername = document.getElementById("signupUsername")
const signupGenderMale = document.getElementById("signupGenderMale")
const signupGenderFemale = document.getElementById("signupGenderFemale")
const signupGenderOther = document.getElementById("signupGenderOther")
const signupBirthday = document.getElementById("signupBirthday")
const signupCity = document.getElementById("signupCity")
const signupState = document.getElementById("signupState")

const signupBio = document.getElementById("signupBio")

signupNext1Btn.addEventListener("click", () => {
  if (signupFirstName.value !== "") {
    signupFormPage1.style.left = "-150%"
    signupFormPage2.style.left = "0%"
    signupForm.scrollTop = 0
    signupProgressBarhighlighter.style.width = "50%"
    signupProgressInfoStepInfo.textContent = "Password"
    signupProgressInfoStep.textContent = "STEP: 2 OF 4"
  } else {
    createMainNotification("Please Enter Firstname, It Should Not Be Empty")
    signupFirstName.focus()
  }
})
signupPrev1Btn.addEventListener("click", () => {
  signupFormPage1.style.left = "0%"
  signupFormPage2.style.left = "150%"
  signupForm.scrollTop = 0
  signupProgressBarhighlighter.style.width = "25%"
  signupProgressInfoStepInfo.textContent = "Your Profile"
  signupProgressInfoStep.textContent = "STEP: 1 OF 4"
})
signupNext2Btn.addEventListener("click", () => {
  if (signupPassword.value !== "") {
    if (
      signupConfirmPassword.value !== "" &&
      signupConfirmPassword.value === signupPassword.value
    ) {
      signupFormPage2.style.left = "-150%"
      signupFormPage3.style.left = "0%"
      signupForm.scrollTop = 0
      signupProgressBarhighlighter.style.width = "75%"
      signupProgressInfoStepInfo.textContent = "Username"
      signupProgressInfoStep.textContent = "STEP: 3 OF 4"
    } else {
      createMainNotification(
        "Password And Confirm Password are Not Matched",
        "error"
      )
      signupConfirmPassword.focus()
    }
  } else {
    createMainNotification("Please Enter Password, It Should Not Be Empty")
    signupPassword.focus()
  }
})

signupPrev2Btn.addEventListener("click", () => {
  signupFormPage2.style.left = "0%"
  signupFormPage3.style.left = "150%"
  signupForm.scrollTop = 0
  signupProgressBarhighlighter.style.width = "50%"
  signupProgressInfoStepInfo.textContent = "Password"
  signupProgressInfoStep.textContent = "STEP: 2 OF 4"
})
signupNext3Btn.addEventListener("click", () => {
  if (signupUsername.value != "") {
    signupFormPage3.style.left = "-150%"
    signupFormPage4.style.left = "0%"
    signupForm.scrollTop = 0
    signupProgressBarhighlighter.style.width = "100%"
    signupProgressInfoStepInfo.textContent = "Bio"
    signupProgressInfoStep.textContent = "STEP: 4 OF 4"
  } else {
    createMainNotification(
      "Please Enter A Unique Username, It Should Not Be Empty"
    )
    signupUsername.focus()
  }
})

signupPrev3Btn.addEventListener("click", () => {
  signupFormPage3.style.left = "0%"
  signupFormPage4.style.left = "150%"
  signupForm.scrollTop = 0
  signupProgressBarhighlighter.style.width = "75%"
  signupProgressInfoStepInfo.textContent = "Username"
  signupProgressInfoStep.textContent = "STEP: 3 OF 4"
})

//////////////////////////////////////////////////////////////////////////////

const signupPasswordBtns = [
  ...document.getElementsByClassName("input-field__btn--toggle-password-view")
]

signupPasswordBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("input-field__btn--unselected")) {
      btn.classList.remove("input-field__btn--unselected")
      btn.classList.add("input-field__btn--selected")
      if (btn.classList.contains("input-field__btn--password"))
        signupPassword.type = "text"
      else if (btn.classList.contains("input-field__btn--confirm-password"))
        signupConfirmPassword.type = "text"
    } else if (btn.classList.contains("input-field__btn--selected")) {
      btn.classList.remove("input-field__btn--selected")
      btn.classList.add("input-field__btn--unselected")
      if (btn.classList.contains("input-field__btn--password"))
        signupPassword.type = "password"
      else if (btn.classList.contains("input-field__btn--confirm-password"))
        signupConfirmPassword.type = "password"
    }
  })
})
//////////////////////////////////////////////////////////////
// password strenth

// traversing the DOM and getting the input and span using their IDs
const signupPasswordStrengthDivs = [
  ...document.querySelectorAll("#signupPasswordStrength div")
]
const signupPasswordStrengthText = document.getElementById(
  "signupPasswordStrengthText"
)

const signupPasswordRule8 = document.getElementById("signupPasswordRule8")
const signupPasswordRuleNumber = document.getElementById(
  "signupPasswordRuleNumber"
)
const signupPasswordRuleUpper = document.getElementById(
  "signupPasswordRuleUpper"
)
const signupPasswordRuleSpecial = document.getElementById(
  "signupPasswordRuleSpecial"
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
  signupPasswordRule8.classList.toggle(
    "true",
    passwordRule8.test(PasswordParameter)
  )
  signupPasswordRuleNumber.classList.toggle(
    "true",
    passwordRuleNumber.test(PasswordParameter)
  )
  signupPasswordRuleUpper.classList.toggle(
    "true",
    passwordRuleUpper.test(PasswordParameter)
  )
  signupPasswordRuleSpecial.classList.toggle(
    "true",
    passwordRuleSpecial.test(PasswordParameter)
  )
  if (strongPassword.test(PasswordParameter)) {
    signupPasswordStrengthDivs[0].style.backgroundColor = "#61f743"
    signupPasswordStrengthDivs[1].style.backgroundColor = "#61f743"
    signupPasswordStrengthDivs[2].style.backgroundColor = "#61f743"
    signupPasswordStrengthText.textContent = "Good"
  } else if (mediumPassword.test(PasswordParameter)) {
    signupPasswordStrengthDivs[0].style.backgroundColor = "#f7f143"
    signupPasswordStrengthDivs[1].style.backgroundColor = "#f7f143"
    signupPasswordStrengthDivs[2].style.backgroundColor = "transparent"
    signupPasswordStrengthText.textContent = "Fair"
  } else {
    signupPasswordStrengthDivs[0].style.backgroundColor = "#fc4444"
    signupPasswordStrengthDivs[1].style.backgroundColor = "transparent"
    signupPasswordStrengthDivs[2].style.backgroundColor = "transparent"
    signupPasswordStrengthText.textContent = "Week"
  }
}

// Adding an input event listener when a user types to the  password input
// passwordTimeout before a callback is called

let passwordTimeout
signupPassword.addEventListener("input", () => {
  //The badge is hidden by default, so we show it
  clearTimeout(passwordTimeout)

  //We then call the passwordStrengthChecker function as a callback then pass the typed password to it

  //Incase a user clears the text, the badge is transparent again

  if (signupPassword.value.length === 0) {
    signupPasswordStrengthDivs[0].style.backgroundColor = "transparent"
    signupPasswordStrengthDivs[1].style.backgroundColor = "transparent"
    signupPasswordStrengthDivs[2].style.backgroundColor = "transparent"
    signupPasswordStrengthText.textContent = "None"
  } else {
    passwordTimeout = setTimeout(() => {
      if (signupConfirmPassword.value !== "")
        if (signupConfirmPassword.value === signupPassword.value) {
          signupPasswordConfirmText.textContent = "Match"
        } else {
          signupPasswordConfirmText.textContent = "Not match"
        }
      passwordStrengthChecker(signupPassword.value)
    }, 500)
  }
})

signupPassword.addEventListener("keyup", e => {
  signupPassword.value = signupPassword.value.replace(/\s/g, "")
})
// confirm password
const signupPasswordConfirmText = document.getElementById(
  "signupPasswordConfirmText"
)
let confirmPasswordTimeout
signupConfirmPassword.addEventListener("input", () => {
  clearTimeout(confirmPasswordTimeout)
  confirmPasswordTimeout = setTimeout(() => {
    if (signupConfirmPassword.value !== "")
      if (signupConfirmPassword.value === signupPassword.value) {
        signupPasswordConfirmText.textContent = "Match"
      } else {
        signupPasswordConfirmText.textContent = "Not match"
      }
  }, 500)
  if (signupConfirmPassword.value.length === 0) {
    signupPasswordConfirmText.textContent = ""
  }
})
signupConfirmPassword.addEventListener("keyup", e => {
  signupConfirmPassword.value = signupConfirmPassword.value.replace(/\s/g, "")
})

//////////////////////////////////////////////////////////////
// username input
let specialRegex = new RegExp(`[^A-Za-z.0-9_\\s]`, "g") //special character, space is also excluded from special character
let spaceRegex = new RegExp("\\s", "g") //space character

let capitalRegex = new RegExp("[A-Z]", "g") // capital letters (A-Z)

let smallRegex = new RegExp("[a-z]", "g") // small letters (a-z)
signupUsername.addEventListener("keyup", e => {
  signupUsername.value = signupUsername.value.replace(specialRegex, "")
  signupUsername.value = signupUsername.value.replace(spaceRegex, "")

  signupUsername.value = signupUsername.value.replace(capitalRegex, match =>
    match.toLowerCase()
  )
})

signupUsername.addEventListener("change", e => {
  if (signupUsername.value.toString() === "") {
    signupUsernameBox.classList.remove("valid")
  }
})

let usernameTimeout
signupUsername.addEventListener("input", () => {
  let username = signupUsername.value.toString()
  if (username.search(specialRegex) !== -1) {
    createMainNotification(
      "Special characters (except .) are not allowed in username,Please remove them from your username",
      "error"
    )
  } else if (username.search(spaceRegex) !== -1) {
    createMainNotification(
      "Spaces are not allowed in username ,Please remove space from your username",
      "error"
    )
  } else if (username.search(capitalRegex) !== -1) {
    createMainNotification(
      "Capital letters(A-Z) are not allowed in username, Please use small letters(a-z) for your username",
      "error"
    )
  } else {
    if (username !== "") {
      clearTimeout(usernameTimeout)
      usernameTimeout = setTimeout(() => {
        if (username.search(smallRegex) === -1) {
          createMainNotification(
            "Please use atleast one small alphabet(a-z) in your username",
            "error"
          )
        } else {
          fetch("/user-auth/check-username?username=" + username)
            .then(res => {
              if (res.ok) {
                return res.json()
              } else throw new Error("server error in checking username")
            })
            .then(data => {
              if (data.isSuccess) {
                signupUsernameBox.classList.add("valid")
              } else {
                if (signupUsernameBox.classList.contains("valid"))
                  signupUsernameBox.classList.remove("valid")
                createMainNotification(data.error, "error")
              }
            })
            .catch(err => {
              if (signupUsernameBox.classList.contains("valid"))
                signupUsernameBox.classList.remove("valid")
              createMainNotification(
                "Server Error, Please type Username Again",
                "error"
              )
            })
        }
      }, 1000)
    } else {
      signupUsernameBox.classList.remove("valid")
    }
  }
})

const signupUsernameRefreshBtn = document.getElementById(
  "signupUsernameRefreshBtn"
)
let degree = 0
signupUsernameRefreshBtn.addEventListener("click", () => {
  if (!signupUsernameRefreshBtn.classList.contains("disabled")) {
    degree += 360
    signupUsernameRefreshBtn.style.rotate = `${degree}deg`
    let firstName = signupFirstName.value.toString()

    signupUsernameRefreshBtn.classList.add("disabled")

    fetch("/user-auth/generate-username?name=" + firstName)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else throw new Error("server error in generating username")
      })
      .then(data => {
        if (data.isSuccess) {
          signupUsername.value = data.username
          signupUsernameBox.classList.add("valid")
          signupUsernameRefreshBtn.classList.remove("disabled")
        } else {
          signupUsernameRefreshBtn.classList.remove("disabled")
          createMainNotification(data.error, "error")
        }
      })
      .catch(err => {
        signupUsernameRefreshBtn.classList.remove("disabled")
        createMainNotification("Server Error, Please try Again", "error")
      })
  }
})

/////////////////////////////////////////////////////////////////

signupState.addEventListener("change", e => {
  if (signupState.value != "") {
    signupCity.style.display = "block"
    fetch("/user-auth/generate-cities?stateCode=" + signupState.value)
      .then(res => {
        if (res.ok) return res.json()
        throw new Error("error in generating cities")
      })
      .then(data => {
        if (data.isSuccess) {
          let options = `<option value="" selected disabled hidden>-- select city -- </option>`
          data.citiesName.forEach(city => {
            options += `<option value="${city}">${city}</option>`
          })
          signupCity.innerHTML = options
        } else {
          createMainNotification(data.error, "error")
        }
      })
      .catch(err => {
        createMainNotification(
          "Server Error In Generating Cities, Please Choose State Again",
          "error"
        )

        console.log(err)
      })
  }
})
////////////////////////////////////////////////////////////
// signup submit form

let mainAccountContainer = document.getElementById("mainAccountContainer")
signupSubmitBtn.addEventListener("click", e => {
  if (signupBirthday.value !== "") {
    if (signupState.value !== "" && signupCity.value !== "") {
      if (mainAccountContainer.dataset.accessToken !== "") {
        const mobileValidator = /^[5-9][0-9]{9}$/
        if (mobileValidator.test(mainAccountContainer.dataset.mobileNumber)) {
          let signupGender
          if (signupGenderMale.checked) signupGender = "male"
          else if (signupGenderFemale.checked) signupGender = "female"
          else signupGender = "other"
          let signupData = {
            signupAccessToken: mainAccountContainer.dataset.accessToken,
            signupMobile: mainAccountContainer.dataset.mobileNumber,
            signupFirstName: signupFirstName.value,
            signupLastName: signupLastName.value || "",
            signupEmail: signupEmail.value || "",
            signupPassword: signupPassword.value,
            signupUsername: signupUsername.value,
            signupGender: signupGender || "male",
            signupBirthday: signupBirthday.value || new Date(),
            signupCountry: "IN",
            signupState: signupState.value,
            signupCity: signupCity.value,
            signupBio: signupBio.value || "",
            signupProfile: signupProfile.dataset.profileKey || ""
          }
          fetch("/user-auth/user-signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(signupData)
          })
            .then(res => {
              if (res.ok) return res.json()
              throw new Error("Server error in signing up")
            })
            .then(data => {
              if (data.isSuccess) {
                location.replace(`/user/${data.username}`)
              } else {
                createMainNotification(data.error, "error")
              }
            })
            .catch(err => {
              console.log(err)
              createMainNotification(
                "Server error in signing up, Please try again",
                "error"
              )
            })
        } else {
          createMainNotification(
            "Invalid Mobile Number, Please check it and send Otp again",
            "error"
          )
        }
      } else {
        createMainNotification(
          "There are some problem, Please send OTP again",
          "error"
        )
      }
    } else {
      if (signupState.value === "") {
        createMainNotification("Please select a state")
        signupState.focus()
      } else if (signupCity.value === "") {
        createMainNotification("Please select a city")
        signupCity.focus()
      }
    }
  } else {
    createMainNotification("Please enter your birthDay")
    signupBirthday.focus()
  }
})

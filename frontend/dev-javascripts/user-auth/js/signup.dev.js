import { createMainNotification } from "../../common/mainNotification.dev.js"

/////for preventing default tab behavior
window.addEventListener("keydown", e => {
  if (e.key == "Tab") e.preventDefault()
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
  ...document.getElementsByClassName("signup-password__btn")
]

signupPasswordBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("signup-password__btn--unselected")) {
      btn.classList.remove("signup-password__btn--unselected")
      btn.classList.add("signup-password__btn--selected")
      if (btn.classList.contains("signup-password__btn--password"))
        signupPassword.type = "text"
      else if (btn.classList.contains("signup-password__btn--confirm-password"))
        signupConfirmPassword.type = "text"
    } else if (btn.classList.contains("signup-password__btn--selected")) {
      btn.classList.remove("signup-password__btn--selected")
      btn.classList.add("signup-password__btn--unselected")
      if (btn.classList.contains("signup-password__btn--password"))
        signupPassword.type = "password"
      else if (btn.classList.contains("signup-password__btn--confirm-password"))
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
const signupPasswordStrengthtext = document.getElementsByClassName(
  "signup-password-strength-text"
)[0]

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
    signupPasswordStrengthtext.textContent = "Good"
  } else if (mediumPassword.test(PasswordParameter)) {
    signupPasswordStrengthDivs[0].style.backgroundColor = "#f7f143"
    signupPasswordStrengthDivs[1].style.backgroundColor = "#f7f143"
    signupPasswordStrengthDivs[2].style.backgroundColor = "transparent"
    signupPasswordStrengthtext.textContent = "Fair"
  } else {
    signupPasswordStrengthDivs[0].style.backgroundColor = "#fc4444"
    signupPasswordStrengthDivs[1].style.backgroundColor = "transparent"
    signupPasswordStrengthDivs[2].style.backgroundColor = "transparent"
    signupPasswordStrengthtext.textContent = "Week"
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
    signupPasswordStrengthtext.textContent = "None"
  } else {
    passwordTimeout = setTimeout(
      () => passwordStrengthChecker(signupPassword.value),
      500
    )
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
    if (signupConfirmPassword.value === signupPassword.value) {
      signupPasswordConfirmText.textContent = "Match"
    } else {
      signupPasswordConfirmText.textContent = "Not match"
    }
  }, 500)
  if (signupConfirmPassword.value.length === 0) {
    signupPasswordConfirmText.textContent = "Not match"
  }
})
signupConfirmPassword.addEventListener("keyup", e => {
  signupConfirmPassword.value = signupConfirmPassword.value.replace(/\s/g, "")
})

//////////////////////////////////////////////////////////////
// username input

signupUsername.addEventListener("change", () => {
  let checkUsername = signupUsername.value
  if (signupUsername.value !== "") {
    fetch(
      "/user-auth/check-username?checkUsername=" +
        checkUsername +
        "&firstName" +
        signupFirstName.value
    )
      .then(res => {
        if (res.ok) {
          return res.json()
        } else throw new Error("server error in generating username")
      })
      .then(data => {
        if (data.isUnique) {
          if (data.isChange) {
            signupUsername.value = data.newUsername
            createMainNotification(
              "Your Username Changed Because Your Username Contains Special Characters"
            )

            signupUsername.classList.add("valid")
          } else {
            signupUsername.value = data.newUsername
            signupUsername.classList.add("valid")
          }
        } else {
          signupUsername.value = data.newUsername
          createMainNotification(
            "Your username is already registered, You can use this server generated username or try diffrent one.",
            "error"
          )
        }
      })
      .catch(error => {
        createMainNotification(
          "Server Error, Please type Username Again",
          "error"
        )
      })
  } else {
    signupUsername.classList.remove("valid")
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
    let firstName = signupFirstName.value
    signupUsernameRefreshBtn.classList.add("disabled")

    fetch("/user-auth/generate-username?firstName=" + firstName)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else throw new Error("server error in generating username")
      })
      .then(data => {
        console.log(data)
        signupUsername.value = data.newUsername
        signupUsername.classList.add("valid")
        signupUsernameRefreshBtn.classList.remove("disabled")
      })
      .catch(error => {
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
        let options = `<option value="" selected disabled hidden>-- select city -- </option>`
        data.citiesName.forEach(city => {
          options += `<option value="${city}">${city}</option>`
        })
        signupCity.innerHTML = options
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
      if (
        mainAccountContainer.dataset.mobileNumber !== "" &&
        mainAccountContainer.dataset.mobileNumber.length === 10
      ) {
        let signupGender
        if (signupGenderMale.checked) signupGender = "male"
        else if (signupGenderFemale.checked) signupGender = "female"
        else signupGender = "other"
        let signupData = {
          signupMobile: mainAccountContainer.dataset.mobileNumber,
          signupFirstName: signupFirstName.value,
          signupLastName: signupLastName.value,
          signupEmail: signupEmail.value,
          signupPassword: signupPassword.value,
          signupUsername: signupUsername.value,
          signupGender: signupGender,
          signupBirthday: signupBirthday.value,
          signupCountry: "IN",
          signupState: signupState.value,
          signupCity: signupCity.value,
          signupBio: signupBio.value,
          signupProfile: signupProfile.dataset.profileKey
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
            throw new Error("Error in signing up user")
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
              "Server Error In Sign Up, Please try Again",
              "error"
            )
          })
      } else {
        createMainNotification("Server error ", "error")
      }
    } else {
      if (signupState.value == "") {
        createMainNotification("Please Select A state")
        signupState.focus()
      } else if (signupCity.value == "") {
        createMainNotification("Please Select A city")
        signupCity.focus()
      }
    }
  } else {
    createMainNotification("Please Enter Your BirthDay")
    signupBirthday.focus()
  }
})

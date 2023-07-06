import { createMainNotification } from "../../common/mainNotification.dev.js"
import "../css/profileChangePasswordOption.dev.css"
export function setChangePasswordContent(modalBox, modalContentBox) {
  modalContentBox.innerHTML = ""
  let changePasswordBox = document.createElement("div")
  changePasswordBox.classList.add("change-password-box")
  changePasswordBox.setAttribute("id", "changePasswordBox")

  changePasswordBox.innerHTML = `
      <div class="change-password__title">Change your Password</div>

      <input class="change-password__input" type="password" id='changeCurrentPassword' placeholder="Current Password">

      <input class="change-password__input" type="password" id='changeNewPassword' placeholder="New Password">

      <input class="change-password__input" type="password" id='changeConfirmPassword' placeholder="Confirm Password">

      <label class="change-password-checkbox">

      <input class="change-password-checkbox__input" type="checkbox" id='showChangePasswordBtn'> 
      <div class="change-password-checkbox__label"> Show Password </div>

      </label>

      <div class="change-password__btn-container">
          <button id="cancelChangePasswordBtn" class="change-password__btn">Cancle</button>
          <button id="changePasswordBtn" class="change-password__btn change-password__btn--change-password">Submit</button>
      </div>

  <a class="change-password__forgot-password" href="/user-auth/reset-password">Forgot password </a>
  `

  modalContentBox.insertAdjacentElement("beforeend", changePasswordBox)
  attachScript(modalBox)
}

function attachScript(modalBox) {
  const changePasswordBtn = document.getElementById("changePasswordBtn")
  const cancelChangePasswordBtn = document.getElementById(
    "cancelChangePasswordBtn"
  )
  cancelChangePasswordBtn.addEventListener("click", () => {
    if (!modalBox.classList.contains("hide")) modalBox.classList.add("hide")
  })

  const changeCurrentPassword = document.getElementById("changeCurrentPassword")
  const changeNewPassword = document.getElementById("changeNewPassword")
  const changeConfirmPassword = document.getElementById("changeConfirmPassword")

  changeCurrentPassword.addEventListener("keyup", e => {
    changeCurrentPassword.value = changeCurrentPassword.value.replace(/\s/g, "")
  })
  changeNewPassword.addEventListener("keyup", e => {
    changeNewPassword.value = changeNewPassword.value.replace(/\s/g, "")
  })
  changeConfirmPassword.addEventListener("keyup", e => {
    changeConfirmPassword.value = changeConfirmPassword.value.replace(/\s/g, "")
  })

  const passwordInputs = [
    ...document.getElementsByClassName("change-password__input")
  ]
  const showChangePasswordBtn = document.getElementById("showChangePasswordBtn")
  showChangePasswordBtn.addEventListener("change", () => {
    if (showChangePasswordBtn.checked) {
      passwordInputs.forEach(password => {
        password.type = "text"
      })
    } else {
      passwordInputs.forEach(password => {
        password.type = "password"
      })
    }
  })

  changePasswordBtn.addEventListener("click", () => {
    if (changeCurrentPassword.value !== "") {
      if (changeNewPassword.value !== "") {
        if (changeConfirmPassword.value === changeNewPassword.value) {
          let changePasswordData = {
            currentPassword: changeCurrentPassword.value,
            newPassword: changeNewPassword.value
          }

          fetch("/user-auth/change-user-password", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(changePasswordData)
          })
            .then(res => {
              if (res.ok) return res.json()
              throw new Error("Error in Changing Password")
            })
            .then(data => {
              if (data.isSuccess) {
                createMainNotification(
                  "Your Password Is Changed SuccessFully",
                  "success"
                )
                changeCurrentPassword.value = ""
                changeNewPassword.value = ""
                changeConfirmPassword.value = ""

                setTimeout(() => {
                  if (!modalBox.classList.contains("hide"))
                    modalBox.classList.add("hide")
                }, 2000)
              } else {
                createMainNotification(data.error, "error")
              }
            })
            .catch(err => {
              createMainNotification(
                "Server error in changing Password,Please try again",
                "error"
              )
            })
        } else {
          createMainNotification(
            "Password and Confirm Password are not same, Please check them carefully",
            "error"
          )
        }
      } else {
        createMainNotification(
          "Please enter new password, It should not be empty",
          "error"
        )
      }
    } else {
      createMainNotification(
        "Please enter current password, It should not be empty",
        "error"
      )
      changeCurrentPassword.focus()
    }
  })
}

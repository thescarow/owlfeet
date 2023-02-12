import { createMainNotification } from "../../common/mainNotification.dev.js"
import "../css/profileChangePasswordOption.dev.css"
export function setOwnerSettingContent(modalBox, modalContentBox) {
  modalContentBox.innerHTML = `
  <div id="changePasswordBox">
      <span>Change your Password</span>
      <input type="password" id='currentPassword' class="password" placeholder="Current Password">
      <input type="password" id='newPassword' class="password"  placeholder="New Password">
      <input type="password" id='confirmPassword' class="password" placeholder="Confirm Password">
      <label id="showPasswordContainer">
      <input type="checkbox" id='showPassword'> 
      <span id="showPasswordText"> Show Password </span>
      </label>
      <div class="change-password-btns">
          <button id="canclePassword" class="btn">Cancle</button>
          <button id="changePassword" class="btn">Submit</button>
      </div>
  <a href="/user-auth/reset-password" id="profileResetPassword">Forgot password </a>
  </div>
  `

  const changePassword = document.getElementById("changePassword")
  const canclePassword = document.getElementById("canclePassword")
  canclePassword.addEventListener("click", () => {
    modalBox.style.display = "none"
  })

  const currentPassword = document.getElementById("currentPassword")
  const newPassword = document.getElementById("newPassword")
  const confirmPassword = document.getElementById("confirmPassword")

  currentPassword.addEventListener("keyup", e => {
    currentPassword.value = currentPassword.value.replace(/\s/g, "")
  })
  newPassword.addEventListener("keyup", e => {
    newPassword.value = newPassword.value.replace(/\s/g, "")
  })
  confirmPassword.addEventListener("keyup", e => {
    confirmPassword.value = confirmPassword.value.replace(/\s/g, "")
  })

  const passwords = [...document.getElementsByClassName("password")]
  const showPassword = document.getElementById("showPassword")
  showPassword.addEventListener("change", () => {
    if (showPassword.checked) {
      passwords.forEach(password => {
        password.type = "text"
      })
    } else {
      passwords.forEach(password => {
        password.type = "password"
      })
    }
  })

  changePassword.addEventListener("click", () => {
    if (currentPassword.value != "") {
      if (confirmPassword.value == newPassword.value) {
        let changePasswordData = {
          currentPassword: currentPassword.value,
          newPassword: newPassword.value
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
              currentPassword.value = ""
              newPassword.value = ""
              confirmPassword.value = ""
              modalBox.style.display = "none"
            } else {
              createMainNotification(data.error, "error")
            }
          })
          .catch(err => {
            createMainNotification(
              "Server Error In Changing Password,Please Try Again",
              "error"
            )
          })
      } else {
        createMainNotification(
          "Password And Confirm Password Are Not Same, Please Check Them Carefully",
          "error"
        )
      }
    } else {
      createMainNotification(
        "Please Enter Current Password, It Should Not Be Empty",
        "error"
      )
      currentPassword.focus()
    }
  })
}

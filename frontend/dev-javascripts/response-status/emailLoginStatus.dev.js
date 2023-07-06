import { createMainNotification } from "../common/mainNotification.dev"

let statusBox = document.getElementById("statusBox")
let statusTitle = document.getElementById("statusTitle")
let statusDesc = document.getElementById("statusDesc")
let statusBtnField = document.getElementById("statusBtnField")

let loginOnRequestedWindowBtn = document.getElementById(
  "loginOnRequestedWindowBtn"
)
if (loginOnRequestedWindowBtn) {
  loginOnRequestedWindowBtn.addEventListener("click", async () => {
    let token = statusBox.dataset.token
    if (token && token.trim() !== "")
      fetch(`/user-auth/email-login-on-requested-window/?token=${token}`)
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          return Promise.reject(response)
        })
        .then(async data => {
          if (data.isSuccess) {
            statusTitle.textContent = "Go and checkout your requested window."
            statusDesc.textContent = ""
            statusBtnField.innerHTML = ""
          } else {
            createMainNotification(data.error, "error")
          }
        })
        .catch(async err => {
          createMainNotification("Server Error, Please Try Again", "error")
        })
  })
}
let loginHereBtn = document.getElementById("loginHereBtn")
if (loginHereBtn) {
  loginHereBtn.addEventListener("click", () => {
    let token = statusBox.dataset.token
    if (token && token.trim() !== "")
      location.assign(`/user-auth/user-email-login/?token=${token}`)
  })
}
let goBackToLoginPageBtn = document.getElementById("goBackToLoginPageBtn")
if (goBackToLoginPageBtn) {
  goBackToLoginPageBtn.addEventListener("click", () => {
    location.assign(`/user-auth/email-login`)
  })
}

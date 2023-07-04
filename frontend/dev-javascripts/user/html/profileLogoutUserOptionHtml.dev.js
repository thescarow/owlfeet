import { createMainNotification } from "../../common/mainNotification.dev.js"
import "../css/profileLogoutUserOption.dev.css"
export function setLogoutContent(modalBox, modalContentBox, profileUser) {
  modalContentBox.innerHTML = ""
  let logoutBox = document.createElement("div")
  logoutBox.classList.add("logout-box")
  logoutBox.setAttribute("id", "logoutBox")

  logoutBox.innerHTML = `
     <div class="logout-box__title">
     Do You Want To Logout ?
     </div>
    
    <div class="logout-box__btn-container">

        <button class="logout-box__btn" id="cancleLogoutUserBtn">Cancle</button>
        
        <button class="logout-box__btn logout-box__btn--logout" id="logoutUserBtn">Logout</button>

    </div>
  `
  modalContentBox.insertAdjacentElement("beforeend", logoutBox)
  attachScript(modalBox, profileUser)
}
function attachScript(modalBox, profileUser) {
  const cancleLogoutUserBtn = document.getElementById("cancleLogoutUserBtn")

  const logoutUserBtn = document.getElementById("logoutUserBtn")

  cancleLogoutUserBtn.addEventListener("click", () => {
    if (!modalBox.classList.contains("hide")) modalBox.classList.add("hide")
  })

  logoutUserBtn.addEventListener("click", () => {
    fetch("/user-auth/user-logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userId: profileUser._id })
    })
      .then(res => {
        if (res.ok) return res.json()
        throw new Error("Error in Logout user")
      })
      .then(data => {
        if (data.isSuccess) {
          location.replace(`/user-auth/login`)
        } else {
          createMainNotification(data.error, "error")
        }
      })
      .catch(err => {
        createMainNotification(
          "Server error in Logout user,Please try again",
          "error"
        )
      })
  })
}

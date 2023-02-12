import { createMainNotification } from "../../common/mainNotification.dev.js"
import "../css/profileLogoutUserOption.dev.css"
export function setOwnerSettingContent(modalBox, modalBoxContent, profileUser) {
  modalBoxContent.innerHTML = `
  <div id="logoutUserBox">
      <span>Do You Want To Logout ?</span>
      <div id="logoutBtns" >
        <button id="cancleLogoutUser" class="btn">Cancle</button>
       <button id="logoutUser" class="btn">Logout</button>
          
      </div>
  </div>
  `
  const logoutUser = document.getElementById("logoutUser")
  const cancleLogoutUser = document.getElementById("cancleLogoutUser")
  cancleLogoutUser.addEventListener("click", () => {
    modalBox.style.display = "none"
  })

  logoutUser.addEventListener("click", () => {
    fetch("/user-auth/user-logout")
      .then(res => {
        if (res.ok) return res.json()
        throw new Error("Error in Logout user")
      })
      .then(data => {
        if (data.isSuccess) {
          createMainNotification("You Are Logged Out SuccessFully", "success")
          location.replace(`/user-auth/login`)
        } else {
          createMainNotification(data.error, "error")
        }
      })
      .catch(err => {
        createMainNotification(
          "Server Error In Logout user,Please Try Again",
          "error"
        )
      })
  })
}

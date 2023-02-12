import { createMainNotification } from "../../common/mainNotification.dev.js"
import "../css/profileVerifyUserEmailOption.dev.css"
export function setOwnerSettingContent(modalBox, modalBoxContent, profileUser) {
  modalBoxContent.innerHTML = `
  <div id="verifyUserEmailBox">
        <div id="verifyUserEmailInfo">
            <div id="verifyUserEmailTitle"> Verify Your Email
            </div>
           <div id="verifyUserEmailDesc">
           We will send an email to your email address, open your email box and verify your Email Id.
           </div>
      </div>
<input id="userEmail" type="email" placeholder="Enter Your Registered Email" value="${profileUser.email}" style="text-transform: lowercase;">
      <div id="verifyUserEmailBtns" >
          <button id="cancleVerifyUserEmail" class="btn">Cancle</button>
          <button id="verifyUserEmail" class="btn">Verify</button>
      </div>
  </div>
  `
  const cancleVerifyUserEmail = document.getElementById("cancleVerifyUserEmail")
  cancleVerifyUserEmail.addEventListener("click", () => {
    modalBox.style.display = "none"
  })

  const verifyUserEmail = document.getElementById("verifyUserEmail")
  let userEmailData = {
    userEmail: userEmail.value
  }
  verifyUserEmail.addEventListener("click", () => {
    fetch("/user-auth/verify-user-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userEmailData)
    })
      .then(res => {
        if (res.ok) return res.json()
        throw new Error("Error in verification of User Email")
      })
      .then(data => {
        if (data.isSuccess) {
          createMainNotification(
            "Verification Email Is Sent To Your Email Box,Please Go And Verify Your Email",
            "success"
          )
        } else {
          createMainNotification(data.error, "error")
        }
      })
      .catch(err => {
        createMainNotification(
          "Server Error In Verification User Email,Please Try Again",
          "error"
        )
      })
  })
}

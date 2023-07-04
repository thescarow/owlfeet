import { createMainNotification } from "../../common/mainNotification.dev.js"
import "../css/profileSwitchUserPrivacyOption.dev.css"
export function setAccountPrivacyContent(
  modalBox,
  modalContentBox,
  profileUser
) {
  modalContentBox.innerHTML = ""
  let accountPrivacy = document.createElement("div")
  accountPrivacy.classList.add("account-privacy")
  accountPrivacy.setAttribute("id", "accountPrivacy")

  accountPrivacy.innerHTML = `

     <div class="account-privacy__title">
            Change Your Account Privacy 
     </div>
    
   
     <div class="account-privacy__input-container"> 
         <div class="account-privacy__input">
              <input type="radio" name="accountPrivacy" value="public" id="accountPrivacyPublic"  ${
                profileUser.privacy === "public" ? "checked" : ""
              }>
             <label for="accountPrivacyPublic">PUBLIC
             </label>
          </div>
       
          <div class="account-privacy__input">
             <input type="radio" name="accountPrivacy" value="private" id="accountPrivacyPrivate" ${
               profileUser.privacy === "private" ? "checked" : ""
             }>
             <label for="accountPrivacyPrivate">PRIVATE
             </label>
          </div>

     </div>
           
    <div class="account-privacy__desc" id="accountPrivacyDesc">
    ${
      profileUser.privacy === "private"
        ? "When your account is private, only people you approve can see your posts. Your existing followers won't be affected."
        : "When your account is public, anyone can see your posts whether they are your followers or not"
    }
    </div>
  `
  modalContentBox.insertAdjacentElement("beforeend", accountPrivacy)
  attachScript(modalBox)
}

function attachScript(modalBox) {
  const accountPrivacyPublic = document.getElementById("accountPrivacyPublic")
  const accountPrivacyPrivate = document.getElementById("accountPrivacyPrivate")

  accountPrivacyPrivate.addEventListener("change", changedPrivacyTo)
  accountPrivacyPublic.addEventListener("change", changedPrivacyTo)

  function changedPrivacyTo() {
    let selectedValue = "private"

    if (accountPrivacyPrivate.checked) {
      selectedValue = accountPrivacyPrivate.value
    } else if (accountPrivacyPublic.checked) {
      selectedValue = accountPrivacyPublic.value
    }
    let data = {
      switchedUserPrivacyTo: selectedValue
    }
    fetch("/user-auth/switch-user-privacy", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok) return res.json()
        throw new Error("Error in changing user privacy")
      })
      .then(data => {
        if (data.isSuccess) {
          createMainNotification(
            "Your Profile Switched To: " +
              `${data.switchedTo === "public" ? "Public" : "Private"}`,
            "success"
          )
          loginUser.privacy = data.switchedTo
          profileUser.privacy = data.switchedTo
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
          "Server error in switching user privacy,Please try again",
          "error"
        )
      })
  }
}

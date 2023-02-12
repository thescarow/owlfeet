import { createMainNotification } from "../../common/mainNotification.dev.js"
import "../css/profileSwitchUserPrivacyOption.dev.css"
export function setOwnerSettingContent(modalBox, modalBoxContent, profileUser) {
  modalBoxContent.innerHTML = `
  <div id="switchUserPrivacyBox">
        <div id="userPrivacyInfo">
            <div id="userPrivacyStatus">Your Account Is ${
              profileUser.privacy == "public" ? "Public" : "Private"
            }
            </div>

            <div id="userPrivacyTitle"> switch to <span  id="userPrivacySwitchTo"> ${
              profileUser.privacy == "public" ? "Private" : "Public"
            }
             </span>
           </div>

           <div id="userPrivacyDesc">
           ${
             profileUser.privacy == "public"
               ? "When your account is private, only people you approve can see your posts. Your existing followers won't be affected."
               : "When your account is public, anyone can see your posts whether they are your followers or not"
           }
                
           </div>
      </div>
      <div id="userPrivacyBtns" >
          <button id="cancleUserPrivacy" class="btn">Cancle</button>
          <button id="switchUserPrivacy" class="btn" >${
            profileUser.privacy == "public" ? "Private" : "Public"
          }</button>
      </div>
  </div>
  `
  const cancleUserPrivacy = document.getElementById("cancleUserPrivacy")
  cancleUserPrivacy.addEventListener("click", () => {
    modalBox.style.display = "none"
  })

  const switchUserPrivacy = document.getElementById("switchUserPrivacy")

  switchUserPrivacy.addEventListener("click", () => {
    let switchUserPrivacyData = {
      userPrivacySwitchedTo: `${
        profileUser.privacy == "public" ? "private" : "public"
      }`
    }

    fetch("/user-auth/switch-user-privacy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(switchUserPrivacyData)
    })
      .then(res => {
        if (res.ok) return res.json()
        throw new Error("Error in Changing User Privacy")
      })
      .then(data => {
        if (data.isSuccess) {
          createMainNotification(
            "Your Profile Switched To: " +
              `${data.switchedTo == "public" ? "Public" : "Private"}`,
            "success"
          )
          setTimeout(() => {
            location.reload()
          }, 2000)
        } else {
          createMainNotification(data.error, "error")
        }
      })
      .catch(err => {
        createMainNotification(
          "Server Error In Switching User Privacy,Please Try Again",
          "error"
        )
      })
  })
}

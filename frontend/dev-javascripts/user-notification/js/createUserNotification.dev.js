let svg_defaultUserImageIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g data-name="Layer 2"><circle cx="16" cy="6.96" r="6"/><path d="M30.86,26.84a15.07,15.07,0,0,0-4.11-7.47A12.47,12.47,0,0,0,25.13,18,15,15,0,0,0,16,15,15.24,15.24,0,0,0,5.24,19.37a15.07,15.07,0,0,0-4.11,7.47,3.42,3.42,0,0,0,.69,2.88A3.52,3.52,0,0,0,4.58,31H27.42a3.52,3.52,0,0,0,2.75-1.32A3.42,3.42,0,0,0,30.86,26.84Z"/></g></svg>
`
import { timeDifferenceFromNow } from "../../common/calculateTimeDifference.dev.js"

export function createUserNotification(userNotificationData) {
  if (userNotificationData.secondContent.length > 28) {
    userNotificationData.secondContent =
      userNotificationData.secondContent.slice(0, 28) + "..."
  }

  let timeDiff = timeDifferenceFromNow(userNotificationData.createdAt)
  let userNotification = document.createElement("div")
  userNotification.classList.add("user-notification")

  let userNotificationHtml = `<a href="/user/${
    userNotificationData.fromUser.username
  }" class="user-notification__link">
        <div class="user-notification__column">
  
          <div class='user-notification__pic ${
            userNotificationData.fromUser.hasOwnProperty("profile") &&
            userNotificationData.fromUser.profile !== ""
              ? "user-notification__pic--img"
              : "user-notification__pic--svg"
          }'>
            <img
              src='${userNotificationData.fromUser.profile}'
              alt="">
              ${svg_defaultUserImageIcon}
          </div>
        </div>
        <div class="user-notification__column user-notification__column--left-margin">
        
          <div class="user-notification__content">
              <span class="user-notification__username">
                   ${userNotificationData.fromUser.username}
               </span>
                    ${userNotificationData.content}
                <span class="user-notification__passed-time">
                      ${timeDiff}
                </span>
          </div>

          <div class="user-notification__second-content">
          ${userNotificationData.secondContent}
          </div>

          
        </div>
      </a>`
  userNotification.insertAdjacentHTML("beforeend", userNotificationHtml)
  return userNotification
}

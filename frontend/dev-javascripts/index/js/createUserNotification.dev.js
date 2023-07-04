import "../css/createUserNotification.dev.css"
export async function createUserNotification(
  userNoticationContainer,
  userNotificationData
) {
  if (userNotificationData.secondContent.length > 28) {
    userNotificationData.secondContent =
      userNotificationData.secondContent.slice(0, 28) + "..."
  }
  let { timeDifferenceFromNow } = await import(
    "../../common/calculateTimeDifference.dev.js"
  )

  let timeDiff = timeDifferenceFromNow(userNotificationData.createdAt)
  let userNotification = document.createElement("div")
  userNotification.classList.add(
    "user-notification",
    "user-notification-container__user-notification"
  )

  let userNotificationHtml = ` <a href="#" class="user-notification__link">
        <div class="user-notification__alignment">
  
          <div class="user-notification__pic">
            <img
              src="${userNotificationData.fromUser.profile}"
              alt="${
                userNotificationData.fromUser.firstName + " " + "profile"
              }">
          </div>
        </div>
        <div class="user-notification__alignment user-notification__alignment--left-margin">
  
  
          <div class="user-notification__content"> <span class="user-notification__username">${
            userNotificationData.fromUser.username
          }</span>${
    userNotificationData.content
  }<span class="user-notification__passed-time">${timeDiff}</span>
          </div>
          <div class="user-notification__second-content">${
            userNotificationData.secondContent
          }</div>
        </div>
      </a>
    </div> `
  userNotification.insertAdjacentHTML("beforeend", userNotificationHtml)
  userNoticationContainer.insertAdjacentElement("afterbegin", userNotification)
}

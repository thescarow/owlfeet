import { createMainNotification } from "../common/mainNotification.dev"

let userNotificationLoading = document.getElementById("userNotificationLoading")

let lastUserNotificationObserver = new IntersectionObserver(
  async (entries, observer) => {
    if (entries[0].isIntersecting === true) {
      let totalReceivedCount = [
        ...document.getElementsByClassName("user-notification")
      ].length
      fetch(
        `/user-notification/data?totalReceivedNotificationCount=${totalReceivedCount}`
      )
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          return Promise.reject(response)
        })
        .then(async data => {
          if (data.isSuccess) {
            if (data.userNotifications.length > 0) {
              let { createUserNotification } = await import(
                "./js/createUserNotification.dev.js"
              )

              for (let i = 0; i < data.userNotifications.length; i++) {
                let userNotification = createUserNotification(
                  data.userNotifications[i]
                )

                userNotificationLoading.insertAdjacentElement(
                  "beforebegin",
                  userNotification
                )
              }
            } else {
              if (!userNotificationLoading.classList.contains("hide"))
                userNotificationLoading.classList.add("hide")
              observer.unobserve(entries[0].target)
            }
          } else {
            createMainNotification(data.error, "error")
          }
        })
        .catch(err => {
          console.log("error:", err)
          createMainNotification("Server Error, Please Try Again", "error")
        })
      //   observer.observe(entries[0].target)
    }
  },
  { threshold: 1 }
)

lastUserNotificationObserver.observe(userNotificationLoading)

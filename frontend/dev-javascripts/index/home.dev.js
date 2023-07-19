;(async function () {
  // await import("./socket.dev") // define socket here
  let { createMainNotification } = await import(
    "../common/mainNotification.dev.js"
  )
  //creating user notification
  const userNotificationContainer = document.getElementById(
    "userNotificationContainer"
  )
  const userNotificationOpenBtn = document.getElementById(
    "userNotificationOpenBtn"
  )
  const userNotificationModal = document.getElementById("userNotificationModal")
  const userNotificationModalCloseBtn = document.getElementById(
    "userNotificationModalCloseBtn"
  )
  userNotificationOpenBtn.addEventListener("click", async () => {
    if (userNotificationModal.classList.contains("hide"))
      userNotificationModal.classList.remove("hide")

    fetch("/user-notification/data?totalReceivedNotificationCount=0")
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
            data.userNotifications.forEach(userNotification => {
              createUserNotification(
                userNotificationContainer,
                userNotification
              )
            })
          } else {
            let userNotificationStatus = document.getElementById(
              "userNotificationStatus"
            )
            if (userNotificationStatus.classList.contains("hide"))
              userNotificationStatus.classList.remove("hide")
          }
        } else {
          createMainNotification(data.error, "error")
        }
      })
      .catch(err => {
        createMainNotification("Server Error, Please Try Again", "error")
      })
  })
  userNotificationModalCloseBtn.addEventListener("click", () => {
    if (!userNotificationModal.classList.contains("hide"))
      userNotificationModal.classList.add("hide")
  })

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === userNotificationModal) {
      if (!userNotificationModal.classList.contains("hide"))
        userNotificationModal.classList.add("hide")
    }
  }
})()

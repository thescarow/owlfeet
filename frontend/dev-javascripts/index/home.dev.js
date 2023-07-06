;(async function () {
  // await import("./socket.dev") // define socket here
  let { createMainNotification } = await import(
    "../common/mainNotification.dev.js"
  )
  //creating user notification
  const userNotificationContainer = document.getElementById(
    "userNotificationContainer"
  )
  const userNotificationBtn = document.getElementById("userNotificationBtn")
  const userNotificationModal = document.getElementById("userNotificationModal")
  const userNotificationModalCloseBtn = document.getElementById(
    "userNotificationModalCloseBtn"
  )
  userNotificationBtn.addEventListener("click", async () => {
    if (userNotificationModal.classList.contains("hide"))
      userNotificationModal.classList.remove("hide")

    fetch("/user-notification")
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(response)
      })
      .then(async data => {
        if (data.isSuccess) {
          let { createUserNotification } = await import(
            "./js/createUserNotification.dev.js"
          )
          data.userNotification.forEach(userNotification => {
            createUserNotification(userNotificationContainer, userNotification)
          })
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

;(async function () {
  // await import("./socket.dev") // define socket here
  let { createMainNotification } = await import(
    "../common/mainNotification.dev.js"
  )
  const userNotificationIcon = document.getElementById("userNotificationIcon")
  const userNotificationModal = document.getElementById("userNotificationModal")
  const userNotificationModalCloseBtn = document.getElementById(
    "userNotificationModalCloseBtn"
  )
  userNotificationIcon.onclick = async function () {
    userNotificationModal.style.display = "block"
    let { createUserNotification } = await import(
      "./js/createUserNotification.dev.js"
    )
    fetch("/user-notification")
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(response)
      })
      .then(data => {
        if (data.isSuccess) {
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
  }

  userNotificationModalCloseBtn.onclick = function () {
    userNotificationModal.style.display = "none"
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == userNotificationModal) {
      userNotificationModal.style.display = "none"
    }
  }

  //creating user notification
  const userNotificationContainer = document.getElementById(
    "userNotificationContainer"
  )
})()

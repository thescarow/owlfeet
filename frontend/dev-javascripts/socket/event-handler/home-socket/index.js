export async function createHomeSocket(socket) {
  // console.log("insideHomeSocket")

  const userNotificationContainer = document.getElementById(
    "userNotificationContainer"
  )

  socket.on("new-user-notification", async userNotification => {
    let { createUserNotification } = await import(
      "../../../index/js/createUserNotification.dev.js"
    )
    // console.log(userNotification)
    createUserNotification(userNotificationContainer, userNotification)
  })
}

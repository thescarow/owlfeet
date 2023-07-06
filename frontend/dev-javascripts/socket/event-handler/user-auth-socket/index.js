export async function createUserAuthSocket(socket) {
  console.log("insideUserAuthSocket")
  let { createMainNotification } = await import(
    "../../../common/mainNotification.dev"
  )

  socket.on("user-auth:send-email-login-response", async data => {
    if (data.isSuccess) {
      createMainNotification(
        "Secure link is sent to your Email Box.",
        "success"
      )
      let emailLoginPostNote = document.getElementById("emailLoginPostNote")

      if (
        emailLoginPostNote &&
        emailLoginPostNote.classList.contains("email-login__note--hide")
      )
        emailLoginPostNote.classList.remove("email-login__note--hide")
    } else {
      createMainNotification(data.error, "error")
    }
  })
  socket.on("user-auth:user-email-login", async data => {
    location.assign(`/user-auth/user-email-login/?token=${data.token}`)
  })
}

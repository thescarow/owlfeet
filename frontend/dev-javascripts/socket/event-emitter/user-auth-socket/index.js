export function sendEmailLoginSocket(email) {
  let eventData = {
    email: email
  }
  socket.emit("user-auth:send-email-login", eventData)
}

export function sendCreateUserMessageSocket(userMessage) {
  let eventData = {
    userMessage: userMessage
  }
  socket.emit("message:create-user-message", eventData)
}

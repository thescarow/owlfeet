export async function createUserSocket(socket) {
  console.log("insideUserSocket")

  if (pageName && pageName === "chat") {
    let { createUserChatSocket } = await import("./userChatSocket")
    createUserChatSocket(socket)
  }
}

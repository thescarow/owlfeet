export async function createUserSocket(socket) {
  console.log("insideUserSocket")

  if (pageName && pageName === "chat") {
    let { createUserActiveStatusSocket } = await import(
      "./userActiveStatusSocket.dev"
    )
    createUserActiveStatusSocket(socket)
  }
}

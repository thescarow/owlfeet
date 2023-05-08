export async function createUserSocket(socket) {
  console.log("insideUserSocket")

  let { createComingCallSocket } = await import("./comingCallSocket.dev")
  createComingCallSocket(socket)

  if (pageName && pageName === "chat") {
    let { createUserActiveStatusSocket } = await import(
      "./userActiveStatusSocket.dev"
    )
    createUserActiveStatusSocket(socket)
  }
}

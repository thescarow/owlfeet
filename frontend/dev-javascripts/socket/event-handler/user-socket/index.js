export async function createUserSocket(socket) {
  console.log("insideUserSocket")
  if (pageName && pageName.toString() !== "call") {
    let { createComingCallSocket } = await import("./comingCallSocket.dev")
    createComingCallSocket(socket)
  }
  if (pageName && pageName === "chat") {
    let { createUserActiveStatusSocket } = await import(
      "./userActiveStatusSocket.dev"
    )
    createUserActiveStatusSocket(socket)
  }
}

export async function createChatSocket(socket) {
  console.log("insideCallSocket")

  let callMainContainer = document.getElementById("callMainContainer")

  let onCallSection = document.getElementById("onCallSection")

  let onCallMainView = document.getElementById("onCallMainView")

  let onCallCallStatus = document.getElementById("onCallCallStatus")

  let onCallMainBtnContainer = document.getElementById("onCallMainBtnContainer")

  //   socket.on("call:joined-new-member", async data => {
  //     let { connectToNewJoinedMember, myMediaStream } = await import(
  //       "../../../call/js/onCallSection.dev"
  //     )
  //     connectToNewJoinedMember(data.userId, data.peerId, myMediaStream)
  //   })
}

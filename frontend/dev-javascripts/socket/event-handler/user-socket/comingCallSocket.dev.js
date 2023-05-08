export function createComingCallSocket(socket) {
  socket.on("call:created-chat-call-room", async data => {
    if (data.startedBy.toString() !== loginUser._id.toString()) {
      let { createComingCallModal } = await import(
        "../../../common/comingCallModal.dev"
      )
      createComingCallModal(data.callRoom)
    }
  })
}

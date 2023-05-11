export function createComingCallSocket(socket) {
  socket.on("chat:created-chat-call-room", async data => {
    if (data.startedBy.toString() !== loginUser._id.toString()) {
      let { createComingCallModal } = await import(
        "../../../common/comingCallModal.dev"
      )
      createComingCallModal(data.callRoom)
    }
  })

  socket.on("chat:end-chat-call-room", async data => {
    let { closeComingCallModal } = await import(
      "../../../common/comingCallModal.dev"
    )
    closeComingCallModal(data.callRoomId)
  })
}

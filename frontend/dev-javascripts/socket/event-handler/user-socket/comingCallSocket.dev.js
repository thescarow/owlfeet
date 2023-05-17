export function createComingCallSocket(socket) {
  socket.on("chat:created-chat-call-room", async data => {
    if (data.startedBy.toString() !== loginUser._id.toString()) {
      let { createComingCallModal } = await import(
        "../../../common/comingCallModal.dev"
      )
      createComingCallModal(data.callRoom)
      let eventData = {
        callRoomId: data.callRoom._id
      }

      if (data.callRoom.roomChat.isGroupChat === false) {
        setTimeout(() => {
          socket.emit("call:call-ringging", eventData)
        }, 4000)
      }
    }
  })

  socket.on("chat:end-chat-call-room", async data => {
    let { closeComingCallModal } = await import(
      "../../../common/comingCallModal.dev"
    )
    closeComingCallModal(data.callRoomId)
  })
}

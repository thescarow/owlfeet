;(async function () {
  if (!IS_INIT_CALL_MODULE) {
    let { createCalltypeInfoContainer } = await import(
      "./js/calltypeInfoContainer.dev"
    )
    createCalltypeInfoContainer()

    let roomInfoContainer = document.getElementById("roomInfoContainer")

    if (roomInfoContainer.dataset.callRoomType.trim() === "join") {
      console.log("fetch join call room")
      let { joinCallRoom } = await import("./js/joinCallRoom.dev")
      joinCallRoom()
    }
    if (roomInfoContainer.dataset.callRoomType.trim() === "create") {
      let creatingRoomInfo = document.getElementById("creatingRoomInfo")
      if (creatingRoomInfo) {
        if (creatingRoomInfo.dataset.creatingCallRoom.trim() === "chat") {
          let { createChatRoom } = await import("./js/createChatRoom.dev")
          createChatRoom()
        }
        if (creatingRoomInfo.dataset.creatingCallRoom.trim() === "new") {
          let { createNewRoom } = await import("./js/createNewRoom.dev")
          createNewRoom()
        }
      }
    }

    IS_INIT_CALL_MODULE = true
  }
})()

function initialiseEventForCallModule() {}

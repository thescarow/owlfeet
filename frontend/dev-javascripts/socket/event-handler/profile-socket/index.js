export async function createProfileSocket(socket) {
  console.log("insideProfileSocket")

  if (isLogin && isLogin === true) {
    let { createLoginUserProfileSocket } = await import(
      "./loginUserProfileSocket.dev"
    )
    createLoginUserProfileSocket(socket)

    if (isOwner && isOwner === true) {
      let { createOwnerUserProfileSocket } = await import(
        "./ownerUserProfileSocket.dev"
      )
      createOwnerUserProfileSocket(socket)
    }
  }
  if (isOwner === false) {
    let { createUpdateForAllUserSocket } = await import(
      "./updateForAllUserSocket.dev"
    )
    createUpdateForAllUserSocket(socket)
  }
}

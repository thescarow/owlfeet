export async function createProfileSocket(socket) {
  console.log("insideProfileSocket")

  if (isLogin && isLogin === true) {
    let { createLoginUserProfileSocket } = await import(
      "./loginUserProfileSocket.dev"
    )
    createLoginUserProfileSocket(socket)

    if (isOwnerProfile && isOwnerProfile === true) {
      let { createOwnerUserProfileSocket } = await import(
        "./ownerUserProfileSocket.dev"
      )
      createOwnerUserProfileSocket(socket)
    }
  }
  if (isOwnerProfile === false) {
    let { createUpdateForAllUserSocket } = await import(
      "./updateForAllUserSocket.dev"
    )
    createUpdateForAllUserSocket(socket)
  }
}

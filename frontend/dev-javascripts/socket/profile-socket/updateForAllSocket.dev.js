export async function createUpdateForAllSocket(socket) {
  socket.on("update-follower-for-all", (userId, data) => {
    if (profileUser._id == userId) {
      let profileUserFollowerCount = document.getElementById(
        "profileUserFollowerCount"
      )
      if (profileUserFollowerCount) {
        profileUserFollowerCount.textContent = (
          parseInt(profileUserFollowerCount.textContent) + data
        ).toString()
      }
    }
  })
  socket.on("update-following-for-all", (userId, data) => {
    if (profileUser._id == userId) {
      let profileUserFollowingCount = document.getElementById(
        "profileUserFollowingCount"
      )
      if (profileUserFollowingCount) {
        profileUserFollowingCount.textContent = (
          parseInt(profileUserFollowingCount.textContent) + data
        ).toString()
      }
    }
  })
}

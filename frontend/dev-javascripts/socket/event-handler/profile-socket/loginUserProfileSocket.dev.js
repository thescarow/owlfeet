export async function createLoginUserProfileSocket(socket) {
  console.log("insideLoginUserProfileSocket")

  socket.on("change-user-follow-status", (userId, userFollowStatus) => {
    let profileFollowActionBtn = document.getElementById(
      "profileFollowActionBtn"
    )
    console.log(userId, userFollowStatus)
    if (profileFollowActionBtn) {
      if (profileUser._id.toString() == userId.toString()) {
        profileFollowActionBtn.setAttribute(
          "data-user-follow-status",
          userFollowStatus
        )
        if (userFollowStatus === "send-follow-request") {
          profileFollowActionBtn.textContent = "FOLLOW"
          profileFollowActionBtn.classList.remove(
            "profile-btn--cancel-sent-follow-request",
            "profile-btn--unfollow"
          )
          profileFollowActionBtn.classList.add("profile-btn--follow")
        }
        if (userFollowStatus === "unfollow") {
          profileFollowActionBtn.textContent = "UNFOLLOW"
          profileFollowActionBtn.classList.remove(
            "profile-btn--follow",
            "profile-btn--cancel-sent-follow-request"
          )
          profileFollowActionBtn.classList.add("profile-btn--unfollow")
        }
        if (userFollowStatus === "cancel-sent-follow-request") {
          profileFollowActionBtn.textContent = "CANCEL REQUEST"
          profileFollowActionBtn.classList.remove(
            "profile-btn--follow",
            "profile-btn--unfollow"
          )
          profileFollowActionBtn.classList.add(
            "profile-btn--cancel-sent-follow-request"
          )
        }
      }
    }
  })
}

import { createUserBox } from "../../user/js/createUserBox.dev.js"

///////////////////////////////////////
const profileUserReceivedFollowRequestCount = document.getElementById(
  "profileUserReceivedFollowRequestCount"
)
const profileUserFollowerCount = document.getElementById(
  "profileUserFollowerCount"
)
const profileUserFollowingCount = document.getElementById(
  "profileUserFollowingCount"
)

export function createProfileSocket(socket) {
  console.log("inside profileSocket")

  if (isOwner && isOwner === true) {
    console.log("inside owner profile socket")
    //send-follow-request
    socket.on("add-follower", user => {
      const followerUserBoxContainer = document.getElementById(
        "followerUserBoxContainer"
      )
      if (followerUserBoxContainer) {
        createUserBox(followerUserBoxContainer, "follower", user)
        console.log(followerUserBoxContainer)
      }
      if (profileUserFollowerCount) {
        profileUserFollowerCount.textContent = (
          parseInt(profileUserFollowerCount.textContent) + 1
        ).toString()
      }
    })
    //unfollow
    socket.on("remove-follower", userId => {
      const followerUserBoxContainer = document.getElementById(
        "followerUserBoxContainer"
      )

      if (followerUserBoxContainer) {
        let userBox = followerUserBoxContainer.querySelector(
          `.user-box[data-user-id="${userId}"]`
        )
        if (userBox) {
          userBox.parentNode.removeChild(userBox)
        }
      }
      if (profileUserFollowerCount) {
        profileUserFollowerCount.textContent = (
          parseInt(profileUserFollowerCount.textContent) - 1
        ).toString()
      }
    })
    //accept-follow-request
    socket.on("add-following", user => {
      const followingUserBoxContainer = document.getElementById(
        "followingUserBoxContainer"
      )
      if (followingUserBoxContainer) {
        createUserBox(followingUserBoxContainer, "following", user)
      }
      if (profileUserFollowingCount) {
        profileUserFollowingCount.textContent = (
          parseInt(profileUserFollowingCount.textContent) + 1
        ).toString()
      }
    })
    //remove-follower
    socket.on("remove-following", userId => {
      const followingUserBoxContainer = document.getElementById(
        "followingUserBoxContainer"
      )
      if (followingUserBoxContainer) {
        let userBox = followingUserBoxContainer.querySelector(
          `.user-box[data-user-id="${userId}"]`
        )
        if (userBox) {
          userBox.parentNode.removeChild(userBox)
        }
      }
      if (profileUserFollowingCount) {
        profileUserFollowingCount.textContent = (
          parseInt(profileUserFollowingCount.textContent) - 1
        ).toString()
      }
    })

    ///cancel/delete-received-follow-request
    //accept-received-follow-request
    socket.on("remove-sent-follow-request", userId => {
      const sentFollowRequestUserBoxContainer = document.getElementById(
        "sentFollowRequestUserBoxContainer"
      )
      if (sentFollowRequestUserBoxContainer) {
        let userBox = sentFollowRequestUserBoxContainer.querySelector(
          `.user-box[data-user-id="${userId}"]`
        )
        if (userBox) {
          userBox.parentNode.removeChild(userBox)
        }
      }
      const followingUserBoxContainer = document.getElementById(
        "followingUserBoxContainer"
      )
      if (followingUserBoxContainer) {
        let userBoxs = [
          ...followingUserBoxContainer.querySelectorAll(
            `.user-box[data-user-id="${userId}"]`
          )
        ]
        userBoxs.forEach(userBox => {
          if (
            userBox.querySelector(".user-box__btn--cancel-sent-follow-request")
          ) {
            userBox.parentNode.removeChild(userBox)
          }
        })
      }
    })
    //send-follow-request
    socket.on("add-received-follow-request", user => {
      const receivedFollowRequestUserBoxContainer = document.getElementById(
        "receivedFollowRequestUserBoxContainer"
      )
      if (receivedFollowRequestUserBoxContainer) {
        createUserBox(
          receivedFollowRequestUserBoxContainer,
          "received-follow-request",
          user
        )
      }

      if (profileUserReceivedFollowRequestCount) {
        profileUserReceivedFollowRequestCount.textContent = (
          parseInt(profileUserReceivedFollowRequestCount.textContent) + 1
        ).toString()
      }
    })
    //cancel-sent-follow-request
    socket.on("remove-received-follow-request", userId => {
      if (receivedFollowRequestUserBoxContainer) {
        let userBox = receivedFollowRequestUserBoxContainer.querySelector(
          `.user-box[data-user-id="${userId}"]`
        )
        if (userBox) {
          userBox.parentNode.removeChild(userBox)
        }
      }

      if (profileUserReceivedFollowRequestCount) {
        profileUserReceivedFollowRequestCount.textContent = (
          parseInt(profileUserReceivedFollowRequestCount.textContent) - 1
        ).toString()
      }
    })
  }

  socket.on("change-user-follow-status", (userId, userFollowStatus) => {
    let profileFollowActionBtn = document.getElementById(
      "profileFollowActionBtn"
    )
    console.log(userId, userFollowStatus)
    if (profileFollowActionBtn) {
      if (profileUser._id == userId) {
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

export async function createOwnerUserProfileSocket(socket) {
  console.log("insideOwnerUserProfileSocket")

  const profileUserReceivedFollowRequestCount = document.getElementById(
    "profileUserReceivedFollowRequestCount"
  )
  const profileUserFollowerCount = document.getElementById(
    "profileUserFollowerCount"
  )
  const profileUserFollowingCount = document.getElementById(
    "profileUserFollowingCount"
  )
  //send-follow-request
  socket.on("add-follower", async user => {
    const followerUserBoxContainer = document.getElementById(
      "followerUserBoxContainer"
    )
    if (followerUserBoxContainer) {
      let { createUserBox } = await import(
        "../../../user/js/createUserBox.dev.js"
      )
      createUserBox(followerUserBoxContainer, "follower", user)
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
  socket.on("add-following", async user => {
    const followingUserBoxContainer = document.getElementById(
      "followingUserBoxContainer"
    )
    if (followingUserBoxContainer) {
      let { createUserBox } = await import(
        "../../../user/js/createUserBox.dev.js"
      )
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
  socket.on("add-received-follow-request", async user => {
    const receivedFollowRequestUserBoxContainer = document.getElementById(
      "receivedFollowRequestUserBoxContainer"
    )
    if (receivedFollowRequestUserBoxContainer) {
      let { createUserBox } = await import(
        "../../../user/js/createUserBox.dev.js"
      )
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

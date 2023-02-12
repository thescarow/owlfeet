//other user modal-//////////////////////////////

const {
  createMainNotification
} = require("../../common/mainNotification.dev.js")

function setOtherUserModalContent(otherUser = "follower") {
  let followerFlag = otherUser === "follower" ? true : false
  let followingFlag = otherUser === "following" ? true : false

  followerOtherUserSwitchBtn.classList.toggle(
    "other-user-modal-content__switch-btn--active",
    followerFlag
  )
  followerOtherUserContainer.classList.toggle(
    "other-user-container--active",
    followerFlag
  )

  followingOtherUserSwitchBtn.classList.toggle(
    "other-user-modal-content__switch-btn--active",
    followingFlag
  )
  followingOtherUserContainer.classList.toggle(
    "other-user-container--active",
    followingFlag
  )
}

const profileFollowerBtn = document.getElementById("profileFollowerBtn")
const profileFollowingBtn = document.getElementById("profileFollowingBtn")
/////

const profileOtherUserModal = document.getElementById("profileOtherUserModal")
const profileOtherUserModalContent = document.getElementById(
  "profileOtherUserModalContent"
)
///////
const followingOtherUserSwitchBtn = document.getElementById(
  "followingOtherUserSwitchBtn"
)
const followingOtherUserContainer = document.getElementById(
  "followingOtherUserContainer"
)
const followingUserBoxContainer = document.getElementById(
  "followingUserBoxContainer"
)
///////

const followerOtherUserSwitchBtn = document.getElementById(
  "followerOtherUserSwitchBtn"
)
const followerOtherUserContainer = document.getElementById(
  "followerOtherUserContainer"
)
const followerUserBoxContainer = document.getElementById(
  "followerUserBoxContainer"
)
///////

const otherUserModalCloseBtn = document.getElementById("otherUserModalCloseBtn")
const otherUserSwitchBtnContainer = document.getElementById(
  "otherUserSwitchBtnContainer"
)

profileFollowerBtn.onclick = async function () {
  profileOtherUserModal.style.display = "block"
  let sentFollowRequestOtherUserContainer = document.getElementById(
    "sentFollowRequestOtherUserContainer"
  )
  if (sentFollowRequestOtherUserContainer) {
    sentFollowRequestOtherUserContainer.classList.remove(
      "other-user-container--active"
    )
  }
  if (
    !otherUserSwitchBtnContainer.classList.contains(
      "other-user-modal-content__switch-btn-container--active"
    )
  ) {
    otherUserSwitchBtnContainer.classList.add(
      "other-user-modal-content__switch-btn-container--active"
    )
  }
  setOtherUserModalContent("follower")
  let { fetchUserAndCreateUserBox } = await import("./createUserBox.dev.js")

  fetchUserAndCreateUserBox(followerUserBoxContainer, "follower")
  let receivedFollowRequestUserBoxContainer = document.getElementById(
    "receivedFollowRequestUserBoxContainer"
  )
  if (receivedFollowRequestUserBoxContainer) {
    fetchUserAndCreateUserBox(
      receivedFollowRequestUserBoxContainer,
      "received-follow-request"
    )
  }
}
profileFollowingBtn.onclick = async function () {
  profileOtherUserModal.style.display = "block"
  let sentFollowRequestOtherUserContainer = document.getElementById(
    "sentFollowRequestOtherUserContainer"
  )
  if (sentFollowRequestOtherUserContainer) {
    sentFollowRequestOtherUserContainer.classList.remove(
      "other-user-container--active"
    )
  }

  if (
    !otherUserSwitchBtnContainer.classList.contains(
      "other-user-modal-content__switch-btn-container--active"
    )
  ) {
    otherUserSwitchBtnContainer.classList.add(
      "other-user-modal-content__switch-btn-container--active"
    )
  }
  setOtherUserModalContent("following")

  let { fetchUserAndCreateUserBox } = await import("./createUserBox.dev.js")
  fetchUserAndCreateUserBox(followingUserBoxContainer, "following")
}

followerOtherUserSwitchBtn.addEventListener("click", async () => {
  setOtherUserModalContent("follower")
  let { fetchUserAndCreateUserBox } = await import("./createUserBox.dev.js")

  fetchUserAndCreateUserBox(followerUserBoxContainer, "follower")
  let receivedFollowRequestUserBoxContainer = document.getElementById(
    "receivedFollowRequestUserBoxContainer"
  )
  if (receivedFollowRequestUserBoxContainer) {
    fetchUserAndCreateUserBox(
      receivedFollowRequestUserBoxContainer,
      "received-follow-request"
    )
  }
})
followingOtherUserSwitchBtn.addEventListener("click", async () => {
  setOtherUserModalContent("following")
  let { fetchUserAndCreateUserBox } = await import("./createUserBox.dev.js")
  fetchUserAndCreateUserBox(followingUserBoxContainer, "following")
})

//////

otherUserModalCloseBtn.onclick = function () {
  profileOtherUserModal.style.display = "none"
}
let profileUserReceivedFollowRequestCount = document.getElementById(
  "profileUserReceivedFollowRequestCount"
)
let profileUserFollowerCount = document.getElementById(
  "profileUserFollowerCount"
)
let profileUserFollowingCount = document.getElementById(
  "profileUserFollowingCount"
)

//profileFollowActionBtn actions for non owner user ====> simply access the userFollowStatus and hit the respected endpoint and update the profile follow btn userFollowStatus
if (isOwner === false) {
  const profileFollowActionBtn = document.getElementById(
    "profileFollowActionBtn"
  )
  profileFollowActionBtn.addEventListener("click", () => {
    let userFollowStatus = profileFollowActionBtn.dataset.userFollowStatus
    fetch(`/follow/${userFollowStatus}/${profileUser._id}`, {
      method: "PATCH", // or 'PUT'
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(response)
      })
      .then(data => {
        console.log(data)
        if (data.isSuccess) {
          profileFollowActionBtn.setAttribute(
            "data-user-follow-status",
            data.userFollowStatus
          )
          if (data.userFollowStatus === "send-follow-request") {
            //  socket will decrease the follower count so we do not decrese follower count here

            // profileUserFollowerCount.textContent = (
            //   parseInt(profileUserFollowerCount.textContent) - 1
            // ).toString()
            profileFollowActionBtn.textContent = "FOLLOW"
            profileFollowActionBtn.classList.remove(
              "profile-btn--cancel-sent-follow-request",
              "profile-btn--unfollow"
            )
            profileFollowActionBtn.classList.add("profile-btn--follow")
          }
          if (data.userFollowStatus === "cancel-sent-follow-request") {
            profileFollowActionBtn.textContent = "CANCEL REQUEST"
            profileFollowActionBtn.classList.remove(
              "profile-btn--follow",
              "profile-btn--unfollow"
            )
            profileFollowActionBtn.classList.add(
              "profile-btn--cancel-sent-follow-request"
            )
          }
          if (data.userFollowStatus === "unfollow") {
            //  socket will increse the follower count so we do not increse follower count here

            // profileUserFollowerCount.textContent = (
            //   parseInt(profileUserFollowerCount.textContent) + 1
            // ).toString()
            profileFollowActionBtn.textContent = "UNFOLLOW"
            profileFollowActionBtn.classList.remove(
              "profile-btn--follow",
              "profile-btn--cancel-sent-follow-request"
            )
            profileFollowActionBtn.classList.add("profile-btn--unfollow")
          }
        } else {
          createMainNotification(data.error, "error")
        }
      })
      .catch(err => {
        console.log(err)
        createMainNotification("Server Error", "error")
      })
  })
}

//profile message button
if (isOwner === false) {
  const profileMessageBtn = document.getElementById("profileMessageBtn")
  console.log(profileMessageBtn)
  profileMessageBtn.addEventListener("click", () => {
    fetch("/chat/get-user-chat-id", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userId: profileUser._id })
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(response)
      })
      .then(data => {
        if (data.isSuccess) {
          location.assign(`/chat/#${data.chatId}`)
        } else {
          createMainNotification(data.error, "error")
        }
      })
      .catch(err => {
        console.log(err)
        createMainNotification("Server Error", "error")
      })
  })
}
// When the user clicks anywhere outside of the modal, close it

window.onclick = function (event) {
  //close other user modal
  if (event.target == profileOtherUserModal) {
    profileOtherUserModal.style.display = "none"
  }
}

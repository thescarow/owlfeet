//other user modal-//////////////////////////////

import { createMainNotification } from "../../common/mainNotification.dev.js"
let svg_followIcon = `
<svg width="94" height="100" viewBox="0 0 94 100"  xmlns="http://www.w3.org/2000/svg">
<path d="M43.6393 50.0018C50.1291 50.0018 55.3901 44.7787 55.3901 38.3356C55.3901 31.8925 50.1291 26.6693 43.6393 26.6693C37.1495 26.6693 31.8884 31.8925 31.8884 38.3356C31.8884 44.7787 37.1495 50.0018 43.6393 50.0018Z" />
<path d="M55.323 60.7348C52.6904 63.2167 50.5945 66.2049 49.163 69.5171C47.7315 72.8294 46.9944 76.3964 46.9967 80.0007C46.9894 82.1813 47.2601 84.3541 47.8024 86.4672C46.4259 86.6005 45.0494 86.6672 43.6393 86.6672C34.6886 86.6732 25.9539 83.9378 18.6268 78.8341C19.4317 74.9996 21.1028 71.3964 23.5142 68.2963C25.9256 65.1962 29.0144 62.6799 32.5477 60.9372C36.081 59.1945 39.9667 58.2708 43.9119 58.2357C47.8571 58.2007 51.7588 59.0551 55.323 60.7348Z" />
<path d="M87.2852 43.3354C87.3029 47.6029 86.6805 51.8493 85.4387 55.9349C81.6547 54.1425 77.5008 53.2541 73.3091 53.3409C69.1174 53.4278 65.0044 54.4873 61.2991 56.4349C59.124 55.0883 56.7897 54.0135 54.3493 53.235C57.5451 50.9711 59.9304 47.7544 61.1586 44.0524C62.3868 40.3504 62.394 36.3559 61.179 32.6496C59.964 28.9433 57.5902 25.7182 54.4025 23.443C51.2149 21.1679 47.3795 19.9611 43.4538 19.9983C39.528 20.0354 35.7165 21.3144 32.573 23.6494C29.4296 25.9845 27.1181 29.2539 25.9744 32.9825C24.8308 36.7111 24.9145 40.7047 26.2136 44.3828C27.5126 48.0609 29.9592 51.2319 33.1978 53.435C28.4462 55.1054 24.1471 57.8424 20.6356 61.4327C17.1241 65.023 14.4948 69.3698 12.9528 74.1343C7.84257 69.1163 4.05978 62.923 1.94042 56.1045C-0.178938 49.286 -0.569245 42.0534 0.804169 35.0491C2.17758 28.0448 5.2722 21.4857 9.81313 15.9544C14.3541 10.4231 20.2007 6.09092 26.8337 3.34259C33.4668 0.594262 40.6808 -0.485095 47.8351 0.2004C54.9894 0.885896 61.8624 3.31502 67.8436 7.272C73.8248 11.229 78.729 16.5913 82.1207 22.8827C85.5123 29.174 87.2864 36.1996 87.2852 43.3354Z" />
<path d="M73.8557 60.0014C69.8715 60.0014 65.9768 61.1744 62.6641 63.3719C59.3514 65.5695 56.7695 68.6929 55.2448 72.3473C53.7201 76.0017 53.3212 80.0229 54.0985 83.9024C54.8757 87.7819 56.7943 91.3454 59.6115 94.1423C62.4288 96.9393 66.0181 98.844 69.9257 99.6157C73.8334 100.387 77.8837 99.9913 81.5646 98.4776C85.2455 96.9639 88.3916 94.4006 90.6051 91.1117C92.8186 87.8229 94 83.9562 94 80.0007C93.9956 74.6979 91.8718 69.6136 88.095 65.864C84.3181 62.1143 79.1969 60.0059 73.8557 60.0014ZM80.5705 83.3339H77.2131V86.6671C77.2131 87.5512 76.8594 88.399 76.2297 89.0241C75.6001 89.6492 74.7461 90.0004 73.8557 90.0004C72.9653 90.0004 72.1113 89.6492 71.4817 89.0241C70.852 88.399 70.4983 87.5512 70.4983 86.6671V83.3339H67.1409C66.2505 83.3339 65.3965 82.9828 64.7669 82.3577C64.1373 81.7326 63.7836 80.8847 63.7836 80.0007C63.7836 79.1167 64.1373 78.2689 64.7669 77.6438C65.3965 77.0187 66.2505 76.6675 67.1409 76.6675H70.4983V73.3343C70.4983 72.4503 70.852 71.6025 71.4817 70.9774C72.1113 70.3523 72.9653 70.0011 73.8557 70.0011C74.7461 70.0011 75.6001 70.3523 76.2297 70.9774C76.8594 71.6025 77.2131 72.4503 77.2131 73.3343V76.6675H80.5705C81.4609 76.6675 82.3149 77.0187 82.9445 77.6438C83.5741 78.2689 83.9279 79.1167 83.9279 80.0007C83.9279 80.8847 83.5741 81.7326 82.9445 82.3577C82.3149 82.9828 81.4609 83.3339 80.5705 83.3339Z" />
</svg>
`
let svg_unfollowIcon = `
<svg width="94" height="100" viewBox="0 0 94 100"  xmlns="http://www.w3.org/2000/svg">
<path d="M43.6252 50.0002C50.1168 50.0002 55.3793 44.7769 55.3793 38.3336C55.3793 31.8903 50.1168 26.667 43.6252 26.667C37.1336 26.667 31.8711 31.8903 31.8711 38.3336C31.8711 44.7769 37.1336 50.0002 43.6252 50.0002Z" />
<path d="M44.2297 57.4335C48.3257 57.4265 52.373 58.3142 56.0846 60.0335C53.2267 62.5297 50.937 65.6013 49.3678 69.044C47.7986 72.4867 46.9858 76.2215 46.9835 80.0001C46.9763 82.1807 47.2471 84.3536 47.7895 86.4667C46.4126 86.6 45.0357 86.6667 43.6252 86.6667C34.1473 86.6679 24.9273 83.6019 17.3632 77.9334C18.9524 72.0626 22.4444 66.8742 27.3001 63.1692C32.1558 59.4642 38.1051 57.4486 44.2297 57.4335Z" />
<path d="M87.2834 43.3335C87.3011 47.6012 86.6785 51.8478 85.4363 55.9335C81.8179 54.2202 77.8592 53.3318 73.8501 53.3335C69.9017 53.3256 66.0011 54.191 62.4318 55.8668C60.1851 54.494 57.7844 53.3864 55.2786 52.5668C58.2696 50.1674 60.4327 46.9022 61.4669 43.2256C62.5012 39.5491 62.3551 35.644 61.0491 32.0537C59.7431 28.4633 57.3421 25.3663 54.1801 23.1935C51.0181 21.0207 47.2524 19.8802 43.407 19.9307C39.5615 19.9811 35.8275 21.22 32.7245 23.475C29.6214 25.7299 27.3037 28.8888 26.0938 32.5122C24.8838 36.1355 24.8418 40.0431 25.9736 43.6912C27.1053 47.3394 29.3546 50.5467 32.4084 52.8668C27.7308 54.5704 23.4773 57.2531 19.9368 60.7328C16.3962 64.2125 13.6515 68.4077 11.8891 73.0334C7.00226 67.8892 3.45836 61.6359 1.56678 54.8193C-0.324786 48.0028 -0.506513 40.8303 1.03747 33.928C2.58145 27.0257 5.8042 20.6035 10.4244 15.2219C15.0445 9.84042 20.9217 5.66322 27.5427 3.05503C34.1637 0.446834 41.3273 -0.513067 48.408 0.259128C55.4888 1.03132 62.2715 3.51214 68.164 7.48499C74.0565 11.4578 78.8797 16.802 82.2124 23.0508C85.5451 29.2996 87.2861 36.2632 87.2834 43.3335Z" />
<path d="M73.8501 60.0002C69.8648 60.0002 65.969 61.1731 62.6554 63.3708C59.3418 65.5684 56.7591 68.6919 55.234 72.3464C53.7089 76.0009 53.3099 80.0223 54.0874 83.9019C54.8648 87.7815 56.7839 91.3451 59.6019 94.1422C62.42 96.9392 66.0103 98.844 69.919 99.6157C73.8277 100.387 77.8792 99.9913 81.5611 98.4776C85.243 96.9638 88.39 94.4004 90.6041 91.1114C92.8182 87.8225 94 83.9557 94 80.0001C94 74.6958 91.8771 69.6087 88.0982 65.858C84.3194 62.1073 79.1942 60.0002 73.8501 60.0002ZM80.5667 83.3334H67.1335C66.2428 83.3334 65.3886 82.9822 64.7588 82.3571C64.129 81.732 63.7751 80.8841 63.7751 80.0001C63.7751 79.116 64.129 78.2682 64.7588 77.6431C65.3886 77.0179 66.2428 76.6668 67.1335 76.6668H80.5667C81.4574 76.6668 82.3116 77.0179 82.9414 77.6431C83.5712 78.2682 83.925 79.116 83.925 80.0001C83.925 80.8841 83.5712 81.732 82.9414 82.3571C82.3116 82.9822 81.4574 83.3334 80.5667 83.3334Z" />
</svg>

`
let svg_cancelFollowRequestIcon = `
<svg width="100" height="100" viewBox="0 0 100 100"  xmlns="http://www.w3.org/2000/svg">
<path d="M85.3559 14.6454C65.8284 -4.8818 34.1731 -4.8818 14.6456 14.6454C-4.88188 34.1726 -4.88188 65.8274 14.6456 85.3546C34.1731 104.882 65.8284 104.882 85.3559 85.3546C104.883 65.8274 104.879 34.1726 85.3559 14.6454ZM71.2122 65.5554C71.9622 66.3054 72.3836 67.3226 72.3836 68.3833C72.3836 69.4439 71.9622 70.4611 71.2122 71.2111C70.4622 71.9611 69.445 72.3825 68.3843 72.3825C67.3236 72.3825 66.3064 71.9611 65.5564 71.2111L50.0007 55.6558L34.4451 71.2111C34.0745 71.5839 33.6339 71.8797 33.1486 72.0815C32.6633 72.2833 32.1428 72.3872 31.6172 72.3872C31.0916 72.3872 30.5712 72.2833 30.0858 72.0815C29.6005 71.8797 29.1599 71.5839 28.7893 71.2111C28.4175 70.84 28.1226 70.3992 27.9213 69.914C27.7201 69.4287 27.6165 68.9086 27.6165 68.3833C27.6165 67.8579 27.7201 67.3378 27.9213 66.8525C28.1226 66.3673 28.4175 65.9265 28.7893 65.5554L44.3449 50L28.7893 34.4446C28.0393 33.6946 27.6179 32.6774 27.6179 31.6167C27.6179 30.5561 28.0393 29.5388 28.7893 28.7888C29.5393 28.0388 30.5565 27.6175 31.6172 27.6175C32.6779 27.6175 33.6951 28.0388 34.4451 28.7888L50.0007 44.3442L65.5564 28.7888C65.9277 28.4175 66.3686 28.1229 66.8538 27.9219C67.339 27.7209 67.8591 27.6175 68.3843 27.6175C68.9095 27.6175 69.4295 27.7209 69.9148 27.9219C70.4 28.1229 70.8408 28.4175 71.2122 28.7888C71.5836 29.1602 71.8782 29.6011 72.0792 30.0863C72.2801 30.5715 72.3836 31.0915 72.3836 31.6167C72.3836 32.1419 72.2801 32.662 72.0792 33.1472C71.8782 33.6324 71.5836 34.0733 71.2122 34.4446L55.6566 50L71.2122 65.5554Z" />
</svg>

`
const profileViewFollowerBtn = document.getElementById("profileViewFollowerBtn")
const profileViewFollowingBtn = document.getElementById(
  "profileViewFollowingBtn"
)
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

const profileOtherUserModalCloseBtn = document.getElementById(
  "profileOtherUserModalCloseBtn"
)
const otherUserSwitchBtnContainer = document.getElementById(
  "otherUserSwitchBtnContainer"
)

function setOtherUserModalContent(otherUser = "follower") {
  let followerFlag = otherUser === "follower" ? true : false
  let followingFlag = otherUser === "following" ? true : false

  followerOtherUserSwitchBtn.classList.toggle(
    "switch-btn--active",
    followerFlag
  )
  followerOtherUserContainer.classList.toggle("hide", !followerFlag)

  followingOtherUserSwitchBtn.classList.toggle(
    "switch-btn--active",
    followingFlag
  )
  followingOtherUserContainer.classList.toggle("hide", !followingFlag)
}

profileViewFollowerBtn.addEventListener("click", async () => {
  if (profileOtherUserModal.classList.contains("hide"))
    profileOtherUserModal.classList.remove("hide")

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
profileViewFollowingBtn.addEventListener("click", async () => {
  if (profileOtherUserModal.classList.contains("hide"))
    profileOtherUserModal.classList.remove("hide")

  setOtherUserModalContent("following")

  let { fetchUserAndCreateUserBox } = await import("./createUserBox.dev.js")
  fetchUserAndCreateUserBox(followingUserBoxContainer, "following")
})

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

profileOtherUserModalCloseBtn.addEventListener("click", () => {
  if (!profileOtherUserModal.classList.contains("hide"))
    profileOtherUserModal.classList.add("hide")
})

// let profileUserReceivedFollowRequestCount = document.getElementById(
//   "profileUserReceivedFollowRequestCount"
// )
// let profileUserFollowerCount = document.getElementById(
//   "profileUserFollowerCount"
// )
// let profileUserFollowingCount = document.getElementById(
//   "profileUserFollowingCount"
// )

//btn actions for non owner user ====> simply access the userFollowStatus and hit the respected endpoint and update the profile follow btn userFollowStatus

let profileBtns = [...document.getElementsByClassName("profile-btn")]
profileBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (isOwnerProfile === false) {
      if (btn.dataset.btnType === "follow-action") {
        let userFollowStatus = btn.dataset.userFollowStatus
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
              btn.setAttribute("data-user-follow-status", data.userFollowStatus)
              if (data.userFollowStatus === "send-follow-request") {
                //  socket will decrease the follower count so we do not decrese follower count here
                // profileUserFollowerCount.textContent = (
                //   parseInt(profileUserFollowerCount.textContent) - 1
                // ).toString()
                btn.textContent = "FOLLOW"
                btn.insertAdjacentHTML("afterbegin", svg_followIcon)
                btn.classList.remove(
                  "profile-btn--cancel-sent-follow-request",
                  "profile-btn--unfollow"
                )
                btn.classList.add("profile-btn--follow")
              }
              if (data.userFollowStatus === "cancel-sent-follow-request") {
                btn.textContent = "CANCEL REQUEST"
                btn.insertAdjacentHTML(
                  "afterbegin",
                  svg_cancelFollowRequestIcon
                )
                btn.classList.remove(
                  "profile-btn--follow",
                  "profile-btn--unfollow"
                )
                btn.classList.add("profile-btn--cancel-sent-follow-request")
              }
              if (data.userFollowStatus === "unfollow") {
                //  socket will increse the follower count so we do not increse follower count here
                // profileUserFollowerCount.textContent = (
                //   parseInt(profileUserFollowerCount.textContent) + 1
                // ).toString()
                btn.textContent = "UNFOLLOW"
                btn.insertAdjacentHTML("afterbegin", svg_unfollowIcon)
                btn.classList.remove(
                  "profile-btn--follow",
                  "profile-btn--cancel-sent-follow-request"
                )
                btn.classList.add("profile-btn--unfollow")
              }
            } else {
              createMainNotification(data.error, "error")
            }
          })
          .catch(err => {
            console.log(err)
            createMainNotification("Server Error", "error")
          })
      }
      if (btn.dataset.btnType === "message-action") {
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
      }
    }
  })
})

/////////////////
let toggleReceivedFollowRequestUserBoxContainerBtn = document.getElementById(
  "toggleReceivedFollowRequestUserBoxContainerBtn"
)

if (toggleReceivedFollowRequestUserBoxContainerBtn)
  toggleReceivedFollowRequestUserBoxContainerBtn.addEventListener(
    "click",
    () => {
      if (
        toggleReceivedFollowRequestUserBoxContainerBtn.classList.contains(
          "other-user-container-btn--unselected"
        )
      ) {
        toggleReceivedFollowRequestUserBoxContainerBtn.classList.remove(
          "other-user-container-btn--unselected"
        )
        toggleReceivedFollowRequestUserBoxContainerBtn.classList.add(
          "other-user-container-btn--selected"
        )
        if (
          followerOtherUserContainer.classList.contains(
            "other-user-container--follower"
          )
        )
          followerOtherUserContainer.classList.remove(
            "other-user-container--follower"
          )
        followerOtherUserContainer.classList.add(
          "other-user-container--received-follow-request"
        )
      } else if (
        toggleReceivedFollowRequestUserBoxContainerBtn.classList.contains(
          "other-user-container-btn--selected"
        )
      ) {
        toggleReceivedFollowRequestUserBoxContainerBtn.classList.remove(
          "other-user-container-btn--selected"
        )
        toggleReceivedFollowRequestUserBoxContainerBtn.classList.add(
          "other-user-container-btn--unselected"
        )
        if (
          followerOtherUserContainer.classList.contains(
            "other-user-container--received-follow-request"
          )
        )
          followerOtherUserContainer.classList.remove(
            "other-user-container--received-follow-request"
          )
        followerOtherUserContainer.classList.add(
          "other-user-container--follower"
        )
      }
    }
  )

//////////////////
let profileContentNavBtnContainer = document.getElementById(
  "profileContentNavBtnContainer"
)
let profileContentNavInfo = document.getElementById("profileContentNavInfo")
if (profileContentNavBtnContainer)
  profileContentNavBtnContainer.addEventListener("click", e => {
    let contentNavBtn = e.target.closest(`.profile-content-nav__btn`)

    if (
      contentNavBtn &&
      profileContentNavBtnContainer.contains(contentNavBtn)
    ) {
      removeActiveClassFromContentNavBtn()
      contentNavBtn.classList.add("profile-content-nav__btn--active")

      if (contentNavBtn.dataset.btnType === "open-post-content") {
        profileContentNavInfo.textContent = "Posts"
      }
      if (contentNavBtn.dataset.btnType === "open-trend-content") {
        profileContentNavInfo.textContent = "Trends"
      }
      if (contentNavBtn.dataset.btnType === "open-user-tagged-content") {
        profileContentNavInfo.textContent = "Tagged"
      }
    }
  })
function removeActiveClassFromContentNavBtn() {
  let profileContentNavBtns = [
    ...document.getElementsByClassName("profile-content-nav__btn")
  ]
  profileContentNavBtns.forEach(btn => {
    if (btn.classList.contains("profile-content-nav__btn--active"))
      btn.classList.remove("profile-content-nav__btn--active")
  })
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", event => {
  //close other user modal
  if (event.target === profileOtherUserModal) {
    if (!profileOtherUserModal.classList.contains("hide"))
      profileOtherUserModal.classList.add("hide")
  }
})

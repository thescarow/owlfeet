let svg_defaultUserImageIcon = ` 
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g data-name="Layer 2"><circle cx="16" cy="6.96" r="6"/><path d="M30.86,26.84a15.07,15.07,0,0,0-4.11-7.47A12.47,12.47,0,0,0,25.13,18,15,15,0,0,0,16,15,15.24,15.24,0,0,0,5.24,19.37a15.07,15.07,0,0,0-4.11,7.47,3.42,3.42,0,0,0,.69,2.88A3.52,3.52,0,0,0,4.58,31H27.42a3.52,3.52,0,0,0,2.75-1.32A3.42,3.42,0,0,0,30.86,26.84Z"/></g></svg>
`
import { createMainNotification } from "../../common/mainNotification.dev"
import "../css/createUserBox.dev.css"

let profileUserReceivedFollowRequestCount = document.getElementById(
  "profileUserReceivedFollowRequestCount"
)
let profileUserFollowingCount = document.getElementById(
  "profileUserFollowingCount"
)
let profileUserFollowerCount = document.getElementById(
  "profileUserFollowerCount"
)
function attachEventListenerToUserBoxBtn(userBox, btnType, userBoxUserId) {
  // let fetchMethod =
  //   btnType === "delete-received-follow-request" ? "DELETE" : "PATCH"
  fetch(`/follow/${btnType}/${userBoxUserId}`, {
    method: "PATCH", // or 'PATCH'
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
      // console.log(data)
      if (data.isSuccess === true) {
        if (data.userFollowStatus) {
          if (data.userFollowStatus === "send-follow-request") {
            profileUserFollowingCount.textContent = (
              parseInt(profileUserFollowingCount.textContent) - 1
            ).toString()
          } else if (data.userFollowStatus === "unfollow") {
            profileUserFollowingCount.textContent = (
              parseInt(profileUserFollowingCount.textContent) + 1
            ).toString()
          }
          // else if (data.userFollowStatus === "cancel-sent-follow-request") {
          // }
          createUserBoxBtnWithUserFollowStatus(
            userBox,
            data.userFollowStatus,
            userBoxUserId
          )
        } else {
          userBox.parentNode.removeChild(userBox)
          if (btnType === "accept-received-follow-request") {
            /// increase follower count and decrease received follow request count
            profileUserFollowerCount.textContent = (
              parseInt(profileUserFollowerCount.textContent) + 1
            ).toString()

            profileUserReceivedFollowRequestCount.textContent = (
              parseInt(profileUserReceivedFollowRequestCount.textContent) - 1
            ).toString()

            ///
            let followerUserBoxContainer = document.getElementById(
              "followerUserBoxContainer"
            )
            createUserBox(
              followerUserBoxContainer,
              "follower",
              data.acceptReceivedFollowRequestUser
            )
          }
          if (btnType === "delete-received-follow-request") {
            profileUserReceivedFollowRequestCount.textContent = (
              parseInt(profileUserReceivedFollowRequestCount.textContent) - 1
            ).toString()
          }
          if (btnType === "remove-follower") {
            profileUserFollowerCount.textContent = (
              parseInt(profileUserFollowerCount.textContent) - 1
            ).toString()
          }
          // if (btnType === "cancel-sent-follow-request") {
          // }
        }
      } else {
        createMainNotification(data.error, "error")
      }
    })
}
// create btns for user box  according to user Follow Status
function createUserBoxBtnWithUserFollowStatus(
  userBox,
  userFollowStatus,
  userBoxUserId
) {
  let userBoxBtnsContainer = userBox.getElementsByClassName("user-box__btns")[0]
  userBoxBtnsContainer.innerHTML = ""
  let btn = document.createElement("button")
  btn.classList.add("user-box__btn")
  if (userFollowStatus === "send-follow-request") {
    btn.textContent = "Follow"
    btn.classList.add("user-box__btn--send-follow-request")
  }
  if (userFollowStatus === "cancel-sent-follow-request") {
    btn.textContent = "Cancel Request"
    btn.classList.add("user-box__btn--cancel-sent-follow-request")
  }
  if (userFollowStatus === "unfollow") {
    btn.textContent = "Unfollow"
    btn.classList.add("user-box__btn--unfollow")
  }

  btn.addEventListener("click", () => {
    attachEventListenerToUserBoxBtn(userBox, userFollowStatus, userBoxUserId)
  })
  userBoxBtnsContainer.insertAdjacentElement("beforeend", btn)
}
//create btn for remove Follower
function createRemoveFollowerBtn(userBox, userBoxUserId) {
  let userBoxBtnsContainer = userBox.getElementsByClassName("user-box__btns")[0]
  userBoxBtnsContainer.innerHTML = ""
  let removeFollowerBtn = document.createElement("button")
  removeFollowerBtn.classList.add(
    "user-box__btn",
    "user-box__btn--remove-follower"
  )
  removeFollowerBtn.textContent = "Remove"
  removeFollowerBtn.addEventListener("click", () => {
    attachEventListenerToUserBoxBtn(userBox, "remove-follower", userBoxUserId)
  })
  userBoxBtnsContainer.insertAdjacentElement("beforeend", removeFollowerBtn)
}
//create btns for received follow requests, one for accepting and other for deleting
function createReceivedFollowRequestBtns(userBox, userBoxUserId) {
  let userBoxBtnsContainer = userBox.getElementsByClassName("user-box__btns")[0]
  userBoxBtnsContainer.innerHTML = ""

  let acceptReceivedFollowRequestBtn = document.createElement("button")
  acceptReceivedFollowRequestBtn.classList.add(
    "user-box__btn",
    "user-box__btn--accept-received-follow-request"
  )
  acceptReceivedFollowRequestBtn.textContent = "Accept"
  acceptReceivedFollowRequestBtn.addEventListener("click", () => {
    attachEventListenerToUserBoxBtn(
      userBox,
      "accept-received-follow-request",
      userBoxUserId
    )
  })
  userBoxBtnsContainer.insertAdjacentElement(
    "beforeend",
    acceptReceivedFollowRequestBtn
  )

  //create btn for deleting received follow request
  let deleteReceivedFollowRequestBtn = document.createElement("button")
  deleteReceivedFollowRequestBtn.classList.add(
    "user-box__btn",
    "user-box__btn--delete-received-follow-request"
  )
  deleteReceivedFollowRequestBtn.textContent = "Cancel"
  deleteReceivedFollowRequestBtn.addEventListener("click", () => {
    attachEventListenerToUserBoxBtn(
      userBox,
      "delete-received-follow-request",
      userBoxUserId
    )
  })
  userBoxBtnsContainer.insertAdjacentElement(
    "beforeend",
    deleteReceivedFollowRequestBtn
  )
}

//this function is not used because of createUserBoxBtnWithUserFollowStatus function

// function createUnfollowBtn(userBox, userBoxUserId) {
//   let userBoxBtnsContainer = userBox.getElementsByClassName("user-box__btns")[0]
//   userBoxBtnsContainer.innerHTML = ""
//   let unfollowBtn = document.createElement("button")
//   unfollowBtn.classList.add("user-box__btn", "unfollow-btn")
//   unfollowBtn.textContent = "Following"
//   unfollowBtn.addEventListener("click", () => {
//     attachEventListenerToUserBoxBtn(userBox, "unfollow", userBoxUserId)
//   })
//   userBoxBtnsContainer.insertAdjacentElement("beforeend", unfollowBtn)
// }

//this function is not used because of createUserBoxBtnWithUserFollowStatus function

// function createCancelSentFollowRequestBtn(userBox, userBoxUserId) {
//   let userBoxBtnsContainer = userBox.getElementsByClassName("user-box__btns")[0]
//   userBoxBtnsContainer.innerHTML = ""
//   let cancelSentFollowRequestBtn = document.createElement("button")
//   cancelSentFollowRequestBtn.classList.add(
//     "user-box__btn",
//     "cancle-sent-follow-request-btn"
//   )
//   cancelSentFollowRequestBtn.textContent = "Cancel-sent-follow-request"
//   cancelSentFollowRequestBtn.addEventListener("click", () => {
//     attachEventListenerToUserBoxBtn(
//       userBox,
//       "cancel-sent-follow-request",
//       userBoxUserId
//     )
//   })
//   userBoxBtnsContainer.insertAdjacentElement(
//     "beforeend",
//     cancelSentFollowRequestBtn
//   )
// }

export function createUserBox(userBoxContainer, userBoxType, userBoxUser) {
  let userBox = document.createElement("div")
  userBox.classList.add("user-box")
  userBox.setAttribute("data-user-id", userBoxUser._id)

  let userBoxInnerHtml = `
    <div class="user-box__column">

      <div class='user-box__pic  ${
        userBoxUser.hasOwnProperty("profile") && userBoxUser.profile !== ""
          ? "user-box__pic--img"
          : "user-box__pic--svg"
      }' >
           <a class="user-box__link" href="/user/${userBoxUser.username}">
           
           ${svg_defaultUserImageIcon}
           <img src="${userBoxUser.profile}" alt="${
    userBoxUser.firstName
  }'s pic}">

          </a>
      </div>

    </div>

    <div class="user-box__column user-box__column--left-margin">
      <div class="user-box__username">${userBoxUser.username}</div>
      <div class="user-box__full-name">${userBoxUser.firstName} ${
    userBoxUser.lastName
  }</div>
    </div>
    <div class="user-box__column">
      <div class="user-box__btns">

      

      </div>
    </div>`
  userBox.insertAdjacentHTML("beforeend", userBoxInnerHtml)
  if (isOwnerProfile === true) {
    if (userBoxType === "follower") {
      createRemoveFollowerBtn(userBox, userBoxUser._id)
    } else if (userBoxType === "following") {
      createUserBoxBtnWithUserFollowStatus(userBox, "unfollow", userBoxUser._id)
    } else if (userBoxType === "sent-follow-request") {
      createUserBoxBtnWithUserFollowStatus(
        userBox,
        "cancel-sent-follow-request",
        userBoxUser._id
      )
    } else if (userBoxType === "received-follow-request") {
      createReceivedFollowRequestBtns(userBox, userBoxUser._id)
    }
  }

  userBoxContainer.insertAdjacentElement("afterbegin", userBox)
}

export function fetchUserAndCreateUserBox(userBoxContainer, userBoxType) {
  let userId = isOwnerProfile === true ? "" : profileUser._id
  let skipNumber = userBoxContainer.childElementCount
  fetch(`/follow/${userBoxType}/${userId}?skipNumber=${skipNumber}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      return Promise.reject(response)
    })
    .then(data => {
      // console.log(data) //delete this
      if (data.isSuccess === true) {
        data.user.forEach(user => {
          createUserBox(userBoxContainer, userBoxType, user)
        })
      } else {
        if (data.error) {
          console.log("error:" + data.error)
          createMainNotification(data.error, "error")
        }
      }
    })
    .catch(error => {
      console.log(error)
      createMainNotification("Server Error,Please try again")
    })
}

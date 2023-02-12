import { createMainNotification } from "../../common/mainNotification.dev.js"

export function createSentFollowRequestContainer(
  modalBox,
  modalContentBox,
  profileUser
) {
  document
    .getElementById("otherUserSwitchBtnContainer")
    .classList.remove("other-user-modal-content__switch-btn-container--active")
  document
    .getElementById("followingOtherUserContainer")
    .classList.remove("other-user-container--active")

  document
    .getElementById("followerOtherUserContainer")
    .classList.remove("other-user-container--active")

  let sentFollowRequestOtherUserContainer = document.getElementById(
    "sentFollowRequestOtherUserContainer"
  )
  if (sentFollowRequestOtherUserContainer) {
    sentFollowRequestOtherUserContainer.classList.add(
      "other-user-container--active"
    )
  } else {
    let modalContentBoxHtml = `<div class="other-user-container other-user-container--active" id="sentFollowRequestOtherUserContainer">

      <div class="other-user-container__title">Sent Follow Requests :</div>
    
      <div class="user-box-container other-user-container__user-box-container" id="sentFollowRequestUserBoxContainer">
      </div>
    
    </div>`
    modalContentBox.insertAdjacentHTML("beforeend", modalContentBoxHtml)
  }

  let sentFollowRequestUserBoxContainer = document.getElementById(
    "sentFollowRequestUserBoxContainer"
  )
  return sentFollowRequestUserBoxContainer
}

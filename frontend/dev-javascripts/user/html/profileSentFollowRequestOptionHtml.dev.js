import "../css/profileSentFollowRequestOption.dev.css"

export function setSentFollowRequestContent(
  modalBox,
  modalContentBox,
  profileUser
) {
  modalContentBox.innerHTML = ""
  let sentFollowRequestBox = document.createElement("div")
  sentFollowRequestBox.classList.add("sent-follow-request-box")
  sentFollowRequestBox.setAttribute("id", "sentFollowRequestBox")

  sentFollowRequestBox.innerHTML = `
    <div class="sent-follow-request-box__title">Sent Follow Request</div>

    <div class="user-box-container" id="sentFollowRequestUserBoxContainer">
    </div>
`

  modalContentBox.insertAdjacentElement("beforeend", sentFollowRequestBox)
  attachScript(profileUser)
}
async function attachScript(profileUser) {
  let sentFollowRequestUserBoxContainer = document.getElementById(
    "sentFollowRequestUserBoxContainer"
  )

  let { fetchUserAndCreateUserBox } = await import("../js/createUserBox.dev.js")
  fetchUserAndCreateUserBox(
    sentFollowRequestUserBoxContainer,
    "sent-follow-request",
    profileUser
  )
}

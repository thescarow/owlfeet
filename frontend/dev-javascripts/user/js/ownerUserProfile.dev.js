// owner settings section modal
const profileOwnerSettingSection = document.getElementById(
  "profileOwnerSettingSection"
)
// Get the button that opens the ownerSettingSection
const ownerSettingIcon = document.getElementById("ownerSettingIcon")

const cancleSettingOption = document.getElementById("cancleSettingOption")

// When the user clicks on the button, open the modal
ownerSettingIcon.onclick = function () {
  profileOwnerSettingSection.classList.add("show")
}

cancleSettingOption.onclick = function () {
  profileOwnerSettingSection.classList.remove("show")
}

// profileOwnerSettingContentModal
//profileOwnerSettingContentModalContent
const profileOwnerSettingContentModal = document.getElementById(
  "profileOwnerSettingContentModal"
)
const profileOwnerSettingContentModalContent = document.getElementById(
  "profileOwnerSettingContentModalContent"
)

// change password setting action
const changePasswordOption = document.getElementById("changePasswordOption")
changePasswordOption.addEventListener("click", () => {
  profileOwnerSettingContentModal.style.display = "block"
  profileOwnerSettingSection.classList.remove("show")
  import("../html/profileChangePasswordOptionHtml.dev.js").then(
    ({ setOwnerSettingContent }) => {
      setOwnerSettingContent(
        profileOwnerSettingContentModal,
        profileOwnerSettingContentModalContent
      )
    }
  )
})
// edit profile setting action
const editProfileOption = document.getElementById("editProfileOption")
editProfileOption.addEventListener("click", () => {
  profileOwnerSettingContentModal.style.display = "block"
  profileOwnerSettingSection.classList.remove("show")
  import("../html/profileEditProfileOptionHtml.dev.js").then(
    ({ setOwnerSettingContent }) => {
      setOwnerSettingContent(
        profileOwnerSettingContentModal,
        profileOwnerSettingContentModalContent,
        profileUser
      )
    }
  )
})
// Switched User Privacy action
const switchUserPrivacyOption = document.getElementById(
  "switchUserPrivacyOption"
)
switchUserPrivacyOption.addEventListener("click", () => {
  profileOwnerSettingContentModal.style.display = "block"
  profileOwnerSettingSection.classList.remove("show")
  import("../html/profileSwitchUserPrivacyOptionHtml.dev.js").then(
    ({ setOwnerSettingContent }) => {
      setOwnerSettingContent(
        profileOwnerSettingContentModal,
        profileOwnerSettingContentModalContent,
        profileUser
      )
    }
  )
})

// logout user setting action
const logoutUserOption = document.getElementById("logoutUserOption")
logoutUserOption.addEventListener("click", () => {
  profileOwnerSettingContentModal.style.display = "block"
  profileOwnerSettingSection.classList.remove("show")
  import("../html/profileLogoutUserOptionHtml.dev.js").then(
    ({ setOwnerSettingContent }) => {
      setOwnerSettingContent(
        profileOwnerSettingContentModal,
        profileOwnerSettingContentModalContent,
        profileUser
      )
    }
  )
})
//Verify User Email action
const verifyUserEmailOption = document.getElementById("verifyUserEmailOption")
verifyUserEmailOption.addEventListener("click", () => {
  profileOwnerSettingContentModal.style.display = "block"
  profileOwnerSettingSection.classList.remove("show")
  import("../html/profileVerifyUserEmailOptionHtml.dev.js").then(
    ({ setOwnerSettingContent }) => {
      setOwnerSettingContent(
        profileOwnerSettingContentModal,
        profileOwnerSettingContentModalContent,
        profileUser
      )
    }
  )
})
//User  Feedback/Report action
const userFeedbackReportOption = document.getElementById(
  "userFeedbackReportOption"
)
userFeedbackReportOption.addEventListener("click", () => {
  profileOwnerSettingContentModal.style.display = "block"
  profileOwnerSettingSection.classList.remove("show")
  import("../html/profileUserFeedbackReportOptionHtml.dev.js").then(
    ({ setOwnerSettingContent }) => {
      setOwnerSettingContent(
        profileOwnerSettingContentModal,
        profileOwnerSettingContentModalContent,
        profileUser
      )
    }
  )
})

// create sent follow requests option
const sentFollowRequest = document.getElementById("sentFollowRequest")
sentFollowRequest.addEventListener("click", async () => {
  profileOtherUserModal.style.display = "block"
  profileOwnerSettingSection.classList.remove("show")
  let { createSentFollowRequestContainer } = await import(
    "../html/createSentFollowRequestHtml.dev.js"
  )
  let sentFollowRequestUserBoxContainer = createSentFollowRequestContainer(
    profileOtherUserModal,
    profileOtherUserModalContent,
    profileUser
  )
  let { fetchUserAndCreateUserBox } = await import("./createUserBox.dev.js")
  fetchUserAndCreateUserBox(
    sentFollowRequestUserBoxContainer,
    "sent-follow-request",
    profileUser
  )
})

// When the user clicks anywhere outside of the modal, close it

window.onclick = function (event) {
  if (event.target == profileOwnerSettingContentModal) {
    profileOwnerSettingContentModal.style.display = "none"
  }
  if (event.target == profileOwnerSettingSection) {
    profileOwnerSettingSection.classList.remove("show")
  }
  if (event.target == document.body) {
    profileOwnerSettingSection.classList.remove("show")
    profileOwnerSettingContentModal.style.display = "none"
  }
}

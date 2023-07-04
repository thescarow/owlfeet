// settingInnerModal
const profileInnerModal = document.getElementById("profileInnerModal")
const profileInnerModalContent = document.getElementById(
  "profileInnerModalContent"
)
const profileInnerModalCloseBtn = document.getElementById(
  "profileInnerModalCloseBtn"
)
profileInnerModalCloseBtn.addEventListener("click", () => {
  if (!profileInnerModal.classList.contains("hide"))
    profileInnerModal.classList.add("hide")
})

const ownerSettingOptionsModal = document.getElementById(
  "ownerSettingOptionsModal"
)
const settingOptionsContent = document.getElementById("settingOptionsContent")

const openOwnerSettingBtn = document.getElementById("openOwnerSettingBtn")

const cancleSettingOption = document.getElementById("cancleSettingOption")

// When the user clicks on the button, open the modal
openOwnerSettingBtn.onclick = function () {
  if (ownerSettingOptionsModal.classList.contains("hide"))
    ownerSettingOptionsModal.classList.remove("hide")
}

settingOptionsContent.addEventListener("click", async e => {
  let settingOption = e.target.closest(`.setting-option`)

  if (settingOption && settingOptionsContent.contains(settingOption)) {
    if (settingOption.dataset.settingOption === "edit-profile") {
      if (!ownerSettingOptionsModal.classList.contains("hide"))
        ownerSettingOptionsModal.classList.add("hide")

      if (profileInnerModal.classList.contains("hide"))
        profileInnerModal.classList.remove("hide")
      profileInnerModalContent.className =
        "inner-modal-content inner-modal-content--edit-profile"

      let { setEditProfileContent } = await import(
        "../html/profileEditProfileOptionHtml.dev.js"
      )
      setEditProfileContent(profileInnerModalContent, profileUser)
    }
    if (settingOption.dataset.settingOption === "change-password") {
      if (!ownerSettingOptionsModal.classList.contains("hide"))
        ownerSettingOptionsModal.classList.add("hide")

      if (profileInnerModal.classList.contains("hide"))
        profileInnerModal.classList.remove("hide")
      profileInnerModalContent.className =
        "inner-modal-content inner-modal-content--change-password"

      let { setChangePasswordContent } = await import(
        "../html/profileChangePasswordOptionHtml.dev.js"
      )
      setChangePasswordContent(profileInnerModal, profileInnerModalContent)
    }

    if (settingOption.dataset.settingOption === "verify-email") {
      if (!ownerSettingOptionsModal.classList.contains("hide"))
        ownerSettingOptionsModal.classList.add("hide")

      if (profileInnerModal.classList.contains("hide"))
        profileInnerModal.classList.remove("hide")
      profileInnerModalContent.className =
        "inner-modal-content inner-modal-content--verify-email"

      let { setVerifyEmailContent } = await import(
        "../html/profileVerifyUserEmailOptionHtml.dev.js"
      )
      setVerifyEmailContent(
        profileInnerModal,
        profileInnerModalContent,
        loginUser
      )
    }
    if (settingOption.dataset.settingOption === "switch-account-privacy") {
      if (!ownerSettingOptionsModal.classList.contains("hide"))
        ownerSettingOptionsModal.classList.add("hide")

      if (profileInnerModal.classList.contains("hide"))
        profileInnerModal.classList.remove("hide")
      profileInnerModalContent.className =
        "inner-modal-content inner-modal-content--account-privacy"

      let { setAccountPrivacyContent } = await import(
        "../html/profileSwitchUserPrivacyOptionHtml.dev.js"
      )
      setAccountPrivacyContent(
        profileInnerModal,
        profileInnerModalContent,
        loginUser
      )
    }
    if (settingOption.dataset.settingOption === "sent-follow-request") {
      if (!ownerSettingOptionsModal.classList.contains("hide"))
        ownerSettingOptionsModal.classList.add("hide")

      if (profileInnerModal.classList.contains("hide"))
        profileInnerModal.classList.remove("hide")
      profileInnerModalContent.className =
        "inner-modal-content inner-modal-content--sent-follow-request"

      let { setSentFollowRequestContent } = await import(
        "../html/profileSentFollowRequestOptionHtml.dev.js"
      )
      setSentFollowRequestContent(
        profileInnerModal,
        profileInnerModalContent,
        loginUser
      )
    }

    if (settingOption.dataset.settingOption === "feedback") {
      if (!ownerSettingOptionsModal.classList.contains("hide"))
        ownerSettingOptionsModal.classList.add("hide")

      if (profileInnerModal.classList.contains("hide"))
        profileInnerModal.classList.remove("hide")
      profileInnerModalContent.className =
        "inner-modal-content inner-modal-content--feedback"

      let { setFeedbackContent } = await import(
        "../html/profileUserFeedbackReportOptionHtml.dev.js"
      )
      setFeedbackContent(profileInnerModal, profileInnerModalContent)
    }
    if (settingOption.dataset.settingOption === "logout") {
      if (!ownerSettingOptionsModal.classList.contains("hide"))
        ownerSettingOptionsModal.classList.add("hide")

      if (profileInnerModal.classList.contains("hide"))
        profileInnerModal.classList.remove("hide")
      profileInnerModalContent.className =
        "inner-modal-content inner-modal-content--logout"

      let { setLogoutContent } = await import(
        "../html/profileLogoutUserOptionHtml.dev.js"
      )
      setLogoutContent(profileInnerModal, profileInnerModalContent, profileUser)
    }
    if (settingOption.dataset.settingOption === "close-modal") {
      if (!ownerSettingOptionsModal.classList.contains("hide"))
        ownerSettingOptionsModal.classList.add("hide")
    }
  }
})

const ownerEditProfileBtn = document.getElementById("ownerEditProfileBtn")

ownerEditProfileBtn.addEventListener("click", async () => {
  if (profileInnerModal.classList.contains("hide"))
    profileInnerModal.classList.remove("hide")
  profileInnerModalContent.className =
    "inner-modal-content inner-modal-content--edit-profile"

  let { setEditProfileContent } = await import(
    "../html/profileEditProfileOptionHtml.dev.js"
  )
  setEditProfileContent(profileInnerModalContent, profileUser)
})

// When the user clicks anywhere outside of the modal, close it

window.addEventListener("click", event => {
  if (event.target === profileInnerModal) {
    if (!profileInnerModal.classList.contains("hide"))
      profileInnerModal.classList.add("hide")
  }
  if (event.target === ownerSettingOptionsModal) {
    if (!ownerSettingOptionsModal.classList.contains("hide"))
      ownerSettingOptionsModal.classList.add("hide")
  }
})

// export function updateProfileUserEmailToVerified(userId, verifiedEmail) {
//   console.log("profile user:", profileUser, "loginUser:", loginUser)

//   if (loginUser._id.toString() === userId.toString()) {
//     profileUser.email = verifiedEmail
//     profileUser.email = verifiedEmail
//     loginUser.isEmailVerified = true
//     loginUser.isEmailVerified = true
//   }
// }

;(async function () {
  if (isLogin === true) {
    let { createMainNotification } = await import(
      "../common/mainNotification.dev.js"
    )
    import("./js/loginUserProfile.dev.js")
  }
  if (isOwner === true) {
    import("./js/ownerUserProfile.dev.js")
  }

  if (isLogin === false && isOwner === false) {
    import("./js/guestUserProfile.dev.js")
  }
  // scroll non owner profile picture to small size and show the bio
  const profileMainContainer = document.getElementById("profileMainContainer")
  const profileBio = document.getElementById("profileBio")
  const profileImageSection = document.getElementById("profileImageSection")
  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 35 && isOwner == false) {
      profileImageSection.classList.add("scroll")
    }
  })
})()

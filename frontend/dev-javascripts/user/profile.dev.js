;(async function () {
  if (isLogin === true) {
    await import("./js/loginUserProfile.dev.js")
  }
  if (isOwnerProfile === true) {
    await import("./js/ownerUserProfile.dev.js")
  }

  if (isLogin === false && isOwnerProfile === false) {
    await import("./js/guestUserProfile.dev.js")
  }
  // // scroll non owner profile picture to small size and show the bio
  // const profileMainContainer = document.getElementById("profileMainContainer")
  // const profileBio = document.getElementById("profileBio")
  // const profileImageSection = document.getElementById("profileImageSection")
  // window.addEventListener("scroll", () => {
  //   if (window.pageYOffset >= 35 && isOwnerProfile == false) {
  //     profileImageSection.classList.add("scroll")
  //   }
  // })
})()

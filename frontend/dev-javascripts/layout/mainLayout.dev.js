document.body.style.height = window.innerHeight + "px"
window.addEventListener("resize", () => {
  document.body.style.height = window.innerHeight + "px"
})
;(async function () {
  document.body.style.height = window.innerHeight
  if (!IS_INIT_MAIN_LAYOUT_MODULE) {
    await updateGlobalIsLogin()
    if (isLogin) {
      await updateGlobalLoginUserData()
    }

    if (pageName === "profile") {
      if (PROFILE_USERNAME) updateGlobalProfileUserData(PROFILE_USERNAME)
    }

    if (pageName === "chat") {
      updateGlobalAllChatData()
    }

    // handle keyboard for main navigation
    const { checkKeyboard } = await import("../common/keyboardDetector.dev")

    checkKeyboard(onKeyboard, offKeyboard)

    IS_INIT_MAIN_LAYOUT_MODULE = true
  }
})()

export async function updateGlobalLoginUserData() {
  try {
    let response = await fetch(`/user/data/login-user`)
    if (!response.ok)
      throw Error(
        "Server Error In Accessing Login User, Please Refresh Your Page"
      )
    let data = await response.json()
    if (data.isSuccess) {
      loginUser = data.loginUser
    } else {
      let { createMainNotification } = await import(
        "../common/mainNotification.dev"
      )
      createMainNotification(data.error, "error")
    }
  } catch (e) {
    console.error(e)
    createMainNotification(
      "Server Error In Fetching Login User Data, Please Refresh Your Page",
      "error"
    )
  }
}
export async function updateGlobalProfileUserData(username) {
  fetch(`/user/data/profile-user`, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username: username })
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      return Promise.reject(response)
    })
    .then(async data => {
      if (data.isSuccess) {
        profileUser = data.profileUser
      } else {
        let { createMainNotification } = await import(
          "../common/mainNotification.dev"
        )
        createMainNotification(
          "Server Error In Fetching Profile User, Please Refresh Your Page",
          "error"
        )
      }
    })
    .catch(async err => {
      console.error(err)
      let { createMainNotification } = await import(
        "../common/mainNotification.dev"
      )
      createMainNotification(
        "Server Error In Fetching Profile User, Please Refresh Your Page",
        "error"
      )
    })
}
export async function updateGlobalAllChatData() {
  fetch(`/chat/data/all-chat`)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      return Promise.reject(response)
    })
    .then(async data => {
      if (data.isSuccess) {
        allChatData = data.allChatData
      } else {
        let { createMainNotification } = await import(
          "../common/mainNotification.dev"
        )
        createMainNotification(
          "Error In Fetching All Chat Data, Please Refresh Your Page:",
          "error"
        )
      }
    })
    .catch(async err => {
      console.error(err)
      let { createMainNotification } = await import(
        "../common/mainNotification.dev"
      )
      createMainNotification(
        "Error In Fetching All Chat Data, Please Refresh Your Page:",
        "error"
      )
    })
}
export async function updateGlobalIsLogin() {
  try {
    let response = await fetch(`/user/check/login-status`)
    if (!response.ok) throw Error("server error")
    let data = await response.json()
    if (data.isLogin) {
      isLogin = true
    } else {
      isLogin = false
    }
  } catch (e) {
    console.error(e)
  }
}

function onKeyboard(height) {
  const mainNavContainer = document.getElementById("mainNavContainer")
  if (!mainNavContainer.classList.contains("hide")) {
    mainNavContainer.classList.add("hide")
  }
}
function offKeyboard() {
  const mainNavContainer = document.getElementById("mainNavContainer")
  if (mainNavContainer.classList.contains("hide")) {
    mainNavContainer.classList.remove("hide")
  }
}

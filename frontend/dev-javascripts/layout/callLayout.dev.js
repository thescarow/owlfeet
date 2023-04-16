;(async function () {
  if (!IS_INIT_CALL_MODULE) {
    await updateGlobalIsLogin()
    if (isLogin) {
      await updateGlobalLoginUserData()
    }

    IS_INIT_CALL_MODULE = true
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

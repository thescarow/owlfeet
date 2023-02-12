//@description     Render login and signup page

//@route           GET userAuth/login or userAuth/signin or userAuth/signup or userAuth/register or userAuth/account or userAuth/profile

//@access          Public and getLoginUser
exports.getAccountPage = async (req, res) => {
  if (req.user) {
    res.redirect(`/user/${req.user.username}`)
  } else {
    if (
      req.url == "/login" ||
      req.url == "/signin" ||
      req.url == "/account" ||
      req.url == "/profile"
    )
      res.render("./user-auth/account", {
        pageName: "profile",
        accountType: "signup"
      })
    else {
      res.render("./user-auth/account", {
        pageName: "profile",
        accountType: "login"
      })
    }
  }
}

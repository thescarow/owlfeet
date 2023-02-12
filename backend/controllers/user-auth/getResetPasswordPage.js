//@description     Render reset Password Page
//@route           GET /userAuth/resetPassword
//@access          Accessing login User
exports.getResetPasswordPage = (req, res) => {
  if (req.user) {
    res.redirect(`/user/${req.user.username}`)
  } else {
    res.render("./user-auth/resetPassword")
  }
}

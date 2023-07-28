exports.redirectToHttps = (req, res, next) => {
  if (process.env.NODE_ENV === "production") {
    // Check if the request is not secure (HTTP)
    if (!req.secure) {
      return res.redirect(`https://${req.headers.host}${req.url}`)
    }
    next()
  } else {
    next()
  }
}

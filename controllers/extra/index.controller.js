const News = require("../../models/news")
const User = require("../../models/user")

exports.getHomePage = async (req, res) => {
  let news
  const loginUser = await User.findById(req.userId).select({
    password: 0,
    bio: 0,
    birthday: 0,
    mobile: 0,
    email: 0
  })

  try {
    news = await News.find()
      .sort({ createdAt: -1 })
      .limit(3)
      .select({
        newsType: 0,
        newsLocType: 0,
        titleSlug: 0,
        markedDesc: 0,
        location: 0,
        reports: 0,
        hashTags: 0
      })
      .populate({
        path: "user",
        select: "firstName lastname userName role profile location"
      })

    res.render("home/index", {
      page_name: "home",
      allNews: news,
      loginUser: loginUser
    })
  } catch {
    news = []
    res.render("home/index", {
      page_name: "home",
      allNews: news,
      loginUser: loginUser
    })
  }
}
//////////////////////////////////////////

exports.postFetchNews = async (req, res) => {
  let news
  const loginUser = await User.findById(req.userId).select({
    password: 0,
    bio: 0,
    birthday: 0,
    mobile: 0,
    email: 0
  })

  console.log(req.body.lastNewsId)
  if (req.body.lastNewsId == "firstElement") {
    news = await News.find({ category: req.body.category })
      .sort({ createdAt: "desc" })
      .limit(2)
      .select({
        newsType: 0,
        newsLocType: 0,
        titleSlug: 0,
        markedDesc: 0,
        location: 0,
        reports: 0,
        hashTags: 0
      })
      .populate({
        path: "user",
        select: "firstName lastname userName role profile location"
      })

    console.log(news)
  } else {
    let lastNews = await News.findById(req.body.lastNewsId)
    let lastNewsCategory
    if (lastNews.category.length > 1) {
      lastNewsCategory = lastNews.category[1]
    } else {
      lastNewsCategory = lastNews.category[0]
    }

    try {
      news = await News.find({
        category: lastNewsCategory,
        createdAt: { $lt: lastNews.createdAt }
      })
        .sort({ createdAt: "desc" })
        .limit(1)
        .select({
          newsType: 0,
          newsLocType: 0,
          titleSlug: 0,
          markedDesc: 0,
          location: 0,
          reports: 0,
          hashTags: 0
        })
        .populate({
          path: "user",
          select: "firstName lastname userName role profile location"
        })

      let count = await News.countDocuments({
        createdAt: { $lt: lastNews.createdAt }
      })
      console.log(count)
    } catch (e) {
      res.json({ error: e.message })
    }
  }
  res.json({ allNews: news, loginUser: loginUser })
}

//@description     Render login and signup page

//@route           GET /login or /signin or /signup or /register or account or /profile

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
      res.render("./index/account", {
        page_name: "profile",
        page_type: "signup"
      })
    else {
      res.render("./index/account", {
        page_name: "profile",
        page_type: "login"
      })
    }
  }
}

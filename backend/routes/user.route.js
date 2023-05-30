const express = require("express")
const router = express.Router()
const {
  getProfilePageByUsername,
  fetchFollowingUsers,
  fetchMainUsersData,
  getLoginUserData,
  getProfileUserData,
  checkLoginStatus
} = require("../controllers/user")
const { getLoginUser } = require("../middleware/auth.middleware")

// /user/
router.get("/fetch-following-users", getLoginUser, fetchFollowingUsers)

router.get("/data/main-users", getLoginUser, fetchMainUsersData)
router.get("/data/login-user", getLoginUser, getLoginUserData)
router.post("/data/profile-user", getLoginUser, getProfileUserData)

router.get("/check/login-status", getLoginUser, checkLoginStatus)
router.get("/:username", getLoginUser, getProfilePageByUsername)

module.exports = router

// router.post("/login", async (req, res) => {
//   const { mobile, password } = req.body;

//   try {
//     const user = await User.findOne({ mobile: mobile });
//     if (user) {
//       if (await bcrypt.compare(password, user.password)) {
//         const accessToken = jwt.sign(
//           { userName: user.userName, userId: user._id, userRole: user.role },
//           process.env.ACCESS_TOKEN_SECRET
//         );

//         res.cookie("user", accessToken, {
//           maxAge: 60 * 60 * 24 * 1000,
//         });

//         res.redirect(`/users/${user.userName}`);
//       } else {
//         res.render("./users/account", {
//           page_name: "account",
//           message: "invalid password",
//           messageType: "error",
//         });
//         // change the message here because it indicate to hacker that they type the write number but wrong password
//       }
//     } else {
//       res.render("./users/account", {
//         page_name: "account",
//         message: "user is not found",
//         messageType: "error",
//       });
//     }
//   } catch (e) {
//     res.status(500).send(e.message);
//   }
// });

// router.get("/:username", getloginuser, async (req, res) => {
//   try {
//     const loginUser = await User.findById(req.userId).select({
//       password: 0,
//       savedNews: 0,
//       likedNews: 0,
//       savedTrends: 0,
//       likedTrends: 0,
//     });

//     ////////////////

//     if (loginUser.userName == req.params.username) {
//       let userPosts = await News.find({ user: req.userId }).select({
//         images: 1,
//         videos: 1,
//         titleSlug: 1,
//       });

//       res.render("./users/profile", {
//         page_name: "account",
//         owner: true,
//         user: loginUser,
//         userPosts: userPosts,
//       });
//     } else {
//       const user = await User.findOne({ userName: req.params.username }).select(
//         {
//           password: 0,
//           mobile: 0,
//           email: 0,
//           savedNews: 0,
//           likedNews: 0,
//           savedTrends: 0,
//           likedTrends: 0,
//           activities: 0,
//         }
//       );

//       if (user) {
//         let userPosts = await News.find({ user: user._id }).select({
//           images: 1,
//           videos: 1,
//           titleSlug: 1,
//         });

//         res.render("./users/profile", {
//           page_name: "account",
//           owner: false,
//           user: user,
//           userPosts: userPosts,
//         });
//       } else {
//         req.send("404 user not found with this userName");
//       }
//     } // end of else (loginUser.userName == req.params.username)
//   } catch (e) {
//     res.status(500).send("server error in finding user ");
//   }
// });

// router.post("/fetchPosts", async (req, res) => {
//   try {
//     let userPosts = [];
//     if (req.body.postType == "news") {
//       userPosts = await News.find({ user: req.body.userId }).select({
//         images: 1,
//         videos: 1,
//         titleSlug: 1,
//       });
//     } else if (req.body.postType == "likedNews") {
//       let posts = await User.findOne({ _id: req.body.userId })
//         .populate({
//           path: "likedNews",
//           model: "News",
//           select: "images videos titleSlug",
//         })
//         .select({ likedNews: 1 });

//       userPosts = posts.likedNews;
//     } else if (req.body.postType == "savedNews") {
//       let posts = await User.findOne({ _id: req.body.userId })
//         .populate({
//           path: "savedNews",
//           model: "News",
//           select: "images videos titleSlug",
//         })
//         .select({ savedNews: 1 });

//       console.log(posts.savedNews);
//       userPosts = posts.savedNews;
//     }

//     res.json({
//       userPosts: userPosts,
//     });
//   } catch (e) {
//     res.json({ error: e.message });
//   }
// });

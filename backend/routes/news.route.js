const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");
const slugify = require("slugify");
const marked = require("marked");
const createDomPurify = require("dompurify");
const { JSDOM } = require("jsdom");
const dompurify = createDomPurify(new JSDOM().window);

const multer = require("multer");
const News = require("../models/news");
const User = require("../models/user");
const getloginuser = require("../middleware/getloginuser");

const newsImagesBasePath = path.join("public", News.newsImagesBasePath);
const newsVideosBasePath = path.join("public", News.newsVideosBasePath);
const imageMimeTypes = ["image/jpeg", "image/png", "image/gif"];
const videoMimeTypes = [
  "video/mp4",
  "video/x-flv",
  "video/x-ms-wmv",
  "video/3gpp",
  "application/x-mpegUR",
  "video/MP2T",
  "	video/quicktime",
  "video/x-msvideo",
  "video/x-matroska",
  "video/webm",
];

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let uploadPath;
    if (file.fieldname == "images") {
      uploadPath = newsImagesBasePath;
    } else {
      uploadPath = newsVideosBasePath;
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueFileName =
      file.fieldname +
      "-" +
      file.originalname.split(".")[0] +
      Date.now() +
      "." +
      file.originalname.split(".")[file.originalname.split(".").length - 1];
    cb(null, uniqueFileName);
  },
});

const maxSize = 1 * 1024 * 1024 * 1024; // 1 * 1024 1kB * 1024 1MB * 1024 = 1GB
const upload = multer({
  storage: storage,

  fileFilter: (req, file, callback) => {
    if (file.fieldname == "images") {
      callback(null, imageMimeTypes.includes(file.mimetype));
    } else {
      callback(null, videoMimeTypes.includes(file.mimetype));
    }
  },
  // const fileFilter = (req, file, cb) => {
  //     const fileSize = parseInt(req.headers['content-length']);
  //     if((file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'application/octet-stream') && (fileSize <= 1282810)) {
  //     cb(null, true);
  //     } else if(file.mimetype === 'video/mp4' && fileSize <= 22282810) {
  //     cb(null, true);
  //     }
  //     else {
  //     cb(null, false);
  //     }

  limits: { fileSize: maxSize },
});

////////////////////////////////

router.post(
  "/",
  getloginuser,
  upload.fields([
    { name: "images", maxCount: 5 },
    { name: "videos", maxCount: 2 },
  ]),
  async (req, res) => {
    if (req.userId) {
      try {
        console.log(req.userRole);
        let categories = ['general', 'politics', 'sports', 'health', 'business', 'tech', 'gadgets', 'entertainment', 'jobs', 'localImportant', 'astronomy']
       
        let newsImages =
          req.files["images"] != undefined ? req.files["images"] : [];
        newsImages = newsImages.map((element) => element.filename);

        let newsVideos =
          req.files["videos"] != undefined ? req.files["videos"] : [];
        newsVideos = newsVideos.map((element) => {
          return { path: element.filename, mimeType: element.mimetype };
        });

        let title = req.body.title.trim();

        let desc = req.body.desc.trim();
        let city = req.body.city.trim();
        let state = req.body.state;
        let category = ['general']

        console.log("1");

        if (title != "" && desc != "" && city != "") {
          let titleSlug =
            slugify(title, { lower: true, strict: true }) + Date.now();
          let sanitizedDesc = dompurify.sanitize(marked.parse(desc));

if(categories.includes(req.body.category)) category.push(req.body.category)

console.log(category)

          console.log("2");
          const createdNews = new News({
            title: title,
            titleSlug: titleSlug,
            markedDesc: desc,
            sanitizedDesc: sanitizedDesc,
            "location.city": city,
            "location.state": state,
            category: category,
            newsType: "verified",
            newsLocType: 1,
            images: newsImages,
            videos: newsVideos,
            user: req.userId,
          });

          console.log("3");

          const savedNews = await createdNews.save();
          console.log("4");
          res.redirect(`/news/${savedNews.titleSlug}`);
          console.log("5");
        } else {
          res.render("add"); // ALSO SHOW MESSSAGE TO USER SO THAT HE CAN UNDERSTAND WHAT IS THE ERROR IN CREATING NEWS
        }
      } catch (e) {
        console.log("server error in creating news ", e.message);
        res.render("add"); // ALSO SHOW MESSSAGE TO USER SO THAT HE CAN UNDERSTAND WHAT IS THE ERROR IN CREATING NEWS
      }
    } // user id if state end her
    else {
      res.send("you do not have token or have a wrong token");
    }
  }
);

router.put("/actions/like", getloginuser, async (req, res) => {
  if (req.userId) {
    try {
      const { newsId, action } = req.body;

      const loginUser = await User.findById(req.userId).select({
        likedNews: 1,
      });
      const news = await News.findById(newsId).select({ likes: 1 });

      if (action == "like") {
        if (
          !loginUser.likedNews.includes(newsId) ||
          !news.likes.includes(loginUser._id)
        )
          news.likes.push(loginUser._id);
        loginUser.likedNews.push(newsId);
      }

      if (action == "unlike") {
        news.likes.pull(loginUser._id);
        loginUser.likedNews.pull(newsId);
      }

      let savedUser = await loginUser.save();
      let savedNews = await news.save();
      // console.log(savedUser,savedNews)
      // let saved = { savedUserId: savedUser._id , savedNewsId: savedNews._id}

      res.json({savedUserId: savedUser._id});
    } catch (e) {
      res.status(500).json({error:"server error in liking post"});
    }
  } else {
    res.status(401).json({ error: "you can not like the post, please login" });
  }
});

router.put("/actions/comment", getloginuser, async (req, res) => {
  if (req.userId) {
    try {
      const { newsId, commentValue } = req.body;

      const news = await News.findById(newsId);
      let sanitizedComment = dompurify.sanitize(commentValue);
      if (sanitizedComment != "") {
        let comment = {
          postedBy: req.userId,
          content: sanitizedComment,
        };

        news.comments.push(comment);
        let savedNews = await news.save();
        res.json({savedNews:savedNews});
      } else {
        res.json({ invalidComment: "you entered invalid comment" });
      }
    } catch (e) {
      res.status(500).json({error: "server error in commenting news"});
    }
  } else {
    res.status(401).json({error: "you can not comment the post, please login"});
  }
});

// for saving the news
router.put("/actions/save", getloginuser, async (req, res) => {
  if (req.userId) {
    try {
      const { newsId, action } = req.body;

      const loginUser = await User.findById(req.userId).select({
        savedNews: 1,
      });

      if (action == "save") {
        if (!loginUser.savedNews.includes(newsId))
          loginUser.savedNews.push(newsId);
      }

      if (action == "unsave") {
        loginUser.savedNews.pull(newsId);
      }

      let savedUser = await loginUser.save();

      // console.log(savedUser,savedNews)
      // let saved = { savedUserId: savedUser._id , savedNewsId: savedNews._id}
      console.log(savedUser);
      res.json({savedUserId:savedUser._id});
    } catch (e) {
      res.status(500).json({error:"server error in saving post"});
    }
  } else {
    res.status(401).json({error:"you can not save the post, please login "});
  }
});
// ###################### end save feature

// for saving the news
router.put("/actions/follow", getloginuser, async (req, res) => {
  if (req.userId) {
    try {
      const { followUserId, action } = req.body;

      const loginUser = await User.findById(req.userId).select({
        followings: 1,
      });
      const followUser = await User.findById(followUserId).select({
        followers: 1,
      });

      if (action == "follow") {
        if (!loginUser.followings.includes(followUserId))
          loginUser.followings.push(followUser._id);
        followUser.followers.push(loginUser._id);
      }

      if (action == "unfollow") {
        loginUser.followings.pull(followUser._id);
        followUser.followers.pull(loginUser._id);
      }

      let savedLoginUser = await loginUser.save();
      let savedFollowUser = await followUser.save();

      res.json({ loginUser: savedLoginUser, followUser: savedFollowUser });
    } catch (e) {
      res.status(500).json({error:"server error in follow/unfollow user"});
    }
  } else {
    res.status(401).json({error:"you can not follow/unfollow user, please login "});
  }
});

router.get("/:titleSlug", getloginuser ,async (req, res) => {
  try {

    const loginUser = await User.findById(req.userId).select({password: 0,bio:0,birthday:0,mobile:0,email:0})
    const news = await News.findOne({
      titleSlug: req.params.titleSlug
    })
      .select({
        newsType: 0,
        newsLocType:0,
        titleSlug:0,
        markedDesc:0,
        category:0,
        location:0,
        reports:0,
        hashTags:0
        
      })
      .populate({
        path: "user",
        select: "firstName lastname userName role profile location",
      });

    if (news != null) {
      res.render("./news/news", {
        news: news,
        page_name: "search",
        loginUser: loginUser
      });
    } else {
      res.send("404 missing news page render here");
    }
  } catch (e) {
    res.send("server error in finding the news of tilteslug");
  }
});

router.post("/data/desc", async (req, res) => {
  const { newsId } = req.body;
  try {
    const news = await News.findById(newsId);
    res.json({
      desc: news.sanitizedDesc,
    });
  } catch (e) {
    res.json({ error: e.message });
  }
});

router.post("/data/comments", async (req, res) => {
  const { newsId } = req.body;
  try {
    const news = await News.findById(newsId)
      .select({
        comments: 1,
      })
      .populate({
        path: "comments.postedBy",
        select: "profile userName",
        model: "User",
      });
    res.json({
      comments: news.comments,
    });
  } catch (e) {
    res.json({ error: e.message });
  }
});

module.exports = router;

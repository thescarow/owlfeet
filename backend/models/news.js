const mongoose = require("mongoose");
const path = require("path");


const newsImagesBasePath = "uploads/uploadImages";
const newsVideosBasePath = "uploads/uploadVideos";
const newsImagesDefaultPath = "defaults/news/image.jpg";
const newsVideosDefaultPath = "defaults/news/video.mp4";

const commentSchema = new mongoose.Schema({
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  content: {
    type: String,
    required: true,
    default:"invalid Comment",
    trim: true,
  },

  repliedBy: [
    {
      replyPostedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      replyContent: {type:String}
    },
  ],

  likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const newsSchema = new mongoose.Schema(
  {
    newsType: {
      type: String,
      required: true,
    },
    newsLocType: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    titleSlug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    markedDesc: {
      type: String,
      required: true,
    },

    sanitizedDesc: {
      type: String,
      required: true,
    },

    category: {
      type:[String],
      required: true,
      default: ['general']
    },

    //here i have to work on foreign country where people have no idea about city or state. we have to  access country and according to country change the required value of city and state
    location: {
      city: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true, default: "india" },
    },

    likes: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    },

    comments: {
      type: [commentSchema],
    },

    images: {
      type: [String],

      validate: {
        validator: (a) => a.length <= 5,
        message: (prop) => "exceed no of images",
      },
    },

    videos: {
      type: [{
        path: String,
        mimeType: String
      }],

      validate: {
        validator: (a) => a.length <= 2,
        message: (prop) => "exceed no of videos",
      },
    },

    reports: {
      type: [
        {
          reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
          reportMessage: {type:String}
        },
      ],
    },

    hashTags: {
      type: [String],
     
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);



// bookSchema.virtual('imagesPath').get(function() {
//   if (this.imagesName.length > 0 && this.coverImageType != null) {
//     return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString('base64')}`
//   }
// })

newsSchema.virtual("imagesPath").get(function () {
  if (this.images != []) {
    let a = [];
    this.images.forEach((p) => {
      a.push(path.join("/", newsImagesBasePath, p));
    });

    return a;
  } else {
    return newsImagesDefaultPath;
  }
});

newsSchema.virtual("videosPath").get(function () {
  if (this.videos != []) {
    let a = [];
    this.videos.forEach((p) => {
      a.push(path.join("/", newsVideosBasePath, p.path));
    });

    return a;
  } else {
    return newsVideosDefaultPath;
  }
});

module.exports = mongoose.model("News", newsSchema);

module.exports.newsImagesBasePath = newsImagesBasePath;
module.exports.newsVideosBasePath = newsVideosBasePath;

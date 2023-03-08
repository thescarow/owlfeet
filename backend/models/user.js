const mongoose = require("mongoose")

const { userRole, userPrivacy } = require("./common/userRoleNPrivacy")

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
      default: userRole.VERIFIED
    },

    privacy: {
      type: String,
      default: userPrivacy.PUBLIC
    },

    firstName: {
      type: String,
      required: true,
      trim: true,
      default: ""
    },

    lastName: {
      type: String,
      trim: true,
      default: ""
    },

    username: {
      type: String,
      required: true,
      trim: true,
      index: {
        unique: true,
        partialFilterExpression: { username: { $type: "string" } }
      }
    },

    profile: {
      type: String,
      trim: true,
      default: ""
    },

    gender: {
      type: String,
      trim: true,
      default: "male"
    },

    location: {
      city: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true, default: "IN" }
    },

    bio: {
      type: String,
      default: ""
    },

    birthday: {
      type: Date,
      default: Date.now()
    },

    mobile: {
      type: String,
      required: true,
      index: {
        unique: true,
        partialFilterExpression: { mobile: { $type: "string" } }
      }
    },

    password: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      default: ""
    },

    isEmailVerified: {
      type: Boolean,
      required: true,
      default: false
    },

    followers: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      default: []
    },

    followings: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      default: []
    },
    isActive: {
      type: Boolean,
      default: false
    },
    lastActive: {
      type: Date
    }
    // savedNews: {
    //   type: [{ type: mongoose.Schema.Types.ObjectId, ref: "News" }],
    //   default: []
    // },

    // likedNews: {
    //   type: [{ type: mongoose.Schema.Types.ObjectId, ref: "News" }],
    //   default: []
    // },

    // savedTrends: {
    //   type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Trend" }],
    //   default: []
    // },

    // likedTrends: {
    //   type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Trend" }],
    //   default: []
    // },

    // activities: {
    //   type: [String],
    //   default: []
    // }
  },
  { timestamps: true }
)
// userSchema.virtual('profileImagePath').get(function(){
//   if(this.profile != null){
//     return path.join('/',profileImageBasePath, this.profile)
//   }
//   else
//   {
//     return profileImageDefaultPath
//   }
// })

userSchema.virtual("fullName").get(function () {
  if (this.lastName != null) {
    return this.firstName + " " + this.lastName
  } else {
    return this.firstName
  }
})
// authorSchema.pre('remove', function(next) {
//   Book.find({ author: this.id }, (err, books) => {
//     if (err) {
//       next(err)
//     } else if (books.length > 0) {
//       next(new Error('This author has books still'))
//     } else {
//       next()
//     }
//   })
// })

module.exports = mongoose.model("User", userSchema)

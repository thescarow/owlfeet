const fs = require("fs")
const path = require("path")
const { v4: uuidv4 } = require("uuid")
const companion = require("@uppy/companion")
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}
const PROTOCOL = process.env.PROTOCOL
const HOSTNAME = process.env.HOSTNAME
const PORT = process.env.PORT
const ORIGIN = process.env.PROTOCOL + "://" + process.env.HOSTNAME
//////////////////////////////
const DATA_DIR = path.join(__dirname, "companion-tmp-file")

const options = {
  s3: {
    getKey: (req, filename, metadata) => {
      // console.log(req, "-----", filename, "-------", metadata)
      if (filename !== "") {
        return filename
      } else {
        let fileName = `${metadata.mediaType}/${
          metadata.type.split("/")[0]
        }/${uuidv4()}-${Date.now()}`
        return fileName
      }
    },
    key: process.env.AWS_ACCESS_KEY,
    secret: process.env.AWS_SECRET_ACCESS_KEY,
    bucket: process.env.AWS_BUCKET_NAME,
    region: process.env.AWS_BUCKET_REGION
  },
  server: {
    // host: "localhost:5000",
    host: HOSTNAME,
    // protocol: "http",
    protocol: PROTOCOL,
    // This MUST match the path you specify in `app.use()` below:
    path: "/companion"
  },
  filePath: DATA_DIR,
  secret: "this-is-secret-change-it-later",
  debug: false,
  // uploadUrls: ["http:localhost:5000/"],
  uploadUrls: [ORIGIN],
  streamingUpload: true
}
try {
  fs.accessSync(DATA_DIR)
} catch (err) {
  fs.mkdirSync(DATA_DIR)
}
const { app: companionApp } = companion.app(options)
// process.on('exit', () => {
//   fs.rmSync(DATA_DIR, { recursive: true, force: true })
// })

module.exports = {
  companion: companion,
  companionApp: companionApp
}

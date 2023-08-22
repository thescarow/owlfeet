if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}
const PORT = process.env.PORT || 5000
const ORIGIN = process.env.PROTOCOL + "://" + process.env.HOSTNAME
console.log("ORIGIN:", ORIGIN)
// imports dependencies
const { createServer } = require("http")
const express = require("express")
const { createSocketIOInstance } = require("./socket")
const expressSession = require("express-session")
const expressLayouts = require("express-ejs-layouts")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const compression = require("compression")
// const { companion, companionApp } = require("./services/companionServer") //fetching companion package and companion app
const { connectDB } = require("./config/database")
const { registerRoutes } = require("./routes")
const {
  notFound,
  errorHandler
} = require("./middleware/errorHandler.middleware")
const { redirectToHttps } = require("./middleware/redirectToHttps.middleware")
////////////////////////////////////////////////

const app = express()
const httpServer = createServer(app)

let io = createSocketIOInstance(httpServer) //creating socket io instance and defining the socket eventhandler

connectDB() // connecting to database

//setting express app settings
app.set("view engine", "ejs")
app.set("views", "./frontend/pages")
app.set("layout", "layout/mainLayout")
app.set("layout extractScripts", true)
app.set("layout extractStyles", true)
app.set("query parser", "simple") // Only parse query parameters into strings and array, not objects
if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", true) //for reverse proxy or load balancer
}

// define middleware here
app.use(cookieParser(process.env.COOKIE_PARSER_SECRET))
app.use(expressLayouts)
app.use(express.static("./frontend/public"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  expressSession({
    secret: process.env.EXPRESS_SESSION_SECRET,
    saveUninitialized: false,
    resave: false
  })
)
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
  })
)

// // Middleware to redirect HTTP to HTTPS
app.use(redirectToHttps)

// Enable gzip compression for all responses
app.use(compression({ level: 6 }))
app.use((req, res, next) => {
  req.io = io
  next()
}) // asigning io instance to req object

// app.use("/companion", companionApp) // define companion app on /companion end Point here

registerRoutes(app) // register routes

// not found and error handling
app.use(notFound)
app.use(errorHandler)

httpServer.listen(PORT, () => {
  console.log("App listening on port:", PORT)
})
// const mainServer = app.listen(PORT, () => {
// console.log("App listening on port:", PORT)
// })
// companion.socket(httpServer)

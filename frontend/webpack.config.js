const path = require("path")

module.exports = {
  entry: {
    mainLayout: path.resolve(
      __dirname,
      "./dev-javascripts/layout/mainLayout.dev.js"
    ),
    callLayout: path.resolve(
      __dirname,
      "./dev-javascripts/layout/callLayout.dev.js"
    ),

    test: path.resolve(__dirname, "./dev-javascripts/test/test.dev.js"),

    // test2: path.resolve(__dirname, "./dev-javascripts/test/test2.dev.js"),

    // test3: path.resolve(__dirname, "./dev-javascripts/test/test3.dev.js"),

    home: path.resolve(__dirname, "./dev-javascripts/index/home.dev.js"),

    userNotification: path.resolve(
      __dirname,
      "./dev-javascripts/user-notification/userNotification.dev.js"
    ),

    explore: path.resolve(
      __dirname,
      "./dev-javascripts/explore/explore.dev.js"
    ),

    account: path.resolve(
      __dirname,
      "./dev-javascripts/user-auth/account.dev.js"
    ),

    resetPassword: path.resolve(
      __dirname,
      "./dev-javascripts/user-auth/resetPassword.dev.js"
    ),

    emailLogin: path.resolve(
      __dirname,
      "./dev-javascripts/user-auth/emailLogin.dev.js"
    ),

    emailLoginStatus: path.resolve(
      __dirname,
      "./dev-javascripts/response-status/emailLoginStatus.dev.js"
    ),

    profile: path.resolve(__dirname, "./dev-javascripts/user/profile.dev.js"),

    chat: path.resolve(__dirname, "./dev-javascripts/chat/chat.dev.js"),

    call: path.resolve(__dirname, "./dev-javascripts/call/call.dev.js"),

    indexSocket: path.resolve(
      __dirname,
      "./dev-javascripts/socket/indexSocket.dev.js"
    )
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "non-initial-chunk/[id].js",
    path: path.resolve(__dirname, "./public/javascripts/")
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        // test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  corejs: 3,
                  targets: "last 2 versions, > 1%, not dead",
                  modules: false
                }
              ]

              // ["@babel/preset-react"]
            ] // ensure compatibility with older browsers
          }
        }
      }
      // {
      //   test: /\.js$/,
      //   loader: "webpack-remove-debug" // remove "debug" package
      // }
    ]
  }
  //   plugins: [
  //   new HtmlWebpackPlugin({
  //     template: 'src/index.html'
  //   })
  // ]

  // watch: true
  // watchOptions: {
  //   aggregateTimeout: 200,
  //   poll: 1000
  // }
  //   devServer: {
  //     watchFiles: "./deploy",
  //     open: true,
  //   }
}

const path = require("path")

module.exports = {
  entry: {
    // mainLayout: path.resolve(
    //   __dirname,
    //   "./dev-javascripts/layout/mainLayout.dev.js"
    // )
    // home: path.resolve(__dirname, "./dev-javascripts/index/home.dev.js")
    // account: path.resolve(
    //   __dirname,
    //   "./dev-javascripts/user-auth/account.dev.js"
    // )
    // resetPassword: path.resolve(
    //   __dirname,
    //   "./dev-javascripts/user-auth/resetPassword.dev.js"
    // )
    // profile: path.resolve(__dirname, "./dev-javascripts/user/profile.dev.js")
    // chat: path.resolve(__dirname, "./dev-javascripts/chat/chat.dev.js")
    indexSocket: path.resolve(
      __dirname,
      "./dev-javascripts/socket/indexSocket.dev.js"
    )
  },
  output: {
    filename: "[name].bundle.js",
    // path: path.resolve(__dirname, "./public/javascripts/layout/")
    // path: path.resolve(__dirname, "./public/javascripts/index/")
    // path: path.resolve(__dirname, "./public/javascripts/user-auth/")
    // path: path.resolve(__dirname, "./public/javascripts/user/")
    // path: path.resolve(__dirname, "./public/javascripts/chat/")
    path: path.resolve(__dirname, "./public/javascripts/socket/")
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
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

  //   devServer: {
  //     watchFiles: "./deploy",
  //     open: true,
  //   }
}

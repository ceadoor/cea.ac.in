const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = (env, options) => ({
  entry: ["./src/index.js"],
  devServer: {
    contentBase: "./dist"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          options.mode !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "./img/"
            }
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            attrs: [":src"]
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
    }),
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: "body",
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/administration.html",
      inject: "body",
      filename: "administration.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/contact.html",
      inject: "body",
      filename: "contact.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/gallery.html",
      inject: "body",
      filename: "gallery.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/admissions.html",
      inject: "body",
      filename: "admissions.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/resources.html",
      inject: "body",
      filename: "resources.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/news-and-events.html",
      inject: "body",
      filename: "news-and-events.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/news-and-events/news.html",
      inject: "body",
      filename: "news-and-events/news.html"
    }),
    new HtmlWebpackPlugin({
        template: "src/news-and-events/events.html",
        inject: "body",
        filename: "news-and-events/events.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/news-and-events/whats-going-on.html",
      inject: "body",
      filename: "news-and-events/whats-going-on.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/studies.html",
      inject: "body",
      filename: "studies.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/studies/academic-programs.html",
      inject: "body",
      filename: "studies/academic-programs.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/studies/departments.html",
      inject: "body",
      filename: "studies/departments.html"
    }),   
    new HtmlWebpackPlugin({
      template: "src/studies/btech-computer-science-engg.html",
      inject: "body",
      filename: "studies/btech-computer-science-engg.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/studies/btech-computer-science-engg/course-plan.html",
      inject: "body",
      filename: "studies/btech-computer-science-engg/course-plan.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/studies/btech-electrical-and-electronics-engg.html",
      inject: "body",
      filename: "studies/btech-electrical-and-electronics-engg.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/studies/btech-mechanical-engg.html",
      inject: "body",
      filename: "studies/btech-mechanical-engg.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/studies/btech-electronics-and-communication-engg.html",
      inject: "body",
      filename: "studies/btech-electronics-and-communication-engg.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/studies/mtech-thermal-engg.html",
      inject: "body",
      filename: "studies/mtech-thermal-engg.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/studies/university.html",
      inject: "body",
      filename: "studies/university.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/studies/universities/ktu.html",
      inject: "body",
      filename: "studies/universities/ktu.html"
    }),  
    new HtmlWebpackPlugin({
      template: "src/studies/universities/cusat.html",
      inject: "body",
      filename: "studies/universities/cusat.html"
    }),         
    new HtmlWebpackPlugin({
      template: "src/about.html",
      inject: "body",
      filename: "about.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/about/faculty.html",
      inject: "body",
      filename: "about/faculty.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/about/our-history.html",
      inject: "body",
      filename: "about/our-history.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/about/our-commitment.html",
      inject: "body",
      filename: "about/our-commitment.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/cea-experience.html",
      inject: "body",
      filename: "cea-experience.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/cea-experience/stories.html",
      inject: "body",
      filename: "cea-experience/stories.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/cea-experience/professional-experience.html",
      inject: "body",
      filename: "cea-experience/professional-experience.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/campus-life/clubs-at-cea.html",
      inject: "body",
      filename: "campus-life/clubs-at-cea.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/campus-life/clubs-at-cea/pulse-cea.html",
      inject: "body",
      filename: "campus-life/clubs-at-cea/pulse-cea.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/campus-life/clubs-at-cea/nss-cea.html",
      inject: "body",
      filename: "campus-life/clubs-at-cea/nss-cea.html"
    }),    
    new HtmlWebpackPlugin({
      template: "src/campus-life/clubs-at-cea/trace-cea.html",
      inject: "body",
      filename: "campus-life/clubs-at-cea/trace-cea.html"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Popper: ["popper.js", "default"],
      Util: "exports-loader?Util!bootstrap/js/dist/util",
      Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown"
    })
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: options.mode === "production" ?'https://ceadoor.github.io/cea.ac.in/':'http://localhost:8080/'
  }
});
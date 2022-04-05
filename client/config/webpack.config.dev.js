const config = require("./webpack.config");
const Dotenv = require("dotenv-webpack");

config.devServer = {
  historyApiFallback: true,
  port: 8080,
  liveReload: true,
  open: true,
};

config.plugins.push(new Dotenv());

config.devtool = "inline-source-map";

module.exports = config;

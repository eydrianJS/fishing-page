const path = require("path");
const rules = [
  {
    test: /\.tsx?/,
    exclude: /node_modules/,
    loader: "babel-loader"
  },

  { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
  {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]"
        }
      }
    ]
  },
  {
    test: /\.css?/,
    use: ['style-loader', 'css-loader'],
    exclude: /node_modules/,
  },
];

module.exports = {
  target: "web",
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: { rules },
  resolve: { extensions: [".ts", ".tsx", ".js", ".jsx"] },
  devServer: {
    contentBase: "./public",
    port: 5000
  }
};

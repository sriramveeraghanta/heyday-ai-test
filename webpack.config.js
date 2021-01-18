const path = require("path");

const config = {
  mode: "production",
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};

const question1 = Object.assign({}, config, {
  name: "question1",
  entry: "./question-1/app.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "question1.bundle.js",
  },
});

const question2 = Object.assign({}, config, {
  name: "question2",
  entry: "./question-2/app.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "question2.bundle.js",
  },
});

const question3 = Object.assign({}, config, {
  name: "question3",
  entry: "./question-3/app.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "question3.bundle.js",
  },
});

const question5 = Object.assign({}, config, {
  name: "question5",
  entry: "./question-5/app.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "question5.bundle.js",
  },
});

module.exports = [question1, question2, question3, question5];

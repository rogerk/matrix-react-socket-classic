const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    context: __dirname + "/src",
    //entry: "./index.js",
    entry: __dirname + "/src",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        retainLines: true
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "bundle.js"
    },
    devtool: "source-map",
    devServer: {
        contentBase: "./dist"
        // hot: true
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: __dirname + "/src/index.html",
            filename: "./index.html"
        })
    ]
};

const Dotenv = require("dotenv-webpack");

module.exports = {
    mode: "production",
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devtool: "source-map",
    plugins: [
        new Dotenv({
            path: "./.env.production"
        })
    ]
};

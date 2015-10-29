module.exports = {
    entry: {
        main: "./unbundled-app.js"
    },
    devtool: 'source-map',
    output: {
        filename: "main.bundle.js",
        sourceMapFilename: "main.bundle.js.map"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}

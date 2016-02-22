var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
    'webpack-dev-server/client?http://0.0.0.0:8081', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    './index.js' // Your appʼs entry point
  ],
    devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx','.css']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel'],
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules'
            }
        ]
    },
    devServer: {
        contentBase: "./public",
        noInfo: true, //  --no-info option
        hot: true,
        inline: true
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]
};
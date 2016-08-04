var webpack = require('webpack');

module.exports = {
    entry: [
        './11-transpile.js'
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.json/,
            loaders: ['json']
        }]
    },
    resolve: {
        extensions: ['', '.js']
    },
    output: {
        path: __dirname + '/bundle',
        publicPath: '/',
        filename: 'main.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"dev"'
        })
    ]
};
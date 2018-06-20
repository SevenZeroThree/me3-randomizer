const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        helpers: './index.js',
        jQueryRandomizer: './jQuery/jquery.randomizer.js'
    },
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
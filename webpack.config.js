const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        helpers: './index.js',
        jQueryRandomizer: './jQuery/jquery.randomizer.js',
        JavaScriptRandomizer: './JavaScript/javascript.randomizer.js',
        ReactRandomizer: './react/index.jsx',
        AngularRandomizer: './angular/main.ts'
    },
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                },
                resolve: {
                    extensions: ['.js', '.jsx'],
                }
            },
            {
                test: /\.ts$/,
                loaders: [
                  {
                    loader: 'awesome-typescript-loader',
                    options: { configFileName: 'tsconfig.json' }
                  } , 'angular2-template-loader'
                ],
                resolve: {
                    extensions: ['.ts', '.js'],
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
        ]
    }
};
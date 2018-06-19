const path = require('path');

module.exports = {
    mode: "development",
    entry: './helpers/randomizer.js',
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'helpers.js'
    }
};
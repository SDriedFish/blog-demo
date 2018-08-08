var path = require('path');
module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/main.js'),
        a: [path.resolve(__dirname, './src/a.js'), path.resolve(__dirname, './src/b.js')]
    },
    output: {
        path: path.resolve(__dirname, './dist/js'),
        filename: '[name]-[chunkhash].js'
    }
}
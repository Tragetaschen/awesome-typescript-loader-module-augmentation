var path = require('path');

module.exports = {
    entry: {
        'main': path.resolve(__dirname + '/main.ts'),
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loaders: 'awesome-typescript?tsconfig=tsconfig.json'
        }]
    },    
    output: {
        filename: '[name].js',
        publicPath: '/',
        path: path.resolve(__dirname + '/dist'),
    },
}
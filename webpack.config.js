module.exports = {  
    entry: './web/js/main.ts',
    output: {
        filename: './web/bundles/bundle.js',
        publicPath: "/assets/"
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader'
        }]
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    }
}
module.exports = {
    entry: './web/js/main.ts',
    output: {
        filename: './web/bundles/bundle.js',
        publicPath: "/assets/"
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loader: ['ts-loader', 'angular2-template-loader?keepUrl=true']
        }, {
            test: /\.html$/,
            loader: 'raw-loader'

        }]
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    }
}
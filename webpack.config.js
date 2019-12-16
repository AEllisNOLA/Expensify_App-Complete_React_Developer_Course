const path = require('path');

module.exports = (env) => {
    const isProduction = env === 'production';
    console.log('env', env)
    return {
        entry: './src/app.js',
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }]
        },
        devtool: isProduction ? 'source-map': 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.resolve(__dirname, 'public'),
            historyApiFallback: true
        }
    }
}

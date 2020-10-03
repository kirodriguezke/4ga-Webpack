var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
entry: './src/main.js', output: {
path: path.resolve(__dirname, 'dist'),
filename: 'main.bundle.js' },
module: { rules: [{
test: /\.css$/,
use: [ 'style-loader', 'css-loader' ] }]
},
plugins: [new HtmlWebpackPlugin({template: 'src/index.html'})] };
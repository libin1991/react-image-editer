const webpack = require('webpack')
const path = require('path')
const vendors = [
    'react',
    'react-dom',
    'antd'
]

let config = {
    entry: {
        vendor: vendors
    },
    output: {
        path: path.resolve(__dirname, 'demo/dist'),
        publicPath: '/assets/',
        filename: '[name].js',
        library: '[name]'
    },
    mode: 'production',
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve(__dirname, 'demo/dist', 'manifest.json'),
            name: '[name]',
            context: __dirname
        })
    ]
}

module.exports = config

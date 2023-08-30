const path = require('path')

const javascriptRules = {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-react']
        }
    }
}

const cssRules = {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
        "style-loader",
        "css-loader"
    ]
}

module.exports = {
    entry: './src/main.jsx',
    module: {
        rules: [javascriptRules, cssRules]
    }
}
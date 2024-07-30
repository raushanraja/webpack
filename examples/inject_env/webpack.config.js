require('dotenv').config()

const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')


console.log(Object.keys(process.env).filter(key => key.startsWith('ABC')))

const env = Object.keys(process.env).
    filter(key => key.startsWith('ABC'))
    .reduce((prev, next) => {
        console.log('prev', prev)
        prev[`${next}`] = JSON.stringify(process.env[next])
        return prev
    }, {});



module.exports = {


    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.DefinePlugin(
            {
                'env': env
            }
        )
    ]

}


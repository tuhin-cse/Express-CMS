const path = require('path');
const webpack = require("webpack");

module.exports = [{
    name: 'admin',
    mode: 'development',
    target: 'web',
    entry: './resources/admin/app.js',
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'admin-webpack.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [[
                            "@babel/preset-env",
                            {
                                modules: "amd"
                            }
                        ], "@babel/preset-react", ]
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],

    resolve: {
        alias: {
            process: "process/browser"
        },
    }
}]
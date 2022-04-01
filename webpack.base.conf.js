const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
  assets: 'assets',
}


module.exports = {

  externals: {
    paths: PATHS

  },

    entry: './src/index.js',
    output: {
        path: PATHS.dist,
        filename: `${PATHS.assets}/js/[name].js`,
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
          },
          {
            test: /\.(png|jpg|gif|svg|ico)$/,
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          },
          {
            test: /\.pug$/,
            loader: 'pug-loader'
          },
          
          {
            test: /\.scss$/,
            use: [
              'style-loader',
                MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: {sourceMap: true,
                  url: false         
                  },
                },
                {
                  loader: 'sass-loader',
                  options: {sourceMap: true},
                }
            ],
          }, 
         
          {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader"
            ],
          },  {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: './assets/fonts/[name].[ext]',
                }
            }]
          }, 
        ],
      },
    plugins:[
        new HtmlWebpackPlugin({
            template: `${PATHS.src}/pages/index/index.pug`,
            filename: './index.html',
            inject: 'body',
            hash: false
        }),
        new HtmlWebpackPlugin({
          template: `${PATHS.src}/pages/SearchRoom/SearchRoom.pug`,
          filename: './SearchRoom.html',
          inject: 'body',
          hash: false
        }),
        new HtmlWebpackPlugin({
          template: `${PATHS.src}/pages/RoomDetails/RoomDetails.pug`,
          filename: './RoomDetails.html',
          inject: 'body',
          hash: false
        }),
        new HtmlWebpackPlugin({
          template: `${PATHS.src}/pages/UiKit/ColorsAndType/ColorsAndType.pug`,
          filename: './UiKit/ColorsAndType.html',
          inject: 'body',
          hash: false
        }),
        new HtmlWebpackPlugin({
          template: `${PATHS.src}/pages/UiKit/FormElements/FormElements.pug`,
          filename: './UiKit/FormElements.html',
          inject: 'body',
          hash: false
        }),
        new HtmlWebpackPlugin({
          template: `${PATHS.src}/pages/UiKit/cards/cards.pug`,
          filename: './UiKit/cards.html',
          inject: 'body',
          hash: false
        }),
        new HtmlWebpackPlugin({
          template: `${PATHS.src}/pages/UiKit/HeadersFooters/HeadersFooters.pug`,
          filename: './UiKit/HeadersFooters.html',
          inject: 'body',
          hash: false
        }),

        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}/css/[name].css`,
        }),
        new CopyWebpackPlugin([
          {from:`${PATHS.src}/static/fonts/`, to:`${PATHS.assets}/fonts/`},
          {from:`${PATHS.src}/static/img/`, to:`${PATHS.assets}/img/`},
          {from:`${PATHS.src}/blocks/room-card/room-card-img/`, to:`${PATHS.assets}/img/room-card/`},
        ]),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
        }),
    ],
};
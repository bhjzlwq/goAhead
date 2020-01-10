const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack")
module.exports = {
  // 指定打包模式
  mode: 'development',
  entry:{
    // 配置入口文件
    main: ["@babel/polyfill",path.resolve(__dirname,'../src/main.js')]
  },
  output:{
    // 配置打包文件输出的目录
    path: path.resolve(__dirname,'../dist'),
    // 生成的打包文件的名称
    filename: 'js/[name].[hash:8].js',
    // 生成的 chunk 名称
    chunkFilename: 'js/[name].[hash:8].js',
    // 资源引用路径
    publicPath: './'
  },
  module: {
    rules:[
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(scss|sass)$/,
        use:[
          {
            loader:'style-loader'
          },
          {
            loader:'css-loader'
          },
          {
            loader:'sass-loader',
            options:{
              implementation: require('dart-sass')
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'../public/index.html')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}

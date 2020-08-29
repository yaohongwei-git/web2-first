var HtmlWebpackPlugin = require('html-webpack-plugin');

// 导入了内置的路径模块：path
const path = require('path');

// 使用热启动时需要实时调用webpack进行打包，所以在这里要导入该模块
require('webpack');

// 导出
module.exports = {
// entry表示入口文件，即从哪个文件开始打包
// 如果文件之间互相依赖，即在内部有导入导出，就可以只写一个入口文件即可
// main.js相当于是首页，可以在该页面中使用require导入其他要打包的js，webpack会自动根据这些依赖进行整体打包
  entry: './src/main.js',
  // 出口文件：要将打包好的文件放到哪里
  output: {
    // 将文件保存到当前目录下的dist文件夹
    path: path.resolve(__dirname, 'dist'),
    //打包后的那个文件名
    filename: 'bundle.js'
  },
  // 打包css所需要的配置信息
  module: {
    // rules是规则的意思。将css的打包规则写在这里
    rules: [
      {
        //找到所有的css文件，并使用下面的两款loader进行处理
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        //打包图片、图标字体等，并使用fileloader进行处理
        test: /\.(png|jpg|gif|eot|ttf|svg|woff|woff2)$/,
        use: 'file-loader' 
      }
    ]
  },
  // 插件需要启动才会生效，导入的是一个函数，需要new一下才可以使用
  plugins: [new HtmlWebpackPlugin({
    template:'./src/index.html'
  })]
};
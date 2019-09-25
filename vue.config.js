const CompressionPlugin = require('compression-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
//TODO uglifyjs 和vue-socialmedia-share 同时使用会打包失败
module.exports = {
  publicPath: './', // 默认'/'，部署应用包时的基本 URL
  productionSourceMap: false,
  configureWebpack: () => {
    if (process.env.NODE_ENV === "production") {
      return {
        plugins: [
          new CompressionPlugin({
            filename: '[path].gz[query]',
            test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i,
            algorithm: 'gzip',
            cache: true,
            threshold: 10240,
            minRatio: 0.8,
          }),
        ],
        // optimization: {
        //   minimizer: [
        //     new UglifyJsPlugin({
        //       uglifyOptions: {
        //         compress: {
        //           warnings: false,
        //           drop_console: true,
        //           drop_debugger: false,
        //           pure_funcs: ['console.log']//移除console
        //         }
        //       }
        //     })
        //   ]
        // }
      }
    }
  },

  // devServer: {
  //     proxy: {
  //         '/api': {
  //             target: 'http://test.uniqorn.pro',//设置你调用的接口域名和端口号 别忘了加http
  //             changeOrigin: true,
  //             pathRewrite: {
  //                 '^/api': ''//这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
  //             }
  //         }
  //     },  // 配置多个代理
  // }
}

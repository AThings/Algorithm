#### 2019-10-20 9 全局变量引入问题
* 1、expose-loader暴露到window上
  ` index.js
       import $ from 'expose-loader?$!jquery'  // 内联loader 写在代码里的loader
    webpack.config.js
       module:{
           rules:[
               {
                   test:require.reslove('jquery'), // 当文件中引入jquery时
                   use:'expose-loader?$'
               }
           ]
       }
  `
* 2、providePlugin给每个文件提供$
   `  webapck.config.js
      let webpack = require('webpack')
      plugins:[
          new webpack.ProvidePlugin({
              $:'jquery'
          })
      ]
   `
* 3、引入不打包
    `  index.html
        <script src='https://code.jquery.com/jquery-3.4.1.min.js'></script>
       index.js
        import $ from 'jquery'  // 重复引用
       webpack.config.js
        externals:{
            jquery:'$'
        }
    `
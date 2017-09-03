> 模块打包器
* webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader' --watch
* --watch当文件改变时自动打包，--progress 打包过程，--display-modules 所打包文件的依赖模块，--display-reasons打包模块的原因
```js
var htmlWebpackPlugin =require('html-webpack-plugin')
module.exports={
  entry:{
    main:'./src/script/main.js',
    a:'./src/script/a.js'
  },
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'js/[name]-[chunkhash].js'//分别打包文件
    // filename:'./dist/js/bundle.js'
  },
  plugins:[
    new htmlWebpackPlugin({//js 打包时，动态跟据js hash文件的后缀引入到html中
      template:'src/html/index.html',
      filename:'index-[hash].html',
      inject:'head',
      title:'i\'m ok',//html:<title><%= htmlWebpackPlugin.options.title %></title>，
      minify:{//压缩html
        removeComments:true,//移除注释
        collapseWhitespace:true,//移除标签之间的多余空格
    })
  ]
}
```

> 模块打包器
* webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader' --watch
* --watch当文件改变时自动打包，--progress 打包过程，--display-modules 所打包文件的依赖模块，--display-reasons打包模块的原因
```js
module.exports={
  entry:{
    main:'./src/script/main.js',
    a:'./src/script/a.js'
  },
  output:{
    path:path.resolve(__dirname,'dist/js'),
    filename:'[name].js'//分别打包文件
  }
}
```

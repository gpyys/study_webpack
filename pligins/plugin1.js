class HelloWorld {
  apply(compiler){
    console.log('你好，插件')

    compiler.hooks.done.tap('HelloWorld',()=>{
      console.log('整个webpack打包结束了！')
    })

    compiler.hooks.emit.tap('HelloWorld',()=>{
      console.log('文件发射结束了')
    })
  }
}

module.exports = HelloWorld
const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')

class HtmlPlugin {
  constructor(options){
    this.options = options
    this.root = process.cwd()
  }

  apply(compiler){
    compiler.hooks.afterEmit.tap('HtmlPlugin',(compilation)=>{
      let htmlPath = path.join(this.root,this.options.template)

      const htmlSource = fs.readFileSync(htmlPath,"utf8")

      let $ = cheerio.load(htmlSource)

      Object.keys(compilation.assets).forEach(item => {
        $(`<script src=${item} ></script>`).appendTo('body')
      })

      console.log($.html())

      fs.writeFileSync(`./dist/${this.options.filename}`,$.html())
    })
  }
}

module.exports = HtmlPlugin
const {marked} = require('marked')

module.exports = source => {
  // return `export default ${JSON.stringify(source)}`
  const html = marked(source)
  return html
}
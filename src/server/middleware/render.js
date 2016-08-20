
const {use} = require('@jcblw/mimas')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const path = require('path')
const layout = (content, {component, props}) => `
  <!doctype html>
  <title>Hello World</title>
  <meta charset='utf-8' />
  <body>
    <div id='app'>
      ${content}
    </div>
    <script src='/components/${component}'></script>
    <script>
      var React = require('react')
      var ReactDOM = require('react-dom')
      var Root = require('root')

      ReactDOM.render(
        React.createElement(Root, ${JSON.stringify(props)}),
        document.getElementById('app')
      )
    </script>
  </body>
`
const componentPath = path.resolve(process.cwd(), './lib/components')

const renderHTML = (req, res) => (component, props = {}, options = {}) => {
  const Component = require(path.resolve(componentPath, component))
  const content = ReactDOMServer.renderToStaticMarkup(
    React.createElement(Component, props)
  )
  const html = layout(content, {component, props})
  res.end(html)
}

use((req, res, next) => {
  res.render = renderHTML(req, res)
  next()
})

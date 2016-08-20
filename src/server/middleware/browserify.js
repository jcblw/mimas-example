
const {use} = require('@jcblw/mimas')
const path = require('path')
const browserify = require('browserify-middleware')
const assetPath = path.resolve(process.cwd(), './lib')

use('/components', (req, res, next) => {
  req.path = req._parsedUrl.path // to be more like express
  const rootPath = path.resolve(process.cwd(), `./lib${req.path}`)
  browserify(
    [
      'react',
      'react-dom',
      {[rootPath]: {expose: 'root'}}
    ],
    assetPath
  )(req, res, next)
})

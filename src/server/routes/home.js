const {get} = require('@jcblw/mimas')

get('/', (req, res) => {
  res.render('./Home.js', {label: 'Hello World'})
})

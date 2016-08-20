const {get} = require('@jcblw/mimas')

get('/new', (req, res) => {
  res.render('./New.js', {label: 'Hello New'})
})

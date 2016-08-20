
const React = require('react')
const {PropTypes, Component} = React
const propTypes = {
  label: PropTypes.string
}

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  render () {
    const {label} = this.props
    const {count} = this.state
    return (
      <div
        className='hello-world'
        onClick={() => {
          this.setState({count: count + 1})
        }}
      >
        {label} ({count})
      </div>
    )
  }
}

Home.propTypes = propTypes

module.exports = Home

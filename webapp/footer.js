import React, { Component } from 'react'
import Styles from './styles.js'

class Footer extends Component {
  render () {
    const { users } = this.props

    return (
      <footer id='footer' style={Styles.footer}>
        ...
      </footer>
    )
  }
}

export default Footer

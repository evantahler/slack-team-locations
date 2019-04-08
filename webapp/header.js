import React, { Component } from 'react'
import Styles from './styles.js'

class Header extends Component {
  render () {
    const { users, timeRemaining } = this.props
    const timeRemainingSeconds = Math.round(timeRemaining / 1000)

    return (
      <header id='header' style={Styles.header}>
        <p>loaded {users.length} users for team.  Checking in {timeRemainingSeconds} seconds</p>
      </header>
    )
  }
}

export default Header

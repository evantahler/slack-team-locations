import React, { Component } from 'react'
import Styles from './styles.js'

class User extends Component {
  render () {
    const { user } = this.props

    return (
      <div style={Styles.user}>
        <img src={user.image} style={Styles.userImage} title={`@${user.name}`} />
      </div>
    )
  }
}

export default User

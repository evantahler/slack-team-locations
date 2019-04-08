import React, { Component } from 'react'
import User from './user.js'
import Styles from './styles.js'

class Footer extends Component {
  render () {
    const { users } = this.props

    return (
      <footer id='footer' style={Styles.footer}>
        <p>Lost people</p>
        {
          users.map((user) => {
            return user.lat && user.lng ? null : <User key={`user-${user.id}`} user={user} />
          })
        }
      </footer>
    )
  }
}

export default Footer

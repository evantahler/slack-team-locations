import React, { Component } from 'react'
import Styles from './styles.js'

class User extends Component {
  render () {
    const { user, offsetImage } = this.props
    let style = Styles.userImage
    if (offsetImage) { style = Object.assign({}, style, Styles.userImageCentering) }

    return (
      <div style={Styles.user}>
        <img src={user.image} style={style} title={`@${user.name}`} />
      </div>
    )
  }
}

export default User

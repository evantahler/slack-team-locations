import React, { Component } from 'react'
import Styles from './styles.js'

class Map extends Component {
  render () {
    const { users } = this.props

    return (
      <div id='map' style={Styles.map}>
        ...
      </div>
    )
  }
}

export default Map

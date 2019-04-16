import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import User from './user.js'
import Styles from './styles.js'

class Map extends Component {
  constructor (props) {
    super(props)

    this.state = {
      center: {
        lat: 0,
        lng: 0
      },
      zoom: 11
    }
  }

  onMapLoaded (map, maps) {
    const { users } = this.props
    let bounds = new maps.LatLngBounds()

    for (let i in users) {
      let user = users[i]
      if (!user.lat || !user.lng) { continue }
      bounds.extend({ lat: user.lat, lng: user.lng })
    }

    map.fitBounds(bounds)
  }

  render () {
    const { users } = this.props
    const { center, zoom } = this.state

    return (
      <div id='map' style={Styles.map}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.onMapLoaded(map, maps)}
        >
          {
            users.map((user) => {
              return user.lat && user.lng
                ? <User
                  key={`user-${user.id}`}
                  user={user}
                  lat={user.lat}
                  lng={user.lng}
                  offsetImage
                />
                : null
            })
          }
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map

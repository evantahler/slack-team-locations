import 'babel-polyfill'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Styles from './styles.js'

import Header from './header.js'
import Footer from './footer.js'
import Map from './map.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      users: [],
      timer: null,
      renderTimer: null,
      sleep: 1000 * 30,
      lastFetch: null,
      timeRemaining: null
    }
  }

  async componentDidMount () {
    const { sleep } = this.state

    await this.fetchUsers()

    const timer = setInterval(async () => {
      await this.fetchUsers()
    }, sleep)

    const renderTimer = setInterval(() => {
      const { sleep, lastFetch } = this.state
      const now = (new Date()).getTime()
      const timeRemaining = (sleep - (now - lastFetch))
      this.setState({ timeRemaining })
    }, 1000)

    this.setState({ timer, renderTimer })
  }

  componentWillUnmount () {
    const { timer, renderTimer } = this.state

    clearInterval(timer)
    clearInterval(renderTimer)
  }

  async fetchUsers () {
    const response = await fetch('/api/team').then((response) => { return response.json() })
    if (response.error) { return window.alert(response.error) }
    const lastFetch = (new Date()).getTime()
    this.setState({ users: response.users, lastFetch })
  }

  render () {
    const { users, timeRemaining } = this.state

    return (
      <div id='appContainer' style={Styles.app}>
        <Header users={users} timeRemaining={timeRemaining} />
        <Map users={users} />
        <Footer users={users} />
      </div>
    )
  }
}

const appContainer = document.getElementById('app')
ReactDOM.render(<App />, appContainer)

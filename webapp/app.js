import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { liked: false }
  }

  render () {
    if (this.state.liked) {
      return 'You liked this.'
    }

    return (
      <button onClick={() => this.setState({ liked: true })}>
        Like
      </button>
    )
  }
}

let appContainer = document.getElementById('app')
ReactDOM.render(<App />, appContainer)

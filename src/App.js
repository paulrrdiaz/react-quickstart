import React, { Component } from 'react'
import './styles/index.scss'
import Counter from './containers/Counter'

export default class App extends Component {
  state = {
    message: 'Message'
  }

  handleToggleMessage = (message) => {
    this.setState({ message })
  }

  render() {
    return (
      <div>
        <div>
          <Counter />
        </div>
      </div>
    )
  }
}
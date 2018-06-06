import React, { Component } from 'react'
import styles from './App.css'

export default class App extends Component {
  state = {
    message: 'Message'
  }

  handleToggleMessage = (message) => {
    this.setState({ message })
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.container}>
          <h1>{this.state.message}</h1>
          <button 
            className={styles.buttonSuccess} 
            onClick={() => this.handleToggleMessage('Hello World!!! :D')}>Hello</button>
          <button 
            className={styles.buttonPrimary} 
            onClick={() => this.handleToggleMessage('Bye World!!! :(')}>Bye</button>
        </div>
      </div>
    )
  }
}
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'
import Button from '../components/button'

class Counter extends Component {
  render() {
    const { counter, increment, decrement } = this.props
    return (
      <div>
        <h1>{counter}</h1>
        <Button primary handleClick={increment}>Increment</Button>
        <Button error handleClick={decrement}>Decrement</Button>
        <Button>Do nothing</Button>
      </div>
    )
  }
}

const mapStateToProps = ({ counter }) => {
  return {
    counter,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ increment, decrement }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
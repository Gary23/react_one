import React, { Component } from 'react'
import Hello from './components/hello'
import Wellcome from './components/wellcome'
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Wellcome />
      </div>
    )
  }
}
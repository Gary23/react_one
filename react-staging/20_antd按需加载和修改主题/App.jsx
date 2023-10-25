import React, { Component } from 'react'
import { Button } from 'antd'
import './App.css'

export default class App extends Component {

  updateState = (data) => {
    this.setState(data)
  }
  render() {
    return (
      <div>
        <Button type="primary">antd按钮</Button>
      </div>
    )
  }
}
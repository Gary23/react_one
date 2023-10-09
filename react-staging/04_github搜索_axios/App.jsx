import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
import './App.css'

export default class App extends Component {
  state = {
    users: [],
    loadingFlag: false,
    firstFlag: true,
    errorState: false,
    errorMessage: ''
  }
  updateState = (data) => {
    this.setState(data)
  }
  render() {
    return (
      <div>
        <Search updateState={this.updateState}></Search>
        <List { ...this.state }></List>
      </div>
    )
  }
}
import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
import './App.css'

export default class App extends Component {

  updateState = (data) => {
    this.setState(data)
  }
  render() {
    return (
      <div>
        <Search />
        <List />
      </div>
    )
  }
}
import React, { Component } from 'react'
import { Link, BrowserRouter, Route } from 'react-router-dom'
import About from './components/about'
import Home from './components/home'
import './App.css'

export default class App extends Component {

  updateState = (data) => {
    this.setState(data)
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div class="row">
            <div class="col-xs-offset-2 col-xs-8">
              <div class="page-header"><h2>React Router Demo</h2></div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
              <div class="list-group">
                <Link className="list-group-item" to="/about">About</Link>
                <Link className="list-group-item" to="/home">Home</Link>
              </div>
            </div>
            <Route 
              path="/about"
              component={About}
            />
            <Route 
              path="/home"
              component={Home}
            />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
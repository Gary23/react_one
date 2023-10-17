import React, { Component } from 'react'
import { NavLink, BrowserRouter, Route } from 'react-router-dom'
import About from './pages/about'
import Home from './pages/home'
import './App.css'

export default class App extends Component {

  updateState = (data) => {
    this.setState(data)
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header"><h2>React Router Demo</h2></div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                <NavLink activeClassName="active" className="list-group-item" to="/about">About</NavLink>
                <NavLink activeClassName="active" className="list-group-item" to="/home">Home</NavLink>
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
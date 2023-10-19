import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import About from './pages/about'
import Home from './pages/home'
import MyNavLink from './components/MyNavLink'
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
                {/* 可以匹配到 /about 路由组件 */}
                {/* <MyNavLink className="list-group-item" to="/about/a/b">About</MyNavLink> */}
                {/* 不能匹配到 /about 路由组件 */}
                {/* <MyNavLink className="list-group-item" to="/a/b/about">About</MyNavLink> */}
                <MyNavLink className="list-group-item" to="/about">About</MyNavLink>
                <MyNavLink className="list-group-item" to="/home">Home</MyNavLink>
              </div>
            </div>
            {/* 匹配不到 /about */}
            {/* <Route 
              path="/about/a/b"
              component={About}
            /> */}
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
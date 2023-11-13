import React, { Component, lazy, Suspense } from 'react'
import { Link, BrowserRouter, Route } from 'react-router-dom'
import Load from './loading'
const About = lazy(() => import('./pages/about'))
const Home = lazy(() => import('./pages/home'))

export default class LazyLoad extends Component {
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
                <Link className="list-group-item" to="/about">About</Link>
                <Link className="list-group-item" to="/home">Home</Link>
              </div>
            </div>
            <Suspense failback={<Load />}>
              <Route 
                path="/about"
                component={About}
              />
              <Route 
                path="/home"
                component={Home}
              />
            </Suspense>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
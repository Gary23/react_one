import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import Message from './message'
import News from './news'
export default class Home extends Component{
  render() {
    return (
      <div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
            <h2>Home组件内容</h2>
              <div>
                <ul className="nav nav-tabs">
                  <li>
                    <MyNavLink className="list-group-item" to="/home/news">News</MyNavLink>
                  </li>
                  <li>
                    <MyNavLink className="list-group-item" to="/home/message">Message</MyNavLink>
                  </li>
                </ul>
                <Route path="/home/news" component={News} />
                <Route path="/home/message" component={Message} />
                <Redirect to="/home/news" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
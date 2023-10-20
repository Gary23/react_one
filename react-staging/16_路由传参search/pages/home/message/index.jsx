import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MyNavLink from '../../../components/MyNavLink'
import Detail from './detail'

export default class Message extends Component {
  state = {
    list: [
      {
        id: '001',
        title: '001消息的标题'
      },
      {
        id: '002',
        title: '002消息的标题'
      },
      {
        id: '003',
        title: '003消息的标题'
      },
    ]
  }
  render() {
    return (
      <div>
        <div>
          <ul>
            {
              this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    <MyNavLink to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{ item.title }</MyNavLink>&nbsp;&nbsp;
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div>
          <Route path="/home/message/detail" component={Detail} />
        </div>
      </div>
    )
  }
}

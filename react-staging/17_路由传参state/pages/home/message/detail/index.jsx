import React, { Component } from 'react'
import qs from 'querystring'


export default class Detail extends Component {
  state = {
    detail: [
      {
        id: '001',
        content: '消息001的内容0001'
      },
      {
        id: '002',
        content: '消息002的内容0002'
      },
      {
        id: '003',
        content: '消息003的内容0003'
      },
    ]
  }
  render() {
    // const { id, title } = this.props.history.params
    console.log(this.props)
    const { id, title } = this.props.location.state
    return (
      <div>
        <div>id: {id}</div>
        <div>title: {title}</div>
        {
          this.state.detail.map(item => {
            console.log(id)
            if (item.id === id) {
              return (
                <div key={item.id}>content: {item.content}</div>
              )
            }
          })
        }
      </div>
    )
  }
}

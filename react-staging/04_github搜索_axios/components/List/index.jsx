import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const { users, firstFlag, loadingFlag, errorState, errorMessage } = this.props

    return (
      <div className="row">
        {
          firstFlag ? <div>欢迎使用，输入关键字，随后点击搜索</div> 
          :
          loadingFlag ? <div>加载中......</div>
          :
          errorState ? <div>{ errorMessage }</div>
          :
          users.map(item => {
            return  (
              <div className="card" key={item.id}>
                <a href={item.html_url} target="_blank" rel="noreferrer">
                  <img src={item.avatar_url} style={{width: '100px'}} alt=""/>
                </a>
                <p className="card-text">{ item.login }</p>
              </div>
            )
          })
        }

      </div>
    )
  }
}
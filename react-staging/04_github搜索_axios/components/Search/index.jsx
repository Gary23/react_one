import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  searchEvent = () => {
    const { updateState } = this.props
    updateState({ errorState: false, users: [], firstFlag: false, loadingFlag: true })
    // 获取搜索内容
    const { value } = this.searchInput
    console.log(value)
    // 发送网络请求
    axios.get(`http://localhost:3000/api/search/users?q=${value}`).then(res => {
      console.log('response', res)
      updateState({ errorState: false, users: res.data.items, firstFlag: false, loadingFlag: false })
    }).catch(err => {
      console.log('error', err.message)
      updateState({ errorState: true, errorMessage: err.message, firstFlag: false, loadingFlag: false })
    })
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <input ref={ c => this.searchInput = c } type="text" placeholder="输入关键词点击搜索"/>&nbsp;<button onClick={ this.searchEvent }>搜索</button>
      </section>
    )
  }
}
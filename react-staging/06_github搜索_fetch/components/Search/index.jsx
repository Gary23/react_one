import React, { Component } from 'react'
import SubPub from 'pubsub-js'

export default class Search extends Component {
  searchEvent = async () => {
    SubPub.publish('updateList', { errorState: false, users: [], firstFlag: false, loadingFlag: true })
    // 获取搜索内容
    const { value } = this.searchInput
    console.log(value)
    
    /**
     * promise链
      第一个 .then 中 第一个回调是resolve   第二个回调是reject   
      第二个 .then 中 可以拿到第一个then的return  如果没有return  则第二个then获取到的是undefined

      中断promise链
      可以在.then的reject回调中  return new Promise(() => {})  就不会继续执行后面的.then了
      但是用catch兜底是更好的方案，用catch兜底的话，就不需要再then里写reject的回调了，有错误，就会进入到兜底的catch
     * 
     */

    // promise链式调用
    // fetch(`http://localhost:3000/api/search/users?q=${value}`).then(res => {
    //   console.log('response', res)
    //   return res.json()
    // }, err => {
    //   console.log('error', err.message)
    //   SubPub.publish('updateList', { errorState: true, errorMessage: err.message, firstFlag: false, loadingFlag: false })
    //   return new Promise(() => {})
    // }).then(data => {
    //   console.log('data', data)
    //   SubPub.publish('updateList', { errorState: false, users: data.items, firstFlag: false, loadingFlag: false })
    // })

    // promise链式调用  catch兜底
    // fetch(`http://localhost:3000/api/search/users?q=${value}`).then(res => {
    //   console.log('response', res)
    //   return res.json()
    // }).then(data => {
    //   SubPub.publish('updateList', { errorState: false, users: data.items, firstFlag: false, loadingFlag: false })
    // }).catch(err => {
    //   console.log('error', err.message)
    //   SubPub.publish('updateList', { errorState: true, errorMessage: err.message, firstFlag: false, loadingFlag: false })
    // })

    // async await方式
    try {
      const response = await fetch(`http://localhost:3000/api/search/users?q=${value}`)
      const data = await response.json()
      SubPub.publish('updateList', { errorState: false, users: data.items, firstFlag: false, loadingFlag: false })
    } catch (err) {
      console.log('error', err.message)
      SubPub.publish('updateList', { errorState: true, errorMessage: err.message, firstFlag: false, loadingFlag: false })
    }
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
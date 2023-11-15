import React, { Component, Fragment } from 'react'
import Child from './Child'

export default class Parent extends Component {
  state = {
    hasError: false,
    list: ''
  }
  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError', error)
    return {
      hasError: true
    }
  }
  componentDidCatch(e) {
    console.log('记录错误次数')
  }
  render() {
    console.log('parent--render')
    return (
      <div>
      {
        this.state.hasError ? <p>有错误</p> :
        <Fragment>
          <h4>Parent组件</h4>
          <Child list={ this.state.list } />
        </Fragment>
      }
      </div>
    )
  }
}

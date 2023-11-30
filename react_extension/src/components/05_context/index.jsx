import React, { Component, createContext, useContext } from 'react'
import './index.css'
const MyContext = createContext()

class Parent extends Component {
  state = {
    username: 'tom',
  }
  render() {
    return (
      <div className="parent">
        <h4>parent组件</h4>
        <p>username: { this.state.username }</p>
        <MyContext.Provider value={this.state}>
          <Child />
        </MyContext.Provider>
      </div>
    )
  }
}
class Child extends Component {
  // 没有注入，获取不到context
  render() {
    return (
      <div className="child">
        <h4>child组件</h4>
        <p>username: { this.context.username }</p>
        {/* <Grand username={this.props.username} /> */}
        <Grand />
      </div>
    )
  }
}
class Grand extends Component {
  // 在组件中注入context
  static contextType = MyContext
  render() {
    return (
      <div className="grand">
        <h4>Grand组件</h4>
        <p>username: { this.context.username }</p>
        <GrandFunction />
        <GrandHook />
      </div>
    )
  }
}
// 函数式组件的处理方式  MyContext.Consumer
function GrandFunction() {
  return (
    <MyContext.Consumer>
      {
        value => {
          return (
            <div className="grand-func">
            <h4>函数式Grand组件</h4>
            <p>username: { value.username }</p>
          </div>
          )
        }
      }
    </MyContext.Consumer>
  )
}
// 函数式组件使用 useContext hook
function GrandHook() {
  const value = useContext(MyContext)
  return (
    <div className="grand-func">
      <h4>函数式Grand组件，使用hook的方式</h4>
      <p>username: { value.username }</p>
    </div>
  )
}

export default Parent
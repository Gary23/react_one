import React, { Component } from 'react'
import './index.css'
export default class Parent extends Component {
  state = {
    name: ''
  }
  render() {
    return (
      <div className='parent'>
        <h4>Parent组件</h4>
        <A render={ name => <B name={name}/> }>
          <p>Parent传给A组件的标签体内容</p>
        </A>
      </div>
    )
  }
}

class A extends Component {
  state = { name: 'tom' }
  render() {
    return (
      <div className="a">
        <div>A组件</div>
        { 
          this.props.children 
        }
        {
          this.props.render(this.state.name)
        }
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className="b">
        <div>B组件</div>
        <div>{ this.props.name }</div>
      </div>
    )
  }
}
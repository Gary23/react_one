import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    console.log('child--render', this.props)
    return (
      <div>
        <h4>Child组件</h4>
        { this.props.list.map((item, index) => {
          return (
            <div key={index}> 
              { item.name }
            </div>
          )
        }) }
      </div>
    )
  }
}

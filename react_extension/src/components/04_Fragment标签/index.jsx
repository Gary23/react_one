import React, { Component, Fragment } from 'react'

// 使用场景2
class Parent extends Component {
  state = {
    list: [{
      id: '001',
      name: 'tom',
    }, {
      id: '002',
      name: 'jack',
    }]
  }
  render() {
    return (
      <div type="parent">
        <h2>Parent 组件</h2>
        {
          this.state.list.map((item) => {
            return <Fragment key={item.id}>
              <p>{item.name}</p>
            </Fragment>
          })
        }
        <Child />
      </div>
    )
  }
}
// 使用场景1
class Child extends Component {
  render() {
    return (
      <Fragment>
        <h2>Child 组件</h2>
      </Fragment>
    )
  }
}


export default Parent
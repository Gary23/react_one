import React, { Component } from 'react'

export default class Count extends Component {
  state = { count: 0 }
  addCount = () => {
    // 对象式setState写法
    // const { count } = this.state
    // const { value } = this.selectRef
    // console.log('this.setState调用', this.state.count);
    // this.setState({ count: count + value * 1 }, () => {
    //   console.log('this.setState的回调函数', this.state.count);
    // })
    // console.log('this.setState调用后', this.state.count);

    // 函数式setState写法
    const { value } = this.selectRef
    console.log('this.setState调用', this.state.count);
    this.setState((state, props) => {
      console.log(state, props);
      return { count: state.count + value * 1 }
    }, () => {
      console.log('this.setState的回调函数', this.state.count);
    })
    console.log('this.setState调用后', this.state.count);
  }
  render() {
    return (
      <div>
        <h2>求和: { this.state.count }</h2>
        <select name="count" id="count" ref={selectRef => this.selectRef = selectRef}>
          <option value="1">1</option>
        </select>
        &nbsp;&nbsp;
        <button onClick={this.addCount}>加</button>
      </div>
    )
  }
}

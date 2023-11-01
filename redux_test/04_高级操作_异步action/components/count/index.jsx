import React, { Component } from 'react'
import store from '../../redux/store'
import { addAction, decreaseAction, addAsyncAction } from '../../redux/count_action'

export default class Count extends Component {
  // state = {
  //   count: 0
  // }
  add = () => {
    const { value } = this.countSelect
    store.dispatch(addAction(value * 1))
    // this.setState({count: this.state.count + value * 1})
  }
  decrease = () => {
    const { value } = this.countSelect
    store.dispatch(decreaseAction(value * 1))
    // this.setState({count: this.state.count - value * 1})
  }
  oddAdd = () => {
    const { value } = this.countSelect
    const count = store.getState()
    if (count % 2 !== 0) {
      // this.setState({count: this.state.count + value * 1})
      store.dispatch(addAction(value * 1))
    }
  }
  asyncAdd = () => {
    const { value } = this.countSelect
    // setTimeout(() => {
    store.dispatch(addAsyncAction(value * 1))
      // this.setState({count: this.state.count + value * 1})
    // }, 500)
  }
  render() {
    return (
      <div>
        <h1>Current Sum: { store.getState() }</h1>
        <select name="countSelect" ref={ c => this.countSelect = c }>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;&nbsp;
        <button onClick={ this.add }> + </button>
        &nbsp;&nbsp;
        <button onClick={ this.decrease }> - </button>
        &nbsp;&nbsp;
        <button onClick={ this.oddAdd }> 和为奇数加 </button>
        &nbsp;&nbsp;
        <button onClick={ this.asyncAdd }> 异步加 </button>
      </div>
    )
  }
}

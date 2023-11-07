import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addAction, addAsyncAction, decreaseAction } from '../../redux/count_action'

class CountUI extends Component {

  add = () => {
    const { value } = this.countSelect
    this.props.jia(value * 1)
  }
  decrease = () => {
    const { value } = this.countSelect
    this.props.jian(value * 1)
  }
  oddAdd = () => {
    const { value } = this.countSelect
    const { count } = this.props
    if (count % 2 !== 0) {
      this.props.jia(value * 1)
    }
  }
  asyncAdd = () => {
    const { value } = this.countSelect
    this.props.jiaAsync(value * 1)
  }
  render() {
    console.log('this.props', this.props);
    return (
      <div>
        <h1>Current Sum: { this.props.count }</h1>
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

export default connect(
  // mapStateTpProps
  state => ({ count: state }),
  // mapDispatchToProps 可以返回一个函数，也可以直接返回一个对象
  // dispatch => ({
  //   jia: number => dispatch(addAction(number)),
  //   jian: number => dispatch(decreaseAction(number)),
  //   jiaAsync: number => dispatch(addAsyncAction(number)),
  // })
  {
    jia: addAction,
    jian: decreaseAction,
    jiaAsync: addAsyncAction,
  }
)(CountUI)
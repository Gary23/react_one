import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Footer extends Component {
  static propTypes = {
    checkAllTodo: PropTypes.func.isRequired,
    clearAllDone: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
  }
  onChangeHandle = (e) => {
    this.props.checkAllTodo && this.props.checkAllTodo(e.target.checked);
  }
  render() {
    const { todos } = this.props
    const allLength = todos.length
    const selectLength = todos.reduce((pre, item) => pre + ( item.done ? 1 : 0 ), 0)
    return (
      <div className="todo-footer">
        <div className="left">
          <input type="checkbox" checked={ selectLength === allLength && allLength !== 0 } disabled={ allLength === 0 } onChange={ this.onChangeHandle } />
          <p>已完成{ selectLength } / 全部{ allLength }</p>
        </div>
        <div className="right">
          <button className="delete-btn" onClick={ this.props.clearAllDone }>删除已完成任务</button>
        </div>
      </div>
    )
  }
}
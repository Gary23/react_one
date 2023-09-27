import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component {
  static propTypes = {
    deleteTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }
  state = {
    mouseFlag: false
  }
  onMouseHandle = (flag) => {
    return () => {
      this.setState({mouseFlag: flag})
    }
  }
  deleteHandle = (id) => {
    return () => {
      this.props.deleteTodo && this.props.deleteTodo(id)
    }
  }
  checkboxChnage = (id) => {
    return (e) => {
      const { checked } = e.target
      this.props.updateTodo && this.props.updateTodo(checked, id)
    }
  }
  render() {
    const { id, name, done } = this.props
    const { mouseFlag } = this.state
    return (
      <div className="todo-item" style={{ background: mouseFlag ? '#ccc' : '#fff' }} onMouseEnter={this.onMouseHandle(true)} onMouseLeave={this.onMouseHandle(false)} >
        <div className="left">
          <input type="checkbox" checked={done} onChange={this.checkboxChnage(id)} />
          <p>{ name }</p>
        </div>
        <div className="right" style={{ display: mouseFlag ? 'inline-block' : 'none' }}>
          <button className="delete-btn" onClick={this.deleteHandle(id)}>删除</button>
        </div>
      </div>
    )
  }
}
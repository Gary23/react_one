import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../item'
import './index.css'

export default class List extends Component {
  static propTypes = {
    deleteTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
  }
  render() {
    const { todos } = this.props
    return (
      <div className="todo-list">
        {
          todos.map(item => {
            return <Item key={item.id} {...item} deleteTodo={ this.props.deleteTodo } updateTodo={ this.props.updateTodo } />
          })
        }
      </div>
    )
  }
}
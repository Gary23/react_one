import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }
  onKeyUpHandle = (e) => {
    console.log(e)
    const { keyCode, target } = e
    if (keyCode !== 13) {
      return
    }
    if (target.value === '') {
      return
    }
    this.props.addTodo && this.props.addTodo({
      id: nanoid(),
      name: target.value,
      done: false
    })
    target.value = ''
  }
  render() {
    return (
      <div className="todo-header">
        <div>
          <input type="text" onKeyUp={this.onKeyUpHandle} />
        </div>
      </div>
    )
  }
}
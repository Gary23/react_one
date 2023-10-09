import React, { Component } from 'react'
import Footer from './components/footer'
import Header from './components/header'
import List from './components/list'
import './App.css'

export default class App extends Component {
  state = {
    todos: []
  }
  // header组件的回车添加事件
  addTodo = (data) => {
    const { todos } = this.state
    this.setState({
      todos: [data, ...todos]
    })
  }
  // item组件的删除事件
  deleteTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter(item => item.id !== id)
    this.setState({
      todos: newTodos
    })
  }
  // item组件的选中/取消事件
  updateTodo = (done, id) => {
    console.log('updateTodo----------', done, id)
    const { todos } = this.state
    const newTodos = todos.map(item => {
      if (item.id === id) return {...item, done}
      else return item
    })
    this.setState({
      todos: newTodos
    })
  }
  // footer组件的全选/全不选事件
  checkAllTodo = (done) => {
    const { todos } = this.state
    const newTodos = todos.map(item => { return {...item, done} })
    this.setState({
      todos: newTodos
    })
  }
  // footer组件的删除已选中项目
  clearAllDone = () => {
    const { todos } = this.state
    const newTodos = todos.filter(item => { return item.done === false })
    this.setState({
      todos: newTodos
    })
  }
  render() {
    return (
      <div className="todo-wrap">
        <Header addTodo={this.addTodo} />
        <List todos={this.state.todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo} />
        <Footer todos={this.state.todos} clearAllDone={this.clearAllDone} checkAllTodo={this.checkAllTodo}/>
      </div>
    )
  }
}
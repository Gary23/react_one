/**
 * 引入react  import React,{Component} from 'react'   
 * React,{Component} 是因为react输出了多个对象，而不是对react的解构赋值
 * 
 * 创建并暴露App类组件，引入Hello组件
 * 
 * 创建components目录  创建Hello组件，还是引入react那一套，html结构：div hello,react   创建Hello.css  随便写一写样式，在Hello.js中引入  
 * 
 * 和Hello一样再创建一个Welcome组件
 * 
 * 样式模块化  xxxx.module.css  import hello from 'xxxx.module.css'    className="hello.title"
 * 
 * react插件
 * 
 */
import React, { Component } from 'react'
import Hello from './components/hello'
import Wellcome from './components/wellcome'
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Wellcome />
      </div>
    )
  }
}
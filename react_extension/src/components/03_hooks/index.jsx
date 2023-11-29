import React from 'react'
import ReactDOM from 'react-dom'

// 类式组件
// class Count extends React.Component {
//   state = {
//     count: 0
//   }
//   inputRef = React.createRef()
//   addCount = () => {
//     this.setState(state => ({ count: state.count + 1 }))
//   }
//   unmountCount = () => {
//     ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//   }
//   show = () => {
//     alert(this.inputRef.current.value)
//   }
//   componentDidMount() {
//     this.timer = setInterval(() => {
//       console.log('定时器执行了')
//       this.setState(state => ({ count: state.count + 1 }))
//     }, 1000)
//   }
//   componentWillUnmount() {
//     clearInterval(this.timer)
//   }
//   render() {
//     return (
//       <div>
//         <h2>求和：{ this.state.count }</h2>
//         <input type="text" ref={this.inputRef} />
//         <button onClick={this.addCount}>加1</button>
//         <button onClick={this.unmountCount}>卸载组件</button>
//         <button onClick={this.show}>弹出提示</button>
//       </div>
//     )
//   }
// }

// 函数式组件
function Count() {
  const  { useState, useEffect, useRef } = React
  const [ count, setCount ] = useState(0)
  const inputRef = useRef()

  function addCount() {
    setCount(count + 1)
  }

  function unmountCount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  function show() {
    console.dir(inputRef.current)
    alert(inputRef.current.value)
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      console.log('定时器执行了')
      setCount(count => count + 1)
    }, 1000)
    return () => {
      window.clearInterval(timer)
    }
  }, [])

  return (
    <div>
      <h2>求和: { count }</h2>
      <input type="text" ref={inputRef} />
      <button onClick={addCount}>加1</button>
      <button onClick={unmountCount}>卸载组件</button>
      <button onClick={show}>弹出提示</button>
    </div>
  )
}

export default Count

import React from 'react'
import './index.css'
// 手动添加shouldComponentUpdate的方式处理render的问题
// class Parent extends React.Component {
//   state = {
//     carName: '奔驰c63'
//   }
//   changeCar = () => {
//     this.setState({ carName: '迈巴赫' })
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log(nextProps, nextState);
//     return nextState.carName !== this.state.carName
//   }
//   render() {
//     console.log('parent--render')
//     return (
//       <div className='parent'>
//         <p>carName: { this.state.carName }</p>
//         <button onClick={ this.changeCar }>换车</button>
//         <br />
//         <br />
//         <Child />
//       </div>
//     )
//   }
// }

// class Child extends React.Component {
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log(nextProps, nextState);
//     return nextProps.carName !== this.props.carName
//   }
//   render() {
//     console.log('child--render')
//     return (
//       <div className='child'>
//         <p>carName: { this.props.carName }</p>
//       </div>
//     )
//   }
// }

// PureComponents的方式处理render的问题
class Parent extends React.PureComponent {
  state = {
    carName: '奔驰c63'
  }
  changeCar = () => {
    this.setState({ carName: '迈巴赫' })
  }
  render() {
    console.log('parent--render')
    return (
      <div className='parent'>
        <p>carName: { this.state.carName }</p>
        <button onClick={ this.changeCar }>换车</button>
        <br />
        <br />
        <Child />
      </div>
    )
  }
}

class Child extends React.PureComponent {
  render() {
    console.log('child--render')
    return (
      <div className='child'>
        <p>carName: { this.props.carName }</p>
      </div>
    )
  }
}

export default Parent
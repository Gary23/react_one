import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
  next = () => {
    this.props.history.goForward()
  }
  back = () => {
    this.props.history.goBack()
  }
  render() {
    return (
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header"><h2>React Router Demo</h2></div>
          <button onClick={this.next}>下一步</button>
          <button onClick={this.back}>上一步</button>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
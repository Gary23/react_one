import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class MyNavLink extends Component {
  render() {
    console.log(' props ',this.props)
    return (
      <NavLink activeClassName="active" { ...this.props }></NavLink>
    )
  }
}

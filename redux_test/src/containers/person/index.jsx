import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { addPersonAction } from '../../redux/actions/person.js'

class PersonUI extends Component {
  addPerson = () => {
    const { value: name } = this.nodeName
    const { value:age } = this.nodeAge
    this.props.addPerson({ id: nanoid(), name, age })
  }

  render() {
    console.log('this.props', this.props);
    return (
      <div>
        <h1>person组件</h1>
        <input type="text" ref={node => this.nodeName = node} />
        &nbsp;&nbsp;
        <input type="text" ref={node => this.nodeAge = node} />
        &nbsp;&nbsp;
        <button onClick={ this.addPerson }>增加</button>
        <ul>
          {
            this.props.personList.map((person, index) => {
              return (
                <li key={ person.id }>
                  { person.name } --- { person.age }
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({ personList: state.personList }),
  {
    addPerson: addPersonAction
  }
)(PersonUI)
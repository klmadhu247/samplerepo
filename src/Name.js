import React, { Component } from 'react'

class Name extends Component {
  render() {
    return (
      <div>Name {this.props.name} age is {this.props.age}</div>
    )
  }
}

export default Name

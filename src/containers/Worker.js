import React, { Component } from 'react';
import LoginForm from '../components/LoginForm'

export default class Worker extends Component {

  constructor() {
    super()
    this.state = {
      loggedIn: false,
      name: null,
      dept: null
    }
  }

  handleEmployerLoginSubmit = () => {
    console.log("change this to make request to backend")
    this.setState({
      loggedIn: true
    })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.loggedIn ? "you are logged in" : <LoginForm handleLoginSubmit={this.handleEmployerLoginSubmit} />}
      </React.Fragment>
    )
  }
}

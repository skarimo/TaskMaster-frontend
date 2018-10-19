import React, { Component } from 'react';
import LoginForm from '../components/LoginForm'


export default class Employer extends Component {

    constructor() {
      super()
      this.state = {
        loggedIn: false,
        username: null,
        name: null,
        dept: null
      }
    }

    handleEmployerLoginSubmit = () => {
      console.log("logging-in")
      this.setState({
        loggedIn: true
      })
    }

    render() {
      return (
        <React.Fragment>
          {this.state.loggedIn ? "you are logged into Employer" : <LoginForm handleLoginSubmit={this.handleEmployerLoginSubmit}/>}
        </React.Fragment>
      )
    }
  }

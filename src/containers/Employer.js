import React, { Component } from 'react';
import LoginForm from '../components/LoginForm'
import EmployerSignUp from '../components/employer/EmployerSignUp'
import EmployerHomePage from '../components/EmployerHomePage'

import { BrowserRouter, Redirect, Route, Link, Switch } from 'react-router-dom'


export default class Employer extends Component {

    constructor() {
      super()
      this.state = {
        loggedIn: false,
        employerObj: {}
      }
    }

    handleEmployerLoginSubmit = (empLogin) => {
      this.props.adapter.loginEmployer(empLogin)
      .then((employerObj) => {
        this.setState({
          loggedIn: true,
          employerObj
        })
      })
    }


    handleSignUp = (state) => {
      this.props.adapter.createEmployer(state)
      .then((employerObj) => {
        if (employerObj.error == null) {
          this.setState({
            employerObj,
            loggedIn: true
          })
        } else {
          console.log("error")
        }

      })
    }

    loggedIn = () => {
      if (this.state.loggedIn) {
        return (<EmployerHomePage history={this.props.history} adapter={this.props.adapter} employerObj={this.state.employerObj}/>)
      } else {
        return (<React.Fragment> <LoginForm handleLoginSubmit={this.handleEmployerLoginSubmit} adapter={this.props.adapter} /> <Link to='/employer/signup'><button> Sign Up </button> </Link> </React.Fragment>)
      }
    }

    render() {
      return (
        <BrowserRouter>
          <Switch>
            <React.Fragment>
              <Route exact path='/employer/signup' render={() => <EmployerSignUp handleSignUp={this.handleSignUp} adapter={this.props.adapter} />  }/>
              <Route exact path='/employer' render={() => this.loggedIn()}/>
            </React.Fragment>
          </Switch>
        </BrowserRouter>
      )
    }
  }






  // {this.state.loggedIn ? "you are logged into Employer" : <LoginForm handleLoginSubmit={this.handleEmployerLoginSubmit}/>,<EmployerSignUp handleSignUp={this.handleSignUp}/>}

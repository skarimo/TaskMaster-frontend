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
        if (employerObj.error == null) {
          console.log("this is working", this.state)
          this.setState({
            loggedIn: true,
            employerObj
          })
        } else {
          console.log("error")
        }
      })
    }


    handleSignUp = (e, state) => {
      this.props.adapter.createEmployer(state)
      .then((employerObj) => {
        if (employerObj.error == null) {
          console.log("this is working", this.state)
          this.setState({
            loggedIn: true,
            employerObj
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
        return (<React.Fragment><Link to='/employer/signup'><button class='ui blue button' type="">Sign-up</button></Link>  <LoginForm handleLoginSubmit={this.handleEmployerLoginSubmit} adapter={this.props.adapter} /></React.Fragment>)
      }
    }

    render() {
      return (
        <BrowserRouter>
          <Switch>
            <React.Fragment>
              <Route exact path='/employer/signup' render={(props) => <EmployerSignUp history={props.history} handleSignUp={this.handleSignUp} adapter={this.props.adapter} />  }/>
              <Route exact path='/employer' render={() => this.loggedIn()}/>
            </React.Fragment>
          </Switch>
        </BrowserRouter>
      )
    }
  }






  // {this.state.loggedIn ? "you are logged into Employer" : <LoginForm handleLoginSubmit={this.handleEmployerLoginSubmit}/>,<EmployerSignUp handleSignUp={this.handleSignUp}/>}

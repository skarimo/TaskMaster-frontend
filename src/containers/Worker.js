import React, { Component } from 'react';
import LoginForm from '../components/LoginForm'
import WorkerHomePage from '../components/WorkerHomePage'

export default class Worker extends Component {

  constructor() {
    super()
    this.state = {
      loggedIn: false,
      workerObj: {}
    }
  }

  handleWorkerLoginSubmit = (empLogin) => {
    this.props.adapter.loginWorker(empLogin)
    .then((workerObj) => {
      this.setState({
        loggedIn: true,
        workerObj
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.loggedIn 
          ? <WorkerHomePage workerObj={this.state.workerObj} adapter={this.props.adapter}/> 
          : <LoginForm handleLoginSubmit={this.handleWorkerLoginSubmit} />}
      </React.Fragment>
    )
  }
}

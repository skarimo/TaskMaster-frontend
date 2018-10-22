import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Link } from 'react-router-dom'

import EditWorker from './worker/EditWorker'

export default class Employer extends Component {
  constructor() {
    super()
    this.state = {
      workerObj: null,
      task: null
    }
  }

  componentWillMount() {
    const workerObj = this.props.workerObj
    this.setState({ workerObj })
  }

  mainEmployerShowPage = () => {
    return (
      <div>
        <h1> Welcome {this.state.workerObj.name}</h1>
        <h3> {this.state.workerObj.email}</h3>
        <Link to='/worker/edit'> <button>Edit Worker</button> </Link>
      </div>
    )
  }

  handleEditSubmit = (workerObj) => {
    console.log("change to patch request", workerObj)
  }

  render() {
    console.log(this.state.workerObj)
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path='/worker' component={this.mainEmployerShowPage}/>
          <Route exact path='/worker/edit' render={() => < EditWorker handleEditSubmit={this.handleEditSubmit}/> } />
        </React.Fragment>
      </BrowserRouter>
    )
  }


}

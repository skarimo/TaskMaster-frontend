import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Link } from 'react-router-dom'

import EditWorker from './worker/EditWorker'
import WorkerInfo from './worker/WorkerInfo'

export default class Employer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      workerObj: null,
      task: null,
      info : null
    }
  }

  componentWillMount() {
    const workerObj = this.props.workerObj
    this.setState({ workerObj }, this.getWorkerInfo())
  }

  getWorkerInfo = () => {
    this.props.adapter.fetchWorkerInfo(this.props.workerObj.id)
      .then(res => {
        this.setState({info: res})
      })
  }

  mainEmployerShowPage = () => {
    return (
      <div>
        <h1> Welcome {this.state.workerObj.name}</h1>
        <h3> {this.state.workerObj.email}</h3>
        <Link to='/worker/edit'> <button>Edit Worker</button> </Link>
        {this.state.info && <WorkerInfo adapter={this.props.adapter} info={this.state.info}/>}
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

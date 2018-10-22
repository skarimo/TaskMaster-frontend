import React, { Component } from 'react'

export default class EditWorker extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      username: '',
      dept: '',
      email: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleEditSubmit(this.state)
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {

    return (
      <div>
        <h1>Edit Account</h1>
        <form onSubmit={this.handleSubmit}>
            <label>Name</label>
              <input onChange={this.handleOnChange} type="text" name="name" />
            <label>Department</label>
              <input onChange={this.handleOnChange} type="text" name="dept" />
            <label>E-mail</label>
              <input onChange={this.handleOnChange} type="text" name="email" />
            <label>Username</label>
              <input onChange={this.handleOnChange} type="text" name="username" />
          <label>Password</label>
            <input onChange={this.handleOnChange} type="password" name="password" />
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }



}

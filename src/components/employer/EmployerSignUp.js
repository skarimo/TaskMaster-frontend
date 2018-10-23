import React, { Component } from 'react'


export default class EmployerSignUp extends Component {
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
    this.props.handleSignUp(this.state)
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {

    return (
      <div>
        <h1>Create An Account</h1>
        <form onSubmit={this.handleSubmit} class="ui form">
          <div class="field">
            <label>Name</label>
              <input onChange={this.handleOnChange} type="text" name="name" />
          </div>
          <div class="field">
            <label>Department</label>
              <input onChange={this.handleOnChange} type="text" name="dept" />
          </div>
          <div class="field">
            <label>E-mail</label>
              <input onChange={this.handleOnChange} type="text" name="email" />
          </div>
          <div class="field">
            <label>Username</label>
              <input onChange={this.handleOnChange} type="text" name="username" />
          </div>
          <div class="field">
            <label>Password</label>
              <input onChange={this.handleOnChange} type="password" name="password" />
          </div>
            <button class="ui button" type="submit">Submit</button>
        </form>
      </div>
    )
  }



}

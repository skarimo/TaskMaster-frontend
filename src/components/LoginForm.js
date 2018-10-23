import React, { Component } from 'react'


class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleLoginSubmit(this.state)
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {

    return (
      <div>
      <h1>Log-in</h1>
        <form onSubmit={this.handleSubmit} class="ui form">
        <div class="field">
          <label>Username</label>
            <input onChange={this.handleOnChange} type="text" name="username" />
        </div>
        <div class="field">
          <label>Password</label>
            <input onChange={this.handleOnChange} type="text" name="password"/>
        </div>
          <button class="ui button" type="submit">Submit</button>
        </form>
      </div>
    )
  }

}

export default LoginForm

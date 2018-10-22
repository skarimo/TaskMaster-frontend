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
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
            <input onChange={this.handleOnChange} type="text" name="username" />
          <label>Password</label>
            <input onChange={this.handleOnChange} type="text" name="password"/>
          <input type="submit" value="Log-In"/>
        </form>
      </div>
    )
  }

}

export default LoginForm

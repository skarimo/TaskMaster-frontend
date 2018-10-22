import React, { Component } from 'react'
import { Link } from 'react-router-dom';



class EmployerNewWorker extends Component {
  constructor() {
    super()
    this.state = {
      name: null,
      username: null,
      email: null,
      password: null
    }
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleNewWorker(this.state)
    this.props.history.push('/employer')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

          <label>Name</label>
            <input onChange={this.handleOnChange} type="text" name="name" />

          <label>Username</label>
            <input onChange={this.handleOnChange} type="text" name="username" />


          <label>E-mail</label>
            <input onChange={this.handleOnChange} type="text" name="email" />

          <label>Password</label>
            <input onChange={this.handleOnChange} type="password" name="password" />

          <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default EmployerNewWorker

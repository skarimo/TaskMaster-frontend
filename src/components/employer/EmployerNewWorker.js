import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Form } from 'semantic-ui-react'


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
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Name</label>
            <input onChange={this.handleOnChange} type="text" name="name" />
        </Form.Field>
        <Form.Field>
          <label>Username</label>
            <input onChange={this.handleOnChange} type="text" name="username" />
        </Form.Field>
        <Form.Field>
          <label>E-mail</label>
            <input onChange={this.handleOnChange} type="text" name="email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
            <input onChange={this.handleOnChange} type="password" name="password" />
        </Form.Field>
          <button class='ui primary button' role='button' type='submit'>Submit</button>
      </Form>
    )
  }
}

export default EmployerNewWorker

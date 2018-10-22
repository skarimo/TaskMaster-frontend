import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';



class EmployerCreateProject extends Component {
  constructor() {
    super()
    this.state = {
      title: null,
      desc: null,
      taskTitle: '',
      taskDesc: '',
      tasks: []
    }
  }


  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleAddTask = (e) => {
    e.preventDefault()
    if (this.state.taskTitle && this.state.taskDesc) {
      let newTasks = [...this.state.tasks]
      newTasks.push({title: this.state.taskTitle, desc:this.state.taskDesc})
      this.setState({
        tasks: newTasks,
        taskTitle: '',
        taskDesc: ''
      })
    }
  }

  showTasks = () => {
    if (this.state.tasks !== false) {
      return (
        <ul>
          {this.state.tasks.map((task) => <li key={task.title}>{task.title} <ul><li>{task.desc}</li></ul></li>)}
        </ul>
      )
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const projectObj = {
      title: this.state.title,
      desc: this.state.desc,
      tasks: this.state.tasks
    }
    this.props.handleCreateProject(projectObj)
    this.props.history.push('/employer')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <label>Title</label>
            <input onChange={this.handleOnChange} type="text" name="title" />

          <label>Description</label>
            <input onChange={this.handleOnChange} type="text" name="desc" />
            {this.showTasks()}

          <label>Tasks</label>
            <input onChange={this.handleOnChange} type="text" name="taskTitle" value={this.state.taskTitle} />
            <input onChange={this.handleOnChange} type="text" name="taskDesc" value={this.state.taskDesc} />
            <button onClick={this.handleAddTask} type='submit'>Add Task</button> <br/>

          <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default EmployerCreateProject

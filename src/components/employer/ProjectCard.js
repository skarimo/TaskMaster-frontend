import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ProjectCard extends Component {
  state = {
    show: false,
    tasks: []
  }

  componentDidMount() {
    this.props.adapter.fetchProjectTasks(this.props.employerId, this.props.project.id)
    .then((tasks) => this.setState({ tasks }))
  }

  handleShowOrHideProject = () => {
    this.setState({ show: !this.state.show })
    console.log(this.tasksList())
  }

  handleDeleteTaskEmployer = (taskId) => {
    this.props.handleDeleteTaskEmployer(taskId)
    let newTasks = this.state.tasks.filter((task) => task.id !== taskId)
    this.setState({ tasks: newTasks })
  }

  tasksList = ()=> {
    if (this.state.tasks.length >= 1) {
      return this.state.tasks.map((task) => (<ul key={task.id}><li><b style={{fontSize:"20px"}}>{task.title}</b> <button className="ui inverted green button" onClick={() => {this.handleDeleteTaskEmployer(task.id)}}>Task Completed</button></li><ul><li>{task.desc} <b> STATUS: </b> {task.status}</li></ul></ul>))
    } else {
      return ("you have no tasks for this project")
    }
  }

  render() {
    return (
      <div role='listitem' class='item'>
        <div class='right floated content'>
          <button onClick={this.handleShowOrHideProject} class='ui button' role='button'>
            Click to Show
          </button>
          <button class="ui inverted red button" onClick={() => {this.props.handleDeleteProject(this.props.project.id)}}>Delete</button>
        </div>
        <i aria-hidden='true' class='industry icon' />
        <div class='content'><b style={{fontSize:"25px"}}>{this.props.project.title}</b> : {this.props.project.desc}</div>
        {this.state.show ? this.tasksList() : null}
      </div>
    )
    }
}


export default ProjectCard




// <Link to={`/employer/projects/${props.project.id}`}>
// <div className="projectCard">
//
//   <Link to={{pathname: `/employer/projects/${props.project.id}`, project: props.project }}>
//     {props.project.title}
//     {props.project.desc}
//   </Link>
//   <button onClick={() => {props.handleDeleteProject(props.project.id)}}>X</button>
// </div>

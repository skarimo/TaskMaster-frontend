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

  tasksList = ()=> {
    const tasksList = this.state.tasks.map((task) => (<ul key={task.id}><li>{task.title}</li><ul><li>{task.desc} <b> STATUS: </b> {task.status}</li></ul></ul>))
    return tasksList
  }

  render() {
    return (
      <div role='listitem' class='item'>
        <div class='right floated content'>
          <button onClick={this.handleShowOrHideProject} class='ui button' role='button'>
            Click to Show
          </button>
          <button onClick={() => {this.props.handleDeleteProject(this.props.project.id)}}>Delete</button>
        </div>
        <i aria-hidden='true' class='industry icon' />
        <div class='content'>{this.props.project.title} : {this.props.project.desc}</div>
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

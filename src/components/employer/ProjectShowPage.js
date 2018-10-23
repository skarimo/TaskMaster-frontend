import React, { Component } from 'react'
import { Link } from 'react-router-dom';



class ProjectShowPage extends Component {
  constructor(props) {
  super()
  this.state = {
    title: props.project.title,
    desc: props.project.desc,
    projectObj: props.project,
    tasks: []
  }
  }

  componentDidMount() {
    this.props.adapter.fetchProjectTasks(this.props.employerId, this.props.project.id).then((tasks) => this.setState({ tasks }))
  }

  render() {
    console.log(this.state.tasks)
    // const tasksList = this.state.tasks.map((task) => (<ul key={task.id}><li>{task.title}</li><ul><li>{task.desc}</li></ul></ul>))
    return (
      <React.Fragment>
        <h1>{this.state.title}</h1>
        <p>{this.state.desc}</p>
    
        <Link to='/employer'><button> click to go back </button></Link>
      </React.Fragment>
    )
  }
}







//
// const ProjectShowPage = (props) => {
//   const project = props.project
//
//   // let tasks =
//
//   return (
//     <React.Fragment>
//       <h1>{project.title}</h1>
//       <p>{project.desc}</p>
//
//       <Link to='/employer'><button> click to go back </button></Link>
//     </React.Fragment>
//   )
// }


export default ProjectShowPage

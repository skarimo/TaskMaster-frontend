import React from 'react'
import { Link } from 'react-router-dom';

const ProjectShowPage = (props) => {
  const project = props.location.project

  return (
    <React.Fragment>
      <h1>{project.title}</h1>
      <p>{project.desc}</p>

      <Link to='/employer'><button> click to go back </button></Link>
    </React.Fragment>
  )

}

export default ProjectShowPage

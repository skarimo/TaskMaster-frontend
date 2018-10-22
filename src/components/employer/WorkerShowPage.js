import React from 'react'
import { Link } from 'react-router-dom';

const ProjectShowPage = (props) => {
  const worker = props.location.worker

  return (
    <React.Fragment>
      <h1>{worker.name}</h1>
      <p>{worker.dept}</p>

      <Link to='/employer'><button> click to go back </button></Link>
    </React.Fragment>
  )

}

export default ProjectShowPage

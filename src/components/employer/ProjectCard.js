import React from 'react'
import { Link } from 'react-router-dom';


const ProjectCard = (props) => {
  return (

        <div className="projectCard">
          <Link to={{pathname: `/employer/projects/${props.project.id}`, project: props.project }}>
            {props.project.title}
            {props.project.desc}
          </Link>
          <button onClick={() => {props.handleDeleteProject(props.project.id)}}>X</button>
        </div>

  )
}

export default ProjectCard



// <Link to={`/employer/projects/${props.project.id}`}>

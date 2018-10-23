import React from 'react'
import { Link } from 'react-router-dom';


const ProjectCard = (props) => {
  return (
    <div role='listitem' class='item'>
      <div class='right floated content'>
        <button class='ui button' role='button'>
          Add
        </button>
      </div>
      <i aria-hidden='true' class='industry' />
      <div class='content'>Lena</div>
    </div>

  )
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

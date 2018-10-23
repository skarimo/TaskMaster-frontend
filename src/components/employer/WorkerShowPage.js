import React from 'react'
import { Link } from 'react-router-dom';

const ProjectShowPage = (props) => {
  const worker = props.worker
  const optionsList = props.projects.map((project) => (<option key={project.id} value={project.id}>{project.title}</option>))
  console.log(optionsList)

  return (
    <div>
      <h3>{worker.name}</h3>
      <p>{worker.dept}</p>
      <select defaultValue={worker.project_id} name="projectId" onChange={(e) => props.handleAssignProjectToWorker(worker.id, e.target.value, worker)}>
        <option key={null} value={null}>None</option>
        {optionsList}
      </select>
      <Link to='/employer'><button> Click to Return </button></Link>
    </div>
  )

}

export default ProjectShowPage

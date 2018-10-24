import React from 'react'
import { Link } from 'react-router-dom';



const WorkerCard = (props) => {
  const worker = props.worker
  const optionsList = props.projects.map((project) => (<option key={project.id} value={project.id}>{project.title}</option>))
  console.log(optionsList)

  return (
      <div class="ui card">
        <div class="image">
          <img src="/images/default.jpeg" />
          </div>
        <div class="content">
          <a class="header"><Link to={{pathname: `/employer/workers/${props.worker.id}`, worker: props.worker }}>{props.worker.name}</Link>
          </a>
            Assign Project:
            
            <select class="custom-select" style={{width:'60%'}} defaultValue={worker.project_id} name="projectId" onChange={(e) => props.handleAssignProjectToWorker(worker.id, e.target.value, worker)}>
              <option key={null} value={null}>None</option>
              {optionsList}
            </select>



          <div class="meta">
            <span class="date">Hire Date: {props.worker.created_at}</span>
          </div>
          <div class="description">
            Department: {props.worker.dept}
          </div>
        </div>
        <div class="extra content">
          <a>
            <i class="user icon"></i>
            Username: {props.worker.username} <button onClick={()=>{props.handleDeleteWorker(props.worker.id)}}>Remove Worker</button>
          </a>
        </div>
      </div>
  )
}
export default WorkerCard





// <div className="projectCard">
// <Link to={{pathname: `/employer/workers/${props.worker.id}`, worker: props.worker }}>
// <h3>{props.worker.name}</h3>
// </Link>
// <button onClick={() => {props.handleDeleteWorker(props.worker.id)}}>X</button>
// </div>

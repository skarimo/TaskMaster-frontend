import React from 'react'
import { Link } from 'react-router-dom';



const WorkerCard = (props) => {
  return (
      <div class="ui card">
        <div class="image">
          <img src="/images/default.jpeg" />
          </div>
        <div class="content">
          <a class="header"><Link to={{pathname: `/employer/workers/${props.worker.id}`, worker: props.worker }}>{props.worker.name}</Link></a>
          <div class="meta">
            <span class="date">Hired: {props.worker.created_at}</span>
          </div>
          <div class="description">
            Department: {props.worker.dept}
          </div>
        </div>
        <div class="extra content">
          <a>
            <i class="user icon"></i>
            Username: {props.worker.username}
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

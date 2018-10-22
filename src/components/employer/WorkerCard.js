import React from 'react'
import { Link } from 'react-router-dom';


const WorkerCard = (props) => {
  return (
        <div className="projectCard">
          <Link to={{pathname: `/employer/workers/${props.worker.id}`, worker: props.worker }}>
            {props.worker.name}
            {props.worker.dept}
          </Link>
            <button onClick={() => {props.handleDeleteWorker(props.worker.id)}}>X</button>
        </div>

  )
}
export default WorkerCard

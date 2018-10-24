import React from 'react'
import { Card } from 'semantic-ui-react'
import WorkerTask from './WorkerTask'
import TaskContainer from '../../containers/TaskContainer'
const WorkerInfo = (props) => {
  
  const taskList = (info) => {
    let tasks = info.tasks.slice().map(task => <WorkerTask adapter={props.adapter} workerId={props.info.worker.id} key={task.id} task={task}/>)
    return tasks
  }

  const info = props.info

  return(
    <div class="ui segment">
      <div class="ui two column very relaxed grid">
        <div className="column">
      <div class="ui card">
        <div className="content">
          <div className="meta">
          {info &&  <span>Department: {info.worker.dept}</span>}
          </div>
        </div>
        <div className="image">
          <img src="/images/default.jpeg" alt="default"/>
        </div>
        <div className="content">
          <p className="header">{info && info.worker.name}</p>
          <div className="description">
            Username: {info && info.worker.username}<br/>
            Employer: {info && info.employer.name}
          </div>
        </div>
      </div>
      </div>
      <div className="column">
        <TaskContainer info={props.info} adapter={props.adapter}/>
      </div>
      </div>

    </div>
    
  )
}



export default WorkerInfo

import React from 'react'
import { Card } from 'semantic-ui-react'
import WorkerTask from '../components/worker/WorkerTask'
const TaskContainer = (props) => {
  const { project } = props.info
  const tasks = props.info.tasks.slice()
  let taskCards = tasks.map(task =>
    <WorkerTask adapter={props.adapter} workerId={props.info.worker.id} key={task.id} task={task}/>)
  console.log('Project', project)
  return(
    <React.Fragment>
      {project 
        ? <div className="header">{<h5><b>Project: </b>{project.title}</h5>}</div>
        : <><div className="header">No Projects Found</div>
            <p>Contact your supervisor for further instructions.</p></>}
            {props.info.tasks.length > 0 ? <Card.Group>{taskCards}</Card.Group> :<React.Fragment>No Tasks Available.</React.Fragment>}
    </React.Fragment>
  )
}

export default TaskContainer
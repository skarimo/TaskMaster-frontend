import React from 'react'
import { Card, Button } from 'semantic-ui-react'

export default class WorkerTask extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      status: null,
      finished: false
    }
  }

  componentDidMount(){
    this.setState({status: this.props.status})
  }

  changeStatus = (evt) => {
    evt.persist()
      this.setState({status: evt.target.value}, 
        () => {
          this.props.adapter.patchTaskInfo(this.props.workerId, this.props.task.id, {task: {status: evt.target.value}} )}
        )
  }

  completeTask = () => {
    this.props.adapter.deleteTask(this.props.workerId, this.props.task.id)
      .then(json => {
        this.setState({finished : true})
        console.log(json)

      })
  }

  render(){
    // debugger
    const { task } = this.props
    console.log(this.props)
    return(
      <React.Fragment>
      {!this.state.finished && <Card>
          <Card.Content>
           <Card.Header>{task.title}</Card.Header>
            <Card.Meta>Status: {this.state.status? this.state.status: task.status}</Card.Meta>
            <Card.Description>{task.desc}</Card.Description>
          </Card.Content>
          <Card.Content>
            <select class="ui dropdown"  onChange={this.changeStatus}>
              <option value={this.state.status}>--Select Status--</option>
              <option value="WIP">WIP</option>
              <option value="UNDER-REVIEW">UNDER-REVIEW</option>
            </select>
            <Button onClick={this.completeTask}>Finished!</Button>
          </Card.Content>
        </Card>}
        </React.Fragment>
    )
  }
}
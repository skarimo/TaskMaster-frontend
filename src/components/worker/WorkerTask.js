import React from 'react'
import { Card } from 'semantic-ui-react'

export default class WorkerTask extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      status: null
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

  render(){
    const { task } = this.props
    console.log(this.props)
    return(
      <Card>
          <Card.Content>
           <Card.Header>{task.title}</Card.Header>
            <Card.Meta>Status: {this.state.status || task.status}</Card.Meta>
            <Card.Description>{task.desc}</Card.Description>
          </Card.Content>
          <Card.Content>
            <select class="ui dropdown" onChange={this.changeStatus}>
              <option value="WIP">WIP</option>
              <option value="UNASSIGNED">UNASSIGNED</option>
              <option value="UNDER REVIEW">UNDER REVIEW</option>
            </select>
          </Card.Content>
        </Card>
    )
  }
}
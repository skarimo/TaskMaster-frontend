import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Link, Switch } from 'react-router-dom'

import ProjectCard from './employer/ProjectCard'
import ProjectShowPage from './employer/ProjectShowPage'

import EmployerCreateProject from './employer/EmployerCreateProject'
import EmployerNewWorker from './employer/EmployerNewWorker'

import WorkerCard from './employer/WorkerCard'
import WorkerShowPage from './employer/WorkerShowPage'


export default class Employer extends Component {
  constructor() {
    super()
    this.state = {
      employerObj: null,
      projects: null,
      workers: null
    }
  }

  componentWillMount() {
    const employerObj = this.props.employerObj
    this.setState({ employerObj })
  }

  componentDidMount() {
    let projects = null
    let workers = null
    let tasks = []

    this.props.adapter.fetchProjects(this.state.employerObj.id)
    .then((projectsRes) => {
      projects = projectsRes
    }).then(() => {
      this.props.adapter.fetchWorkers(this.state.employerObj.id)
      .then((workersRes) => {
        workers = workersRes
         this.setState({ projects, workers })
      })
    })
  }

  handleDeleteProject = (projectId) => {
    this.props.adapter.deleteProject(this.state.employerObj.id, projectId).then(() => {
      const newProjects = this.state.projects.filter(project => project.id !== projectId)
      this.setState({ projects: newProjects })
    })
  }

  handleDeleteWorker = (workerId) => {
    this.props.adapter.deleteWorker(this.state.employerObj.id, workerId).then(() => {
      const newWorkers = this.state.workers.filter(worker => worker.id !== workerId)
      this.setState({ workers: newWorkers })
    })
  }

  projectCards() {
    if (this.state.projects) {
      return this.state.projects.map(project => <ProjectCard handleDeleteProject={this.handleDeleteProject} key={project.id} project={project}/> )
    } else {
      return "You have no projects"
    }
  }

  workerCards() {
    if (this.state.workers) {
      return this.state.workers.map(worker => <WorkerCard handleDeleteWorker={this.handleDeleteWorker} key={worker.id} worker={worker} />)
    } else {
      return "You have no workers"
    }
  }

  handleCreateProject = (projectObj) => {
    console.log(projectObj)
    this.props.adapter.createProject(this.state.employerObj.id, {project: projectObj}).then((newProject) => {
      let projectsCopy = [...this.state.projects]
      projectsCopy.push(newProject)
      this.setState({ projects: projectsCopy })
    })
  }

  handleNewWorker = (workerObj) => {
    this.props.adapter.createWorker(this.state.employerObj.id, {worker: workerObj}).then((newWorker) => {
      let workersCopy = [...this.state.workers]
      workersCopy.push(newWorker)
      this.setState({ workers: workersCopy })
    })
  }


  mainEmployerShowPage = () => {
    if (this.state.currentShowProject) {
      return < ProjectShowPage handleProjectShowRemove={this.handleProjectShowRemove} />
    }

    if (this.state.employerObj !== null) {
      return(
        <div>
          <h1> Welcome {this.state.employerObj.name}</h1>

          <div style={{width: "100%"}}>
            <h2>this is projects</h2>
            <Link to='/employer/project/new'><button>Create a New Project</button></Link>
            <div id="projects">
            {this.projectCards()}
            </div>
          </div>

          <div style={{width: "100%"}}>
              <h2>this is workers</h2>
              <Link to='/employer/worker/new'><button>Create a New Worker Account</button></Link>
                </div>
              <div class='ui three cards'>
              {this.workerCards()}
              </div>
        </div>
      )

    } else {
      return <Redirect to='/' />
    }
  }

  handleAssignProjectToWorker = (workerId, projectId, worker) => {
    this.props.adapter.assignProjectToWorker(workerId, projectId)
    worker.project_id = projectId
  }


  render() {
    return(
      <BrowserRouter>
        <Switch>
          <React.Fragment>
            <Route exact path='/employer' component={this.mainEmployerShowPage}/>

            <Route exact path='/employer/projects/:id' render={(props) => <ProjectShowPage employerId={this.state.employerObj.id} adapter={this.props.adapter} project={props.location.project} />} />

            <Route exact path='/employer/workers/:id' render={(props) => <WorkerShowPage worker={props.location.worker} projects={this.state.projects} handleAssignProjectToWorker={this.handleAssignProjectToWorker} />} />

            <Route exact path='/employer/project/new' render={(props) => <EmployerCreateProject handleCreateProject={this.handleCreateProject} history={props.history} />}/>

            <Route exact path='/employer/worker/new' render={(props) => <EmployerNewWorker handleNewWorker={this.handleNewWorker} history={props.history} />}/>

          </React.Fragment>
        </Switch>
      </BrowserRouter>
    )

  }
}

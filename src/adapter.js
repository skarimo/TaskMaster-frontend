
export default class Adapter {

  constructor(baseURL) {
    this.baseURL = baseURL
  }

  get(url) {
    return fetch(URL).then(res=>res.json())
  }

  createWorker(id, workerObj) {
    return fetch((this.baseURL + `/employers/${id}/create-worker`), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify(workerObj)
    })
    .then(response => response.json())
  }

  loginWorker(workerLogin) {
    console.log("change this to login employer", workerLogin)
    return fetch("http://localhost:3001/workers/2").then(res=>res.json())
  }

  loginEmployer(empLogin) {
    console.log("change this to login employer", empLogin)
    return fetch("http://localhost:3001/employers/1").then(res=>res.json())
  }

  fetchProjects(id) {
    return fetch(this.baseURL + `/employers/${id}/projects`).then(res=>res.json())
  }

  fetchProjectTasks(id, projectId) {
    return fetch(this.baseURL + `/employers/${id}/projects/${projectId}/tasks`).then(res=>res.json())
  }

  fetchWorkers(id) {
    return fetch(this.baseURL + `/employers/${id}/workers`).then(res=>res.json())
  }

  createProject(id, projectObj) {
    return fetch((this.baseURL + `/employers/${id}/create-project`), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify(projectObj)
    })
    .then(response => response.json())
  }

  createEmployer(empObj) {
    return fetch((this.baseURL + '/employers/new'), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify(empObj)
    })
    .then(response => response.json())
  }

  deleteProject(id, projectId) {
    return fetch((this.baseURL + `/employers/${id}/projects/${projectId}`), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
  }

  deleteWorker(id, workerId) {
    return fetch((this.baseURL + `/employers/${id}/workers/${workerId}`), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
  }

  assignProjectToWorker(workerId, projectId) {
    return fetch((this.baseURL + `/workers/${workerId}/update`), {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({worker: {project_id: projectId}})
    })
    .then(response => response.json())
  }

  fetchWorkerInfo(workerId){
    return fetch(this.baseURL+'/workers/'+workerId+'/info')
      .then(res => res.json())
  }

  patchTaskInfo(workerId, taskId, editBody){
    console.log(editBody)
    return fetch((`${this.baseURL}/workers/${workerId}/tasks/${taskId}`), {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(editBody)
    })
    .then(res => res.json())
  }



}

// get '/workers/:id/tasks' => 'workers#show_tasks'
// get 'workers/:id/employer' => 'workers#my_boss'
// get '/workers/:id/project' => 'workers#my_project'
// patch '/workers/:id/task/:task_id' => 'workers#edit_task'
// patch '/workers/:id/update' => 'workers#update_info'

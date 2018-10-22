
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
    return fetch("http://localhost:3001/workers/1").then(res=>res.json())
  }

  loginEmployer(empLogin) {
    console.log("change this to login employer", empLogin)
    return fetch("http://localhost:3001/employers/1").then(res=>res.json())
  }

  fetchProjects(id) {
    return fetch(this.baseURL + `/employers/${id}/projects`).then(res=>res.json())
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

// delete '/employers/:id/workers/:worker_id'

}

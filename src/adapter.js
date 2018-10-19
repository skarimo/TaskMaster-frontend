
export default class Adapter {

  constructor(baseURL) {
    this.url = baseURL
  }

  get(url) {
    return fetch(URL).then(res=>res.json())
  }

  fetchProjects(empID) {
    console.log("come back to this")
  }

}

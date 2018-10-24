import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Adapter from './adapter'
import './App.css';

import './index.css';
import MainContainer from './containers/MainContainer'
import Employer from './containers/Employer'
import Worker from './containers/Worker'

class App extends Component {



  render() {
    const URL = 'http://localhost:3001'
    const adapter = new Adapter(URL)

    return (
      <Router>
        <div id="main-container">
          <div className="app header">
            <img src="logo.png" style={{float: "left"}}/> Team Projects Made Easy
          </div>
          <div id="main-component">
            <Route exact path="/" component={MainContainer} />
            <Route exact path="/employer" render={() => <Employer adapter={adapter} />} />
            <Route exact path="/worker" render={() => <Worker adapter={adapter} />} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

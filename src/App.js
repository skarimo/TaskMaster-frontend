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
          <h1>LOGO OR WHATEVER WILL GO HERE WE WILL SEE</h1>
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/employer" render={() => <Employer adapter={adapter} />} />
          <Route exact path="/worker" render={() => <Worker adapter={adapter} />} />
        </div>
      </Router>
    );
  }
}

export default App;

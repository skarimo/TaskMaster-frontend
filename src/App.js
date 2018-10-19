import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';



import './index.css';
import MainContainer from './containers/MainContainer'
import Employer from './containers/Employer'
import Worker from './containers/Worker'

class App extends Component {



  render() {
    return (
      <Router>
        <React.Fragment>
          <h1>LOGO OR WHATEVER WILL GO HERE WE WILL SEE</h1>
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/employer" component={Employer} />
          <Route exact path="/worker" component={Worker} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;

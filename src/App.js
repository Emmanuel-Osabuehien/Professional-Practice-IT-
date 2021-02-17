import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {IncomePg} from './pages/IncomePg'
import { ExpensePg } from './pages/ExpensePg';
import { Goal } from './pages/Goal';
import { Home } from './pages/home';

class App extends Component {

  render() {
    return (
      <Router>

        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/income' component={IncomePg} exact />
          <Route path='/expense' component={ExpensePg} exact />
          <Route path='/goal' component={Goal} exact />

        </Switch>



      </Router>
    );
  }
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from 'react-bootstrap';
import { IncomePg } from './pages/IncomePg';
import { ExpensePg } from './pages/ExpensePg';
import { Goal } from './pages/Goal';
import { Home } from './pages/home';
import { IncomeRead } from './pages/IncomeRead';
import { ExpenseRead } from './pages/ExpenseRead';

class App extends Component {

  render() {
    return (
      <Router>
         <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Money Management System</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/income">Enter Income</Nav.Link>
              <Nav.Link href="/expense">Enter Expenses</Nav.Link>
              <Nav.Link href="/goal">Goals</Nav.Link>
              <Nav.Link href="/incomeread">Income List</Nav.Link>
              <Nav.Link href="/expenseread">Expense List</Nav.Link>
            </Nav>
          </Navbar>

        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/income' component={IncomePg} exact />
          <Route path='/expense' component={ExpensePg} exact />
          <Route path='/goal' component={Goal} exact />
          <Route path='/incomeread' component={IncomeRead} exact />
          <Route path='/expenseread' component={ExpenseRead} exact />

        </Switch>



      </Router>
    );
  }
}

export default App;

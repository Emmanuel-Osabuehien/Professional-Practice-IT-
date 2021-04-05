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
import { EditIncome } from './pages/EditIncome';
import { EditExpense } from './pages/EditExpense';

class App extends Component {

  render() {
    return (
      <Router>
         <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Money Management System</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/income">Incomes</Nav.Link>
              <Nav.Link href="/expense">Expenses</Nav.Link>
              <Nav.Link href="/goal">Goals</Nav.Link>
              <Nav.Link href="/incomeread">Edit Income</Nav.Link>
              <Nav.Link href="/expenseread">Edit Expense</Nav.Link>
            </Nav>
          </Navbar>

        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/income' component={IncomePg} exact />
          <Route path='/expense' component={ExpensePg} exact />
          <Route path='/goal' component={Goal} exact />
          <Route path='/incomeread' component={IncomeRead} exact />
          <Route path='/expenseread' component={ExpenseRead} exact />
          <Route path='/editincome/:id' component={EditIncome} />
          <Route path='/editexpense/:id' component={EditExpense} />
        </Switch>



      </Router>
    );
  }
}

export default App;

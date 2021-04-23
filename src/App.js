import './App.css';
import axios from 'axios';
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
import { SignUp } from "./pages/SignUpPage";
import { Login } from './pages/loginPage';


class App extends Component {

  constructor() {
    super();
    this.ReloadData = this.ReloadData.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.isUserLoggedIn = this.isUserLoggedIn.bind(this);

    this.state = {
      Users: []
    }
  }

  ReloadData() {
    axios.get('http://localhost:4000/login')
      .then((response) => {
        this.setState({ Users: response.data })
        this.isUserLoggedIn();

      })
      .catch((error) => {
        console.log(error)
      });
  }
  componentDidMount() {
    this.ReloadData();

  }

  isUserLoggedIn() {
    var arrayLenght = this.state.Users.length;
    //var yesOrNo = false;

    for (let index = 0; index < arrayLenght; index++) {
      if(this.state.Users[index].loginOrNot == true){

        document.getElementById("myUser").innerHTML = this.state.Users[index].user;
        console.log("Yes Im logged in")
      }

    }

  }

  render() {
    return (
      <Router>
        <Navbar variant="light" className="color-nav">
          <Navbar.Brand href="/">
            <img src="https://cdn5.vectorstock.com/i/thumbs/94/04/piggy-bank-icon-green-vector-18099404.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo" />
              Money Management System
          </Navbar.Brand>


          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/income">Incomes</Nav.Link>
            <Nav.Link href="/expense">Expenses</Nav.Link>
            <Nav.Link href="/goal">Goals</Nav.Link>
            <Nav.Link href="/incomeread">Edit Income</Nav.Link>
            <Nav.Link href="/expenseread">Edit Expense</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login" className="mr-sm-2" id="myUser">Login/SignUp</Nav.Link>
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
          <Route path='/signUp' component={SignUp} />
          <Route path='/login' component={Login} />
        </Switch>



      </Router>
    );
  }
}

export default App;

import React from 'react';
import axios from 'axios';
import { ExpenseList } from './ExpenseList';

export class ExpenseRead extends React.Component {

    constructor() {
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
        expenses: []
    };

    componentDidMount() {
        this.ReloadData();
    }

    ReloadData() {
        axios.get('http://localhost:4000/expenses')
            .then((response) => {
                this.setState({ expenses: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <div>
               
                <ExpenseList expenses={this.state.expenses} ReloadData={this.ReloadData}></ExpenseList>
            </div>
        );
    }
}
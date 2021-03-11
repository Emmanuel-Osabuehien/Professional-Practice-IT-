import React from 'react';
import { ExpenseFormat } from './ExpenseFormat';

export class ExpenseList extends React.Component {

   render() {
        return this.props.expenses.map((expense) => {
            return <ExpenseFormat expense={expense} ReloadData={this.props.ReloadData}></ExpenseFormat>
        })
    }
}
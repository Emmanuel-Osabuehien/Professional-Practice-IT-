import React from 'react';
import { IncomeFormat } from './IncomeFormat';

export class IncomeList extends React.Component {

   render() {
        return this.props.incomes.map((income) => {
            return <IncomeFormat income={income} ReloadData={this.props.ReloadData}></IncomeFormat>
        })
    }
}
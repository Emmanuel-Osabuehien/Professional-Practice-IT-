import React from 'react';
import { IncomeFormat } from './IncomeFormat';

export class IncomeList extends React.Component {

    constructor() {
        super();
        
    }

    render() {
        return this.props.incomes.map((income) => {

            if(income.date.localeCompare("2021-03-01") == 0 ){

            return <IncomeFormat income={income} ReloadData={this.props.ReloadData}></IncomeFormat>
            }
        })
    }


}


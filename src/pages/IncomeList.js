import React from 'react';
import { IncomeFormat } from './IncomeFormat';

export class IncomeList extends React.Component {

    constructor() {
        super();
        //this.covertDate = this.covertDate.bind(this);
    }

    // covertDate(date) {
    //     var myDateMonth = [];
    //     let monthPlace = 5;


    //     for (let index = 0; index < 2; index++) {
    //         myDateMonth[index] = date.charAt(monthPlace);
    //         monthPlace++;
    //     }

    //     return myDateMonth;

    // }

    render() {
        return this.props.incomes.map((income) => {
            return <IncomeFormat income={income} ReloadData={this.props.ReloadData}></IncomeFormat>

            // var myDateMonth = [];
            // var jan = ["0", "1"];
            // var janMoney;

            // myDateMonth = this.covertDate(income.date);
            // console.log(myDateMonth);

            // if (JSON.stringify(myDateMonth) == JSON.stringify(jan)) {

            //     janMoney = income.money;
            //     return <IncomeFormat income={income} ReloadData={this.props.ReloadData}></IncomeFormat>
            // }

            // else {
            //     console.log("Out of bounded date")
            // }
        })
    }


}


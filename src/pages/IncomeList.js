import React from 'react';
import { IncomeFormat } from './IncomeFormat';

export class IncomeList extends React.Component {

    constructor() {
        super();
        this.covertDate = this.covertDate.bind(this);
    }

    covertDate(date) {
        var myDateMonth = [];
        let monthPlace = 5;


        for (let index = 0; index < 2; index++) {
            myDateMonth[index] = date.charAt(monthPlace);
            monthPlace++;
        }

        return myDateMonth;

    }

    render() {
        return this.props.incomes.map((income) => {

            var myDateMonth = [];
            var jan = ["0", "1"];

            myDateMonth = this.covertDate(income.date);
            console.log(myDateMonth);

            if (JSON.stringify(myDateMonth) == JSON.stringify(jan)) {

                return <IncomeFormat income={income} ReloadData={this.props.ReloadData}></IncomeFormat>
            }

            else {
                console.log("ERROR")
            }
        })
    }


}


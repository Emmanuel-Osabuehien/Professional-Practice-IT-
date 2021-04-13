import React from 'react';
import axios from 'axios';
import { IncomeList } from './IncomeList';


export class IncomeRead extends React.Component {

    constructor() {
        super();
        this.ReloadData = this.ReloadData.bind(this);


    }
    state = {
        incomes: []
    };
    ReloadData() {

        axios.get('http://localhost:4000/incomes')
            .then((response) => {
                this.setState({ incomes: response.data })
                //this.myMoney = this.displayMyMoney();
                //console.log("My mulla " +this.myMoney)
            })
            .catch((error) => {
                console.log(error)
            });
    }
    
    componentDidMount() {
      this.ReloadData();
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
        return (
            <div>

                <IncomeList incomes={this.state.incomes} ReloadData={this.ReloadData}></IncomeList>

                <a href="/">Home</a>
            </div>
        );
    }
}


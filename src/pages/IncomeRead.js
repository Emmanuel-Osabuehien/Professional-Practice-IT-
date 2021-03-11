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

    componentDidMount() {
        this.ReloadData();
    }

    ReloadData() {
        axios.get('http://localhost:4000/incomes')
            .then((response) => {
                this.setState({ incomes: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <div>
               
                <IncomeList incomes={this.state.incomes} ReloadData={this.ReloadData}></IncomeList>
            </div>
        );
    }
}
import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export class IncomeFormat extends React.Component {

    constructor() {
        super();

    }
    

    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.income.title}</Card.Header>
                    <Card.Header>{this.props.income.money}</Card.Header>
                    <Card.Header>{this.props.income.date}</Card.Header>
                    <Card.Header>{this.props.income.reccur}</Card.Header>
                    <Card.Header>{this.props.income.annual}</Card.Header>
                    <Link to={"/EditIncome/" + this.props.income._id} className="btn btn-primary" style={{ background: 'blue' }}>Click to Edit</Link>
                </Card>


            </div>
        );
    }
}
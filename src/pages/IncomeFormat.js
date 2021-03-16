import React from 'react';
import Card from 'react-bootstrap/Card';

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
                   
                </Card>


            </div>
        );
    }
}
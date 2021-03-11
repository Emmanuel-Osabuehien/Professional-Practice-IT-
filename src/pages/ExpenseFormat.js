import React from 'react';
import Card from 'react-bootstrap/Card';

export class ExpenseFormat extends React.Component {

    constructor() {
        super();

    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.expense.title}</Card.Header>
                    <Card.Header>{this.props.expense.money}</Card.Header>
                    <Card.Header>{this.props.expense.date}</Card.Header>
                    <Card.Header>{this.props.expense.reccur}</Card.Header>
                    <Card.Header>{this.props.expense.annual}</Card.Header>
                   
                </Card>


            </div>
        );
    }
}
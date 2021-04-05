import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

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
                    <Link to={"/EditExpense/" + this.props.expense._id} className="btn btn-primary" style={{ background: 'blue' }}>Click to Edit</Link>
                </Card>


            </div>
        );
    }
}
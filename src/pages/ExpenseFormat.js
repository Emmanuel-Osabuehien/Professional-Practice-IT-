import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class ExpenseFormat extends React.Component {

    constructor() {
        super();
        this.DeleteFunction = this.DeleteFunction.bind(this);
    }
    
    DeleteFunction(e) {
        e.preventDefault();
        console.log("Delete: " + this.props.expense._id);
        axios.delete("http://localhost:4000/expenses/" + this.props.expense._id)
            .then(() => {
                this.props.ReloadData();
            })
            .catch();
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
                    <Link to={"/editexpense/" + this.props.expense._id} className="btn btn-primary" style={{ background: 'blue' }}>Click to Edit</Link>
                    <Button onClick={this.DeleteFunction} style={{ background: 'red' }}>Click to Delete</Button>
                </Card>


            </div>
        );
    }
}
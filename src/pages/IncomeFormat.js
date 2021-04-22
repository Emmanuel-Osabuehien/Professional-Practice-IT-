import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class IncomeFormat extends React.Component {

    constructor() {
        super();
        this.DeleteFunction = this.DeleteFunction.bind(this);
    }
    
    DeleteFunction(e) {
        e.preventDefault();
        console.log("Delete: " + this.props.income._id);
        axios.delete("http://localhost:4000/incomes/" + this.props.income._id)
            .then(() => {
                this.props.ReloadData();
            })
            .catch();
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
                    <Link to={"/editincome/" + this.props.income._id} className="btn btn-primary" style={{ background: 'blue' }}>Click to Edit</Link>
                    <Button onClick={this.DeleteFunction} style={{ background: 'red' }}>Click to Delete</Button>
                </Card>


            </div>
        );
    }
}
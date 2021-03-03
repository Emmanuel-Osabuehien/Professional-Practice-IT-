import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button'

export class ExpensePg extends React.Component {
    constructor() {
        super();
        //this.inputAlert = this.inputAlert.bind(this);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeMoney = this.onChangeMoney.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Title: ' ',
            Money: ' '
        }
    }

    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    onChangeMoney(e) {
        this.setState({
            Money: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const inputExpense = {
            title: this.state.Title,
            money: this.state.Money
        }
        alert(inputExpense.title + " Info has been added");
        alert(inputExpense.money + " Info has been added");
        axios.post('http://localhost:4000/expenses', inputExpense)
            .then((res) => {
                this.inputAlert();
                console.log(res);
            })
            .catch((err) => {

                console.log("errr")
                console.log(err);
            });
    }

    componentDidMount() {
        this.hiddenElement();
    }
    hiddenElement() {

        if (document.getElementById("recurringSelection").value == "no") {
            var h = document.getElementById("inputCommentsBrand").style.visibility = "hidden";
        }
        else;

    }



    //allows html in JAVASCRIPT
    render() {

        //return html
        return (

            <div >
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /><h1>Graph</h1>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Expense Details: </label>
                        <select class="form-control" value={this.state.Title}
                            onChange={this.onChangeTitle}>
                            <option>Bills</option>
                            <option>Insurance</option>
                            <option>Vehicle Maintenance</option>
                            <option>Mortgage</option>
                            <option>Meal Expense</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Expense Amount: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Money}
                            onChange={this.onChangeMoney}></input>
                    </div>
                    <div className="form-group">
                        <label for="example-date-input" class="col-2 col-form-label">Date</label>

                        <input class="form-control" type="date" value="2011-08-19" id="example-date-input"></input>
                    </div>

                    <div className="form-group">
                        <label>Is it a recurring income: </label>
                        <select class="form-control" id="recurringSelection" >
                            <option value="no">No</option>
                            <option value="yes">Yes</option>

                        </select>
                    </div>

                    <div className="form-group" id="inputCommentsBrand">
                        <label>Recurring: </label>
                        <select class="form-control" >
                            <option>Yearly</option>
                            <option>Monthly</option>
                            <option>Weekly</option>
                            <option>Daily</option>
                        </select>
                    </div>


                    <div className="form-group">
                        <input type='submit'
                            value='Add Info'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}


import React from 'react';
import axios from 'axios';

//This is my edit class where I edit the properties inside a database to my read.js file
export class EditExpense extends React.Component {

    constructor() {
        super();

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeMoney = this.onChangeMoney.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeReccur = this.onChangeReccur.bind(this);
        this.onChangeAnnual = this.onChangeAnnual.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Title: '',
            Money: '',
            Date: '',
            Reccur: '',
            Annual: ''
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/expenses/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    _id: response.data._id,
                    Title: response.data.title,
                    Money: response.data.money,
                    Date: response.data.date,
                    Reccur: response.data.reccur,
                    Annual: response.data.annual
                    })
            })
            .catch((error) => {
                console.log(error);
            });
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

    onChangeDate(e) {
        this.setState({
            Date: e.target.value
        });
    }

    onChangeReccur(e) {
        this.setState({
            Reccur: e.target.value
        });
    }

    onChangeAnnual(e) {
        this.setState({
            Annual: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        alert("Info is now: " + this.state.Title + " " +
            this.state.Money + " "
            + this.state.Date + " " +
            this.state.Reccur + " " + this.state.Annual);

        const editExpenses = {
            title: this.state.Title,
            money: this.state.Money,
            date: this.state.Date,
            reccur: this.state.Reccur,
            annual: this.state.Annual,
            _id: this.state._id
        }

        axios.put('http://localhost:4000/expenses/' + this.state._id, editExpenses)
            .then(response => {
                console.log(response.data)
            })
            .catch();
    }
    //Here is where i render in my text boxes where you can add the data into each box
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label>Expense Details: </label>
                        <select className="form-control" value={this.state.Title}
                            onChange={this.onChangeTitle}>
                            <option>Bills</option>
                            <option>Insurance</option>
                            <option>Vehicle Maintenance</option>
                            <option>Mortgage</option>
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
                        <label foreach="example-date-input" className="col-2 col-form-label">Date</label>

                        <input className="form-control" type="date" min="2021-01-01" max="2021-12-31" value="2021-08-19"
                            value={this.state.Date}
                            onChange={this.onChangeDate}></input>
                    </div>

                    <div className="form-group">
                        <label>Is it a recurring income: </label>
                        <select className="form-control" id="recurringSelection" onClick={this.hiddenElement}
                            value={this.state.Reccur}
                            onChange={this.onChangeReccur}>
                            <option value="no">No</option>
                            <option value="yes">Yes</option>

                        </select>
                    </div>

                    <div className="form-group" id="inputCommentsBrand">
                        <label>Recurring: </label>
                        <select className="form-control"
                            value={this.state.Annual}
                            onChange={this.onChangeAnnual}>
                            <option>Yearly</option>
                            <option>Monthly</option>
                            <option>Weekly</option>
                            <option>Daily</option>
                        </select>
                    </div>
                  
                    <div className="form-group">
                        <input type='submit'
                            value='Edit Info'
                            className='btn btn-primary'></input>
                    </div>
                </form>
                <a href="/">Home</a>
            </div>
        );
    }
}
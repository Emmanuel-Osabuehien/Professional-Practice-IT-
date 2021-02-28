import axios from 'axios';
import React from 'react';

export class ExpensePg extends React.Component {
    constructor() {
        super();
        this.inputAlert = this.inputAlert.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeMoney = this.onChangeMoney.bind(this);

        this.state = {
            Title: '',
            Money: ''
        }
    }

    inputAlert(e){
        e.preventDefault();
        alert("Input your income");
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
        alert("Info has been added");
        const inputExpenses = {
            title: this.state.Title,
            Money: this.state.Console
        }
        axios.post('http://localhost:4000/expenses', inputExpenses)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }


    //allows html in JAVASCRIPT
    render() {

        //return html
        return (
            <div className='App'>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Title: </label>
                    <input type='text'
                        className='form-control'
                        value={this.state.Title}
                        onChange={this.onChangeTitle}></input>
                </div>
                <div className="form-group">
                    <label>Expense: </label>
                    <input type='text'
                        className='form-control'
                        value={this.state.Money}
                        onChange={this.onChangeMoney}></input>
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


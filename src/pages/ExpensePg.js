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
        alert(inputExpense.title +" Info has been added");
        alert(inputExpense.money +" Info has been added");
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

    

    inputAlert(e) {

        do {
            console.log("In here")
            var inputExpense = prompt("Input your expense", "999999")
        } while (inputExpense == 0 || inputExpense == null);

        alert("The value you inputted is: " + inputExpense);
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

                <Button variant="primary" size="lg" block onClick={this.inputAlert}>
                    Input Expense
                </Button>


                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>
                    <div className="form-group">
                        <label>Income: </label>
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


import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button'

export class IncomePg extends React.Component {
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

        const inputIncome = {
            title: this.state.Title,
            money: this.state.Money
        }
        alert(inputIncome.title +" Info has been added");
        alert(inputIncome.money +" Info has been added");
        axios.post('http://localhost:4000/incomes', inputIncome)
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
            var inputIncome = prompt("Input your new Income", "999999")
        } while (inputIncome == 0 || inputIncome == null);

        alert("The value you inputted is: " + inputIncome);
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
                    Input new Income
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


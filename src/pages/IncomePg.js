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

    componentDidMount(){
        this.hiddenElement();
    }
    hiddenElement() {
        
        if (document.getElementById("recurringSelection").value == "no"){
           var h = document.getElementById("inputCommentsBrand").style.visibility = "hidden"; 
        }
        else;
        
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
        alert(inputIncome.title + " Info has been added");
        alert(inputIncome.money + " Info has been added");
        axios.post('http://localhost:4000/incomes', inputIncome)
            .then((res) => {

                console.log(res);
            })
            .catch((err) => {

                console.log("errr")
                console.log(err);
            });
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
                        <label>Income Details: </label>
                        <select class="form-control" value={this.state.Title}
                            onChange={this.onChangeTitle}>
                            <option>Salary</option>
                            <option>Income from self employment</option>
                            <option>Social Welfare payments</option>
                            <option>Income outside EU</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Income Amount: </label>
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
                        <select  class="form-control"  id ="recurringSelection" >
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


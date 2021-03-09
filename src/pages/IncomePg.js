import axios from 'axios';
import React from 'react';
import { MDBContainer } from "mdbreact";
import { Bar } from "react-chartjs-2";

import Button from 'react-bootstrap/Button'


export class IncomePg extends React.Component {

    

    
    constructor() {
        super();
        var jan, feb, mar, apl, may, jun, jul, aug, sept, oct, nov, dec;
        //this.inputAlert = this.inputAlert.bind(this);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeMoney = this.onChangeMoney.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.hiddenElement = this.hiddenElement.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);

        this.state = {
            Title: ' ',
            Money: ' '
        }

        this.stateGraph = {
            dataBar: {
                labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
                datasets: [
                    {
                        label: "Income",
                        data: [12, 19, 3, 5, 2, 3, 5, 6, 7, 2, 1, 9],
                        backgroundColor: [
                            "rgba(255, 134,159,0.4)",
                            "rgba(98,  182, 239,0.4)",
                            "rgba(255, 218, 128,0.4)",
                            "rgba(113, 205, 205,0.4)",
                            "rgba(170, 128, 252,0.4)",
                            "rgba(255, 177, 101,0.4)",
                            "rgba(255, 134,159,0.4)",
                            "rgba(98,  182, 239,0.4)",
                            "rgba(255, 218, 128,0.4)",
                            "rgba(113, 205, 205,0.4)",
                            "rgba(170, 128, 252,0.4)",
                            "rgba(170, 128, 252,0.4)"
    
                        ],
                        borderWidth: 2,
                        borderColor: [
                            "rgba(255, 134, 159, 1)",
                            "rgba(98,  182, 239, 1)",
                            "rgba(255, 218, 128, 1)",
                            "rgba(113, 205, 205, 1)",
                            "rgba(170, 128, 252, 1)",
                            "rgba(255, 177, 101, 1)",
                            "rgba(255, 134, 159, 1)",
                            "rgba(98,  182, 239, 1)",
                            "rgba(255, 218, 128, 1)",
                            "rgba(113, 205, 205, 1)",
                            "rgba(170, 128, 252, 1)",
                            "rgba(255, 177, 101, 1)"
                        ]
                    }
                ]
            },
            barChartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [
                        {
                            barPercentage: 1,
                            gridLines: {
                                display: true,
                                color: "rgba(0, 0, 0, 0.1)"
                            }
                        }
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                display: true,
                                color: "rgba(0, 0, 0, 0.1)"
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                }
            }
        }
    }

    componentDidMount() {
        this.hiddenElement();

        //retrieve data
        /*
        if (data.date > jan && data.date < feb )
        {jan += data.Money}
       
        continue for jan - dec
        or do for loop if we did months in numerically
        */
        
    }
    hiddenElement() {

        if (document.getElementById("recurringSelection").value == "no") {
            document.getElementById("inputCommentsBrand").style.display = "none";
        }
        else {
            document.getElementById("inputCommentsBrand").style.display = "block";
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
                <MDBContainer>
                    <h3 className="mt-5">Income Chart</h3>
                    <Bar data={this.stateGraph.dataBar} options={this.stateGraph.barChartOptions} />
                </MDBContainer>

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
                        <select class="form-control" id="recurringSelection" onClick={this.componentDidMount}>
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


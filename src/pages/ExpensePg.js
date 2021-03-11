import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button'
import { MDBContainer } from "mdbreact";
import { Bar } from "react-chartjs-2";

export class ExpensePg extends React.Component {
    constructor() {
        super();
        //this.inputAlert = this.inputAlert.bind(this);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeMoney = this.onChangeMoney.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeReccur = this.onChangeReccur.bind(this);
        this.onChangeAnnual = this.onChangeAnnual.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Title: ' ',
            Money: ' ',
            Date: ' ',
            Reccur: ' ',
            Annual: ' '
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

    const inputExpense = {
        title: this.state.Title,
        money: this.state.Money,
        date: this.state.Date,
        reccur: this.state.Reccur,
        annual: this.state.Annual,
    }
    alert(inputExpense.title + " Info has been added");
    alert(inputExpense.money + " Info has been added");
    alert(inputExpense.date + " Info has been added");
    alert(inputExpense.reccur + " Info has been added");
    alert(inputExpense.annual + " Info has been added");
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

                    <input class="form-control" type="date" value="2011-08-19" id="example-date-input"
                        value={this.state.Date}
                        onChange={this.onChangeDate}></input>
                </div>

                <div className="form-group">
                    <label>Is it a recurring income: </label>
                    <select class="form-control" id="recurringSelection"
                        value={this.state.Reccur}
                        onChange={this.onChangeReccur}>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>

                    </select>
                </div>

                <div className="form-group" id="inputCommentsBrand">
                    <label>Recurring: </label>
                    <select class="form-control"
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
                        value='Add Info'
                        className='btn btn-primary'></input>
                </div>
            </form>
        </div>
    );
}
}


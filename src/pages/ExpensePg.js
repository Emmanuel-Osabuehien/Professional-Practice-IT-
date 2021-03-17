import axios from 'axios';
import React from 'react';
import { MDBContainer } from "mdbreact";
import { Bar } from "react-chartjs-2";
import { IncomeList } from "./IncomeList";
import { IncomeRead } from "./IncomeRead";





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
        this.hiddenElement = this.hiddenElement.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.ReloadData = this.ReloadData.bind(this);
        this.displayMyMoney = this.displayMyMoney.bind(this);
        this.covertDate = this.covertDate.bind(this);
        this.updateData = this.updateData.bind(this);

        
        this.stateGraph = {
            dataBar: {
                labels: [],
                datasets: [
                    {
                        label: "Income",
                        data: [],
                        backgroundColor: [],
                        borderWidth: 2,
                        borderColor: []
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

        this.state = {
            Title: ' ',
            Money: ' ',
            Date: ' ',
            Reccur: ' ',
            Annual: ' ',
            expenses: []
        }



    }


    componentDidMount() {
        this.hiddenElement();
        this.ReloadData();

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
            annual: this.state.Annual
        }
        alert(inputExpense.title + " Info has been added");
        alert(inputExpense.money + " Info has been added");
        alert(inputExpense.date + " Info has been added");
        alert(inputExpense.reccur + " Info has been added");
        alert(inputExpense.annual + " Info has been added");
        axios.post('http://localhost:4000/incomes', inputExpense)
            .then((res) => {

                console.log(res);
            })
            .catch((err) => {

                console.log("errr")
                console.log(err);
            });
    }

    ReloadData() {
        axios.get('http://localhost:4000/expenses')
            .then((response) => {
                this.setState({ expenses: response.data })
                //this.displayMyMoney();

            })
            .catch((error) => {
                console.log(error)
            });
    }


    covertDate(date) {
        var myDateMonth = [];
        let monthPlace = 5;


        for (let index = 0; index < 2; index++) {
            myDateMonth[index] = date.charAt(monthPlace);
            monthPlace++;
        }

        return myDateMonth;

    }

    displayMyMoney() {

        var arrayLenght = this.state.expenses.length;
        var myDateMonth;
        var month = ["0", "1"]

        var monthMoney = 0;

        console.log(arrayLenght);
        for (let i = 0; i < arrayLenght; i++) {
            myDateMonth = this.covertDate(this.state.expenses[i].date);


            //console.log(myDateMonth);

            if (JSON.stringify(myDateMonth) == JSON.stringify(month)) {

                monthMoney += this.state.expenses[i].money;
                console.log(monthMoney);

            }
        }
        return monthMoney;

    }


    updateData() {
        var jan = ['0', '1'];
        var feb = ['0', '2'];
        var mar = ['0', '3'];
        var apl = ['0', '4'];
        var may = ['0', '5'];
        var jun = ['0', '6'];
        var jul = ['0', '7'];
        var aug = ['0', '8'];
        var sept = ['0', '9'];
        var oct = ['1', '0'];
        var nov = ['1', '1'];
        var dec = ['1', '2'];
        var janMoney, febMoney, marMoneey, aprMoney, mayMoney, junMoney, julMoney,
            augMoney, sepMoney, octMoney, novMoney, decMoney;

        janMoney = this.displayMyMoney(jan);
        febMoney = this.displayMyMoney(feb);
        marMoneey = this.displayMyMoney(mar);
        aprMoney = this.displayMyMoney(apl);
        mayMoney = this.displayMyMoney(may);
        junMoney = this.displayMyMoney(jun);
        julMoney = this.displayMyMoney(jul);
        augMoney = this.displayMyMoney(aug);
        sepMoney = this.displayMyMoney(sept);
        octMoney = this.displayMyMoney(oct);
        novMoney = this.displayMyMoney(nov);
        decMoney = this.displayMyMoney(dec);


        var data = {
            labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label: "Income",
                    data: [janMoney, febMoney, marMoneey, aprMoney, mayMoney, junMoney, julMoney, augMoney, sepMoney, octMoney, novMoney, decMoney],
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
        }
        return data;
    }


    //allows html in JAVASCRIPT
    render() {

        //return html
        return (

            <div >


                <MDBContainer>
                    <h3 className="mt-5">Income Chart</h3>
                    <Bar data={this.updateData} options={this.stateGraph.barChartOptions} />
                </MDBContainer>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Income Details: </label>
                        <select className="form-control" value={this.state.Title}
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
                        <label htmlFor="example-date-input" className="col-2 col-form-label">Date</label>

                        <input className="form-control" type="date" value="2011-08-19" id="example-date-input"
                            value={this.state.Date}
                            onChange={this.onChangeDate}></input>
                    </div>

                    <div className="form-group">
                        <label>Is it a recurring income: </label>
                        <select className="form-control" id="recurringSelection" onClick={this.componentDidMount}
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
                            value='Add Info'
                            className='btn btn-primary'></input>
                    </div>
                </form>

            </div>
        );
    }
}


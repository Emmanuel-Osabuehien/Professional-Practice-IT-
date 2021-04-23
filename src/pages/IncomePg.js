import axios from 'axios';
import React from 'react';
import { MDBContainer } from "mdbreact";
import { Bar, Pie } from "react-chartjs-2";





export class IncomePg extends React.Component {

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
        this.displayincomeDetails = this.displayincomeDetails.bind(this);
        this.recurringFunc = this.recurringFunc.bind(this);
        this.reccurMonths = this.reccurMonths.bind(this);
        this.updateDetailsData = this.updateDetailsData.bind(this);
        this.updateData = this.updateData.bind(this);

        this.stateGraph = {
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
            Title: 'Salary',
            Money: ' ',
            Date: ' ',
            Reccur: 'No',
            Annual: 'Yearly',
            incomes: []
        }

        // this.readState = {
        //     Title: 'Salary',
        //     Money: ' ',
        //     Date: ' ',
        //     Reccur: 'No',
        //     Annual: 'Yearly'

        // }





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

        const inputIncome = {
            title: this.state.Title,
            money: this.state.Money,
            date: this.state.Date,
            reccur: this.state.Reccur,
            annual: this.state.Annual
        }

        axios.post('http://localhost:4000/incomes', inputIncome)
            .then((res) => {

                console.log(res);
            })
            .catch((err) => {

                console.log("errr")
                console.log(err);
            });
    }

    ReloadData() {
        axios.get('http://localhost:4000/incomes')
            .then((response) => {
                this.setState({ incomes: response.data })
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

    displayMyMoney(month) {

        var arrayLenght = this.state.incomes.length;
        var myDateMonth;

        var monthMoney = 0;

        for (let i = 0; i < arrayLenght; i++) {
            myDateMonth = this.covertDate(this.state.incomes[i].date);


            if (JSON.stringify(myDateMonth) == JSON.stringify(month)) {

                monthMoney += this.state.incomes[i].money;
                console.log(monthMoney);

            }
        }
        return monthMoney;

    }

    displayincomeDetails(detail) {
        var arrayLenght = this.state.incomes.length;
        var detailMoney = 0;

        for (let i = 0; i < arrayLenght; i++) {


            if (detail.localeCompare(this.state.incomes[i].title) == 0) {

                detailMoney += this.state.incomes[i].money;


            }
        }


        return detailMoney;
    }

    //Data going inside bar graph
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

        //Intiallizing variables
        var janMoney = 0, febMoney = 0, marMoneey = 0, aprMoney = 0, mayMoney = 0, junMoney = 0, julMoney = 0,
            augMoney = 0, sepMoney = 0, octMoney = 0, novMoney = 0, decMoney = 0;//Moths that are going to graph
        var placement
        var place = 0;
        var arrayLenght = this.state.incomes.length;
        var extra;
        //console.log("Loops: "+arrayLenght);
        //extra = [1, 0];

        //Adding the recurring balance to each month
        if (arrayLenght != 0) {


            for (let i = 0; i < arrayLenght; i++) {//Loops through the each row in database

                //Returns back array [0] = months(1-12), array[1] = money that is recurring, array[2] = placement of month we aleady added bal to
                extra = this.recurringFunc(place);
                if (extra != null) {
                    placement = extra[0] - 1;

                    while (placement > 0) {

                        if (placement == 11) {
                            febMoney += extra[1];
                        }
                        else if (placement == 10) {
                            marMoneey += extra[1];
                        }
                        else if (placement == 9) {
                            aprMoney += extra[1];
                        }
                        else if (placement == 8) {
                            mayMoney += extra[1];

                        }
                        else if (placement == 7) {
                            junMoney += extra[1];
                        }
                        else if (placement == 6) {
                            julMoney += extra[1];
                        }
                        else if (placement == 5) {
                            augMoney += extra[1];
                        }
                        else if (placement == 4) {
                            sepMoney += extra[1];
                        }
                        else if (placement == 3) {
                            octMoney += extra[1];
                        }
                        else if (placement == 2) {
                            novMoney += extra[1];
                        }
                        else if (placement == 1) {
                            decMoney += extra[1];
                        }
                        else;

                        placement--;
                    }

                    console.log("Placement: " + place);
                    place = extra[2] + 1;
                }
            }
        }






        janMoney = this.displayMyMoney(jan);
        febMoney += this.displayMyMoney(feb);
        marMoneey += this.displayMyMoney(mar);
        aprMoney += this.displayMyMoney(apl);
        mayMoney += this.displayMyMoney(may);
        junMoney += this.displayMyMoney(jun);
        julMoney += this.displayMyMoney(jul);
        augMoney += this.displayMyMoney(aug);
        sepMoney += this.displayMyMoney(sept);
        octMoney += this.displayMyMoney(oct);
        novMoney += this.displayMyMoney(nov);
        decMoney += this.displayMyMoney(dec);


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

    updateDetailsData = () => {

        var catg1 = "Salary";
        var catg2 = "Income from self employment";
        var catg3 = "Social Welfare payments";
        var catg4 = "Income outside EU";
        var catg5 = "Other";

        var arrayLenght = this.state.incomes.length;
        var cat1Money = 0, cat2Money = 0, cat3Money = 0, cat4Money = 0, cat5Money = 0, extra, total;
        var placed = 0;

        if (arrayLenght != 0) {
            for (let i = 0; i < arrayLenght; i++) {

                if (this.state.incomes[i].reccur.localeCompare('yes') == 0) {
                    //total = ((extra[0] - 1) * extra[1]);

                    if (this.state.incomes[i].title.localeCompare(catg1) == 0) {
                        extra = this.recurringFunc(i);
                        total = ((extra[0] - 1) * extra[1]);
                        cat1Money += total;
                    }
                    else if (this.state.incomes[i].title.localeCompare(catg2) ==0) {
                        extra = this.recurringFunc(i);
                        total = ((extra[0] - 1) * extra[1]);
                        cat2Money += total;
                        
                    }
                    else if (this.state.incomes[i].title.localeCompare(catg3) == 0) {
                        extra = this.recurringFunc(i);
                        total = ((extra[0] - 1) * extra[1]);
                        cat3Money += total;
                    }
                    else if (this.state.incomes[i].title.localeCompare(catg4) ==0) {
                        extra = this.recurringFunc(i);
                        total = ((extra[0] - 1) * extra[1]);
                        cat4Money += total;
                        console.log("Cat4Money: " + cat4Money);
                    }
                    else if (this.state.incomes[i].title.localeCompare(catg5) ==0) {
                        extra = this.recurringFunc(i);
                        total = ((extra[0] - 1) * extra[1]);
                        cat5Money += total;
                    }

                }



            }
        }


        cat1Money += this.displayincomeDetails(catg1);
        cat2Money += this.displayincomeDetails(catg2);
        cat3Money += this.displayincomeDetails(catg3);
        cat4Money += this.displayincomeDetails(catg4);
        cat5Money += this.displayincomeDetails(catg5);


        var dataPolar = {
            datasets: [
                {
                    data: [cat1Money, cat2Money, cat3Money, cat4Money, cat5Money],
                    backgroundColor: [
                        "rgba(247, 70, 74, 0.5)",
                        "rgba(70, 191, 189, 0.5)",
                        "rgba(253, 180, 92, 0.5)",
                        "rgba(148, 159, 177, 0.5)",
                        "rgba(77, 83, 96, 0.5)"
                    ],
                    label: "My Earnings" // for legend
                }
            ],
            labels: [catg1, catg2, catg3, catg4, catg5]
        }

        return dataPolar;
    }

    reccurMonths = (mydate, repeatType) => {

        if (repeatType == 1) {

            var date = new Date(mydate);
            var date2 = new Date('12/31/2021');
            var diffTime = Math.abs(date2 - date);
            var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            return Math.floor(diffDays / 30) + 1;

        }
        else if (repeatType == 2) {
            // console.log(mydate);
            var d = new Date(mydate);

            //console.log("Month "+d.getMonth()+1);

            return 12 - Number(d.getMonth());

        }
        else if (repeatType == 3) {

            var date = new Date(mydate);
            var date2 = new Date('2021-12-31');

            var diffTime = Math.abs(date2 - date);
            var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));


            var weeks = Math.floor((diffDays + date.getDay() + 1) / 7);

            var months = Math.floor(weeks / 4);

            return months;

        }
    }

    //returns num: amount of month, money: the income inputted, place: the place of the recurr
    recurringFunc = (place) => {
        //use for loops
        var arrayLenght = this.state.incomes.length;
        var recurrDaily = "Daily";
        var recurrMonthly = "Monthly";
        var recurrWeekly = "Weekly";
        //place += 1;


        for (let i = place; i < arrayLenght; i++) {
            //compare this.state.incomes[i].recurr
            //do if state if recurr equals daily/weekly/etc

            if (this.state.incomes[i].annual.localeCompare(recurrDaily) == 0) {
                var num = this.reccurMonths(this.state.incomes[i].date, 1);

                var toDoArray = [num, this.state.incomes[i].money, i];
                console.log("Daily month" + num);
                return toDoArray;

            }
            else if (this.state.incomes[i].annual.localeCompare(recurrMonthly) == 0) {
                var num = this.reccurMonths(this.state.incomes[i].date, 2);

                var toDoArray = [num, this.state.incomes[i].money, i];
                console.log("Number of months" + num);
                return toDoArray;

            }
            else if (this.state.incomes[i].annual.localeCompare(recurrWeekly) == 0) {
                var num = this.reccurMonths(this.state.incomes[i].date, 3);

                var toDoArray = [num, this.state.incomes[i].money, i];
                console.log("Week to month " + num);
                return toDoArray;

            }
            else {
                console.log("Yealy ting boyz");
            }

        }

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

                        <input className="form-control" type="date" min="2021-01-01" max="2021-12-31" value="2021-08-19"
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

                <MDBContainer>

                    <Pie data={this.updateDetailsData} options={{ responsive: true }} />
                </MDBContainer>

                <a href="/">Home</a>

            </div>
        );
    }

    
}



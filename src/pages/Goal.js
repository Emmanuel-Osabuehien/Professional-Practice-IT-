import React from 'react';
import axios from 'axios';
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import Button from 'react-bootstrap/Button'




export class Goal extends React.Component {


    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
        this.displayMyMoney = this.displayMyMoney.bind(this);
        this.covertDate = this.covertDate.bind(this);
        this.updateData = this.updateData.bind(this);
        this.reccurMonths = this.reccurMonths.bind(this);
        this.recurringFunc = this.recurringFunc.bind(this);
        this.ReloadData = this.ReloadData.bind(this);
        this.updateExpData = this.updateExpData.bind(this);
        this.uploadGraph = this.uploadGraph.bind(this);
        this.profOrExpMessage = this.profOrExpMessage.bind(this);
        this.minTodayDate = this.minTodayDate.bind(this);
        this.goalValueRetrived = this.goalValueRetrived.bind(this);
        this.hiddenElement = this.hiddenElement.bind(this);
        this.myDateMonth = this.myDateMonth.bind(this);

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
            incomes: [],
            expenses: []
        }

    }

    componentDidMount() {
        this.ReloadData();

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

    ReloadData() {
        axios.get('http://localhost:4000/incomes')
            .then((response) => {
                this.setState({ incomes: response.data })


            })
            .catch((error) => {
                console.log(error)
            });

        axios.get('http://localhost:4000/expenses')
            .then((response) => {
                this.setState({ expenses: response.data })

            })
            .catch((error) => {
                console.log(error)

            });
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

    displayExpMoney(month) {

        var arrayLenght = this.state.expenses.length;
        var myDateMonth;

        var monthMoney = 0;

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

    //Data going inside bar graph
    //Retrun 0:Array for the graph, >0: Income data in array
    updateData(num) {

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

        var expData = this.updateExpData();
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

        var incomeData = [janMoney, febMoney, marMoneey, aprMoney, mayMoney, junMoney, julMoney, augMoney, sepMoney, octMoney, novMoney, decMoney];
        var data = [(janMoney - expData[0]), (febMoney - expData[1]), (marMoneey - expData[2]), (aprMoney - expData[3]), (mayMoney - expData[4]), (junMoney - expData[5]), (julMoney - expData[6]), (augMoney - expData[7]), (sepMoney - expData[8]), (octMoney - expData[9]), (novMoney - expData[10]), (decMoney - expData[11])];

        if (num == 0) {
            return data;
        }
        else if (num == 1) {
            return incomeData;
        }
    }

    uploadGraph(dataForGraph) {

        var data = {
            labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label: "Income",
                    data: [dataForGraph[0], dataForGraph[1], dataForGraph[2], dataForGraph[3], dataForGraph[4], dataForGraph[5], dataForGraph[6], dataForGraph[7], dataForGraph[8], dataForGraph[9], dataForGraph[10], dataForGraph[11]],
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

    updateExpData() {

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
        var arrayLenght = this.state.expenses.length;
        var extra;
        //console.log("Loops: "+arrayLenght);
        //extra = [1, 0];

        //Adding the recurring balance to each month
        if (arrayLenght != 0) {


            for (let i = 0; i < arrayLenght; i++) {//Loops through the each row in database

                //Returns back array [0] = months(1-12), array[1] = money that is recurring, array[2] = placement of month we aleady added bal to
                extra = this.recurringExpFunc(place);
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






        janMoney = this.displayExpMoney(jan);
        febMoney += this.displayExpMoney(feb);
        marMoneey += this.displayExpMoney(mar);
        aprMoney += this.displayExpMoney(apl);
        mayMoney += this.displayExpMoney(may);
        junMoney += this.displayExpMoney(jun);
        julMoney += this.displayExpMoney(jul);
        augMoney += this.displayExpMoney(aug);
        sepMoney += this.displayExpMoney(sept);
        octMoney += this.displayExpMoney(oct);
        novMoney += this.displayExpMoney(nov);
        decMoney += this.displayExpMoney(dec);


        var data = [janMoney, febMoney, marMoneey, aprMoney, mayMoney, junMoney, julMoney, augMoney, sepMoney, octMoney, novMoney, decMoney]


        return data;
    }


    reccurMonths(mydate, repeatType) {

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
    recurringFunc(place) {
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

    recurringExpFunc(place) {
        //use for loops
        var arrayLenght = this.state.expenses.length;
        var recurrDaily = "Daily";
        var recurrMonthly = "Monthly";
        var recurrWeekly = "Weekly";
        //place += 1;


        for (let i = place; i < arrayLenght; i++) {
            //compare this.state.incomes[i].recurr
            //do if state if recurr equals daily/weekly/etc

            if (this.state.expenses[i].annual.localeCompare(recurrDaily) == 0) {
                var num = this.reccurMonths(this.state.expenses[i].date, 1);

                var toDoArray = [num, this.state.expenses[i].money, i];
                console.log("Daily month" + num);
                return toDoArray;

            }
            else if (this.state.expenses[i].annual.localeCompare(recurrMonthly) == 0) {
                var num = this.reccurMonths(this.state.expenses[i].date, 2);

                var toDoArray = [num, this.state.expenses[i].money, i];
                console.log("Number of months" + num);
                return toDoArray;

            }
            else if (this.state.expenses[i].annual.localeCompare(recurrWeekly) == 0) {
                var num = this.reccurMonths(this.state.expenses[i].date, 3);

                var toDoArray = [num, this.state.expenses[i].money, i];
                console.log("Week to month " + num);
                return toDoArray;

            }
            else {
                console.log("Yealy ting boyz");
            }

        }

    }

    profOrExpMessage() {

        var Goal = this.goalValueRetrived();
        this.hiddenElement();


        var month = this.myDateMonth(Goal[1]);
        var totByMonth = 0;

        try {
            //Array for prof/loss each month
            //0-11 rep each month
            var data = this.updateData(0);
            
            for(var i = 0; i < month; i++ ){
                totByMonth += data[i];
            }
            
            if(totByMonth >= Goal[0]){

                document.getElementById("goalMessage").innerHTML = "Nice keep up with your money flow and you can reach your goal of " +Goal[0];
            }
            else
                document.getElementById("goalMessage").innerHTML = "Sorry man, with current money flow you can't reach " +Goal[0];

        } catch (error) {
            console.log("Undefined noooooo- only occur 1st time");
        }

    }

    myDateMonth(month){
        
        var monthInArray = this.covertDate(month);

        var monthString = "";
        for(var i = 0; i < month.length; i++){
            monthString += monthInArray[i];
        }
        
        var monthInNum = parseInt(monthString);
        
        return monthInNum;
    }



    minTodayDate() {
        var today = new Date();


        //if statement to return in dd/mm/yyyy format
        if (today.getMonth() >= 9) {

            return today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
        }
        else
            return today.getFullYear() + "-0" + (today.getMonth() + 1) + "-" + today.getDate();
    }

    goalValueRetrived() {
        var myGoal = document.getElementById("myGoal").value;
        var goalDate= document.getElementById("goalDate").value;

        

        return [myGoal, goalDate];
    }

    hiddenElement() {

        document.getElementById("hideDivOnclick").style.display = "none";

    }

    //allows html in JAVASCRIPT
    render() {

        //return html
        return (
            <div>
                <h3 align="center">Whats your money goal for 2021 </h3>
                <MDBContainer>
                    <h3 className="mt-5">Profits/Loss</h3>
                    <Bar data={this.uploadGraph(this.updateData(0))} options={this.stateGraph.barChartOptions} />
                </MDBContainer>

                <div id="hideDivOnclick">

                    

                    Saving Goal: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="Number" id="myGoal"></input>

                    <br />
                    <a>Date you wanna reach goal: </a>
                    <input type="date" id="goalDate" min={this.minTodayDate()} max="2021-12-31" ></input>

                    <br />
                    <br />



                    <Button variant="primary" size="lg" block onClick={this.profOrExpMessage}>
                        Block level button
                </Button>
                </div>

                <h5 id="goalMessage"></h5>


                <a href="/">return to main</a>
            </div>



        );
    }
}


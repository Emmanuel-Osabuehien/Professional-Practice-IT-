import React from 'react';
import axios from 'axios';




export class Login extends React.Component {

    constructor() {
        super();
        this.ReloadData = this.ReloadData.bind(this);
        this.getUserDetails = this.getUserDetails.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);

        this.state = {
            loginOrNot: false,
            Users: []
        }

    }

    componentDidMount() {
        this.ReloadData();

    }

    ReloadData() {
        axios.get('http://localhost:4000/login')
            .then((response) => {
                this.setState({ Users: response.data })
                //this.displayMyMoney();

            })
            .catch((error) => {
                console.log(error)
            });
    }


    getUserDetails() {
        var arrayLenght = this.state.Users.length;

        var inputtedUser = document.getElementById("user").value;
        var inpputtedPword = document.getElementById("pass").value;

        console.log(inputtedUser);
        console.log(inpputtedPword);
        

        for (let index = 0; index < arrayLenght; index++) {
            if (this.state.Users[index].user == inputtedUser && this.state.Users[index].pWord == inpputtedPword) {
                
                //updating wheter or not user is logged in, in body
                const userLoggedIn = {
                    user: inputtedUser,
                    pWord: inpputtedPword,
                    loginOrNot: true
                }

                axios.put('http://localhost:4000/login/' + this.state.Users[index]._id, userLoggedIn)
                    .then(response => {
                        console.log(response.data)

                    })
                    .catch();

                    alert("You are logged in yeaaa")
            }

            else {
                console.log(this.state.Users[index].user);
                console.log(this.state.Users[index].pWord);
                alert("nope incorrect password")
            }

        }
    }

    

    render() {
        return (
            <div>
                <center>

                    <div className="form-group">


                        <label>Please enter a Username: </label>
                        <input className="form-control" id="user" />

                    </div>
                    <div className="form-group">
                        <label>Please a password </label>

                        <input type='password' className='form-control' id="pass" />

                    </div>

                    <div className="form-group">

                        <button onClick={this.getUserDetails}>Login</button>

                    </div>


                    <a>Don't have account</a><br />
                    <a href="/signUp">Click here to create a free account</a>
                    <br />
                    <a href="/">Return Home</a>
                </center>
            </div>
        );
    }
}


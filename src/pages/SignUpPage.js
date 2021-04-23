import React from 'react';
import axios from 'axios';
import { IncomeList } from './IncomeList';


export class SignUp extends React.Component {

    constructor() {
        super();
        this.onChangePASSWORD = this.onChangePASSWORD.bind(this);
        this.onChangeUSERNAME = this.onChangeUSERNAME.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            User: '',
            Password: ''
        }
        

    }

    onChangeUSERNAME(e) {
        this.setState({
            User: e.target.value
        });
    }

    onChangePASSWORD(e) {
        this.setState({
            Password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const newUsers = {
            user: this.state.User, 
            pWord: this.state.Password
        }

        axios.post('http://localhost:4000/signUp', newUsers)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {

                console.log("errr")
                console.log(err);
            });
    }
  

    render() {
        return (
            <div>
                
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        
                        
                        <label>Please enter a Username: </label>
                        <input className="form-control" value={this.state.User} onChange = {this.onChangeUSERNAME}/>
                    
                    </div>
                    <div className="form-group">
                        <label>Please a password </label>
                        
                        <input type='password' className='form-control' value={this.state.Password} onChange = {this.onChangePASSWORD}/>
                    
                    </div>

                    <div className="form-group">
                        
                        <input type='submit'
                            value='Add Info'
                            className='btn btn-primary'/>
                    
                    </div>
                </form>
                <a href="/">Return Home</a>
            </div>
        );
    }
}


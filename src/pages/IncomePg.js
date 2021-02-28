
import Button from 'react-bootstrap/Button'
import React from 'react';

export class IncomePg extends React.Component {
    constructor() {
        super();
        this.inputAlert = this.inputAlert.bind(this);
    }

    inputAlert(e){
        e.preventDefault();
        alert("Input your income");
    }


    //allows html in JAVASCRIPT
    render() {

        //return html
        return (
            <div>
                <a>Inside PG for income</a>
                <br />
                <br />
                <br />
                <h2>Graph goes here</h2>
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
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <Button  className="btn-primary" color="danger" size="lg" block>
                    Block level button
                </Button>

                <a>Input money to database here</a>
                <textarea>
                </textarea>
            
                <br/>
                <button>send info</button>

                <a href="/">return to main</a>
            </div>

        );
    }
}


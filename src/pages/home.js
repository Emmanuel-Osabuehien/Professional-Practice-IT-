
import React from 'react';
import { CarouselItem } from 'react-bootstrap';
import Carousel from "react-bootstrap/Carousel";


/*
import { goal } from "../images/goal.jpg"; // Tell webpack this JS file uses this image
import { piggy } from "../images/piggy.jpg";
import { expense } from "../images/expense.jpg";


*/


export class Home extends React.Component {

    render() {
        return (
            <div>

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../images/piggy.jpg")}
                            alt="Income"
                        />
                        <Carousel.Caption>
                            <h3>Welcome</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../images/piggy.jpg")}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Manage your money source</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../images/piggy.jpg")}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Get to your goal</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                

                <a href="/income">Income Pg</a><br />
                <a href="/expense">Expense Pg</a><br />
                <a href="/goal">Goal pg</a><br />

            </div>
        )
    }
}


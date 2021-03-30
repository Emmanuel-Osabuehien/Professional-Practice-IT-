
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
                <div className = "CarouselImage">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="CarouselImage"
                            src="https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555924863/shape/mentalfloss/166142726.jpg?itok=etJU0qfV"
                            alt="Income"
                            
                        />
                        <Carousel.Caption>
                            <h3>Welcome</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="CarouselImage"
                            src="https://p0.piqsels.com/preview/560/902/543/invoice-cash-payments-concept.jpg"
                            alt="wxpwnse"
                            

                        />

                        <Carousel.Caption>
                            <h3>Manage your money source</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="CarouselImage"
                            src="https://p0.piqsels.com/preview/340/655/774/money-icon-dollar-giving-thumbnail.jpg"
                            alt="Third slide"
                           
                        />

                        <Carousel.Caption>
                            <h3>Get to your goal</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>

               {/*  <svg xmlns="http://www.w3.org/2000/svg" class="_1aIFU _3U_6l _1uOVr" viewBox="-1 2 66 60" fill="#54A0E8" stroke="#54A0E8" stroke-width="1px" size="48"><path d="M59.31,57.9H53.23a.6.6,0,0,1,0-1.2h6.08c2.43,0,3.41-1,3.41-3.41V28.38a3,3,0,0,0-3-3H49.29l-33-.14a3.11,3.11,0,0,0-3,3.15V53.68a3,3,0,0,0,3,3h27.8a.6.6,0,0,1,0,1.2H16.31a4.22,4.22,0,0,1-4.21-4.22V28.39A4.34,4.34,0,0,1,16.31,24l31.85.13H59.71a4.21,4.21,0,0,1,4.2,4.22l0,24.91C63.93,56.35,62.38,57.9,59.31,57.9Z"></path><line x1="13.03" y1="34.29" x2="62.83" y2="34.29"></line><path d="M62.83,34.9H13a.61.61,0,0,1,0-1.21h49.8a.61.61,0,0,1,0,1.21Z"></path><line x1="19.67" y1="49.98" x2="34.56" y2="49.98"></line><path d="M34.56,50.58H19.67a.6.6,0,0,1,0-1.2H34.56a.6.6,0,0,1,0,1.2Z"></path><path d="M12.58,41.07l-.12,0-9-1.8a4.23,4.23,0,0,1-3.31-5L5.09,9.49a4.23,4.23,0,0,1,5-3.31L52.6,14.7a4.23,4.23,0,0,1,3.3,5l-1,5.23a.6.6,0,0,1-.71.47.61.61,0,0,1-.47-.71l1-5.22a3,3,0,0,0-2.36-3.54L9.82,7.36A3,3,0,0,0,6.27,9.72L1.33,34.52A3,3,0,0,0,3.7,38.06l9,1.81a.61.61,0,0,1-.12,1.2Z"></path></svg>
                */}
               

            </div>
        )
    }
}


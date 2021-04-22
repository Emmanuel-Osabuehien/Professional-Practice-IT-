
import React from 'react';
import { CarouselItem } from 'react-bootstrap';
import Carousel from "react-bootstrap/Carousel";








export class Home extends React.Component {

    render() {
        return (
            <div>
                <div style={{
                    backgroundImage: `url("https://cdn2.vectorstock.com/i/thumb-large/16/21/cartoon-paper-money-falling-on-vector-21651621.jpg")`
                }}>

                    <div className="CarouselImage">
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

                    <center>
                        <h2>6 Things Every High School Student Should Know About Money</h2>

                    </center>

                </div>

                <br /><br />

                <div className="split left">


                    <h6>1. You’re Never too Young to Save</h6>

                    <p>
                        Kids can and should have savings goals and even retirement accounts. One excellent personal finance book for kids teaches that youngsters as little as 5 or 6 should have to set savings goals.
                        Then give them a small allowance, and watch as they learn to make tough choices. Should I buy the $1 pack of gum or save that money for my longer-term goal? TIP: I’d recommend taking a look at the American Express® High Yield Savings Account.
                        They currently offer a 0.40% Annual Percentage Yield (as of 12.17.2020) and require no minimum deposit to get started.  There’s also no monthly maintenance fees, meaning teens won’t lose any of the money saved to unnecessary bank fees. In high school,
                        this can mean helping your teens set mid-term savings goals. They can save for their own prom dress, video game system, or car.
                        But high schoolers should also work towards longer-term savings. For instance, you can set up a Roth IRA for a minor child. It’s a great way to show them how to save for the very long term. And they don’t necessarily have to use that money for retirement.
                        They could also choose to use it for a down payment on their first home.
                     </p>



                    <h6>3. Compound Interest Might Bury You</h6>
                    <p>
                        On the flip side, be sure to talk about how compound interest could bury a young spender in debt. This Federal Reserve calculator is helpful for illustrating how a small credit card debt can quickly snowball out of control.
                        The calculator shows that a $1,000 credit card charge with a 19% APR could take eight years to pay off and would cost $998 in interest. Just seeing these numbers on paper can help a student grasp the dangers of uncontrolled debt.
                        Again, you can demonstrate this issue with the Bank of Mom and Dad. If your teenager just cannot wait to save up money for the next hot thing, consider lending them the cash–with a steep interest rate. That’s safer than them taking out a formal loan,
                        but can also teach them how fast compound interest can work against them.
                    </p>



                    <h6>5. College Degrees are not all Created Equal</h6>
                    <p>
                        Choosing the right school is important, but choosing the right degree may be even more so. Sure, high school students should follow their interests and talents when choosing a career path. But they should also become familiar with the current and probable future job market.

                        Just having a college degree is no longer enough to guarantee a decent job. This means that students need to do as much research as possible to ensure their degree will lead to excellent job opportunities.

                        One way to help students think through this is to have them do internships and job shadowing during high school. Sometimes getting exposure to unknown fields can light a new passion they never knew existed.
                    </p>


                </div>
                <div className="split centreImage">
                    <br />
                    <br />
                    <img
                        src="https://image.shutterstock.com/image-vector/way-spend-money-young-man-260nw-160404209.jpg"
                        width="500px"
                    />
                </div>

                <div className="split right">
                    <h6>2. Compound Interest is a Beautiful Thing</h6>
                    <p>
                        Explaining compound interest can help a savings-resistant teenager find motivation to stash away cash. This calculator from Investor.gov can help you calculate how much interest that Roth IRA could earn if your child starts saving right away.
                        For instance, start with $1,000 and add $25 a month for 40 years. If the investment earns 8% and is compounded annually, your high school student could have nearly $100,000 in savings well before retirement age.
                        You can also make this apparent by offering compound interest from the Bank of Mom and Dad starting at an early age. Consider giving your child a nickel each week for every saved dollar of allowance. It quickly becomes apparent how fast this extra cash can add
                        up–much more so than if they put it in a bank account earning .01% APR.
                    </p>

                    <h6>4. You Don’t Have to go into Debt to Pay for College</h6>
                    <p>
                        Contrary to popular belief, student loans are not required for a college degree. Some colleges, like Davidson College in Charlotte, N.C., work with students to ensure that they don’t go into debt for school.
                        Others simply offer a great education at a fraction of the private school price.
                        Students have many options for going to college without debt: attend part time, work while in school, choose a cheaper school, graduate early, start at a community college.
                        This isn’t to say that going to school debt-free should be every student’s goal. Sometimes the student loan debt is worth it. If you’re going to launch into a high-paying field within four or five years of high school, student loan debt isn’t all bad.
                        But students shouldn’t just take this debt as a fact of existence as a college student. And they should think carefully about every dollar they sign up to pay back.
                    </p>


                    <h6>6. Everyone Needs an Emergency Fund</h6>
                    <p>
                        As soon as a high school student leaves home, he or she needs an emergency fund, preferably one that doesn’t involve a line of credit. A line of credit can make a decent emergency fund for those of us with more maturity and money management experience. But for teens and twenty-somethings just beginning to manage their money, having cash to fall back on is essential.
                        In fact, it’s a good idea to help your high school student save a small emergency fund well before graduating from high school. This money can be used for emergency car repairs and other issues that might crop up during college.
                        If you’re concerned that your young college student might spend out of this account for non-emergencies, consider a co-signed account that requires your input for spending. Or at least make it a joint account that you can monitor. Just having the accountability of someone else watching what you’re spending can make you think twice before swiping that debit card.
                    </p>
                </div>


            </div>
        )
    }
}


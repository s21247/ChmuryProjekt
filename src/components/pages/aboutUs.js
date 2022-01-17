import React from 'react';
import "../styles/aboutUs.css";
import Card from "../Card/Card.js";

const AboutUs = () => {
    return (
        <>
            <div className="html">
                <div className="about-section">
                    <h1>About Us</h1>
                    <p>
                        You are cordially invited to the "name" restaurant.
                        Our restaurant bakes rolls according to our own recipe and traditional Polish way especially for
                        you, every day.
                        Our specialities are also cakes, to which we select toppings and cream with the greatest care.
                        We have made every effort to ensure that the coffee and cake will satisfy the most demanding
                        customers.
                        Apart from desserts, we serve dinner dishes, which are prepared by our chef with the greatest care.
                        We hope that your visit to our restaurant will be a beautiful culinary journey to which we would
                        like to invite you!
                    </p>
                    <p style={{color:"rgb(163, 162, 162)"}}>You can read the details at the bottom of the paragraph.
                    </p>
                </div>

                <div className="title"><h2 style={{color:"#D3B9F0"}}>Our Restaurant detailed information</h2></div>
                <div className="row">
                    <div className="column">
                        <Card imageSource={"https://image.freepik.com/darmowe-zdjecie/restauracja-w-stoly-i-krzesla-na-zewnatrz_1127-2018.jpg"}
                              imageAltText={"Building"}
                              title={"The building is located on the Zimowida 23 street"}>
                            This is a modern building which was built in 2018.
                            The building covers up to 300 guests and can be divided into different themes.
                            The rooms can be separate, or they can be combined into one large banquet hall.
                        </Card>
                    </div>
                </div>
                <div className="column">
                    <Card imageSource={"https://upload.wikimedia.org/wikipedia/commons/6/61/Restauracja_pod_Gigantami_06.JPG"}
                          imageAltText={"Inside"}
                          title={"Interior of the main restaurant room"}>
                        The interior is decorated with the highest care, which many guests have been pleased with, what attention to detail we pay.
                        The Victorian style furniture is authentic antiques adding atmosphere to the meals eaten.
                        Old Polish cuisine, which even Gordon Ramsay would not be ashamed of, attracts customers from all over the world.
                    </Card>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
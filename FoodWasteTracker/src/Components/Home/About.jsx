import React, { useState } from "react";
import "../../App.css";
import "../../assets/styles/components/About.css";
import Vision from "../../assets/Images/Vision.png";
import Mission from "../../assets/Images/Mission.png";
import Value from "../../assets/Images/Value.png";

const About = () => {
    return (
        <section className="About-section">
            <div className="container">
                <h1 className="title-about">About US</h1>
                <div className="row ">
                    <div className="col-4">
                        <img src={Vision} alt="vision" className="vision-img" />
                        <h1 className="main_title">Our Vision</h1>
                        <hr />
                        <p className="vision-text">
                        To create a world where no food goes to waste, fostering a sustainable and equitable future for all .
                        </p>
                    </div>
                    <div className="col-4">
                        <img src={Mission} alt="vision" className="vision-img" />
                        <h1 className="main_title">Our Mission</h1>
                        <hr />
                        <p className="vision-text">
                        Empowering a zero-waste future through innovative tracking technology and collaboration.
                        </p>
                    </div>
                    <div className="col-4">
                        <img src={Value} alt="vision" className="vision-img" />
                        <h1 className="main_title">Our Value</h1>
                        <hr />
                        <p className="vision-text">
  

                        Sustainability guides our actions, minimizing environmental impact for a greener future.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

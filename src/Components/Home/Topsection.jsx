import React from "react";
import "../../App.css";
import "../../assets/styles/components/Topsection.css";
import Tracking from "../../assets/Images/boxfood.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Topsection = () => {
    return (
        <section className="Main-section">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h1 className="main-title">1st Tracker System For Food</h1>
                        <p className="main-text">
                        Introducing our game-changing Food Waste Tracker, the ultimate tool for eco-conscious consumers and businesses in the Mean region. Say goodbye to wasted resources and hello to efficiency with our intuitive system. Track, analyze, and reduce food waste effortlessly, saving money and the planet simultaneously. Join the movement towards a greener Mean – because when it comes to sustainability, every scrap counts.
                        </p>
                       
                        {/* <div className="d-flex  justify-content-between card-group">
                            <ul className="list-goals">
                                <li> <span><FontAwesomeIcon icon={faCheck} /></span>Community Impact</li>
                                <li> <span><FontAwesomeIcon icon={faCheck} /></span>Awareness</li>
                                <li><span><FontAwesomeIcon icon={faCheck} /></span>Efficiency</li>
                            </ul>
                            
                        </div> */}
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-end">
                        <img src={Tracking} alt="trackingapp" className="trackingapp" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Topsection;

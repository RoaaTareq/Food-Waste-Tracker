import React, { useState } from "react";
import "../../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer= () => {
    return (
        <section className="About-section">
            <div className="container">
                
                <div className="row align-items-center ">
                    <div className="col-4">
                    <h5>Food Waste Tracker</h5>
                        <p>
                        The Food Waste Tracker revolutionizes waste reduction, empowering users with actionable insights for a greener, more sustainable future.
                        </p>
                        
                      
                    </div>
                    <div className="col-3">
                    <ul>
                        <li>Home</li>
                        <li>Career</li>
                        <li>About</li>
                    </ul>
                      
                    </div>
                    <div className="col-3">
                    <div>
                    <FontAwesomeIcon icon={faFacebook} />
                    </div>
                      
                    </div>
                   </div>
                        
                      
                
            </div>
        </section>
    );
};

export default Footer;

import React from "react";
import "../../App.css";
import "../../assets/styles/components/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <section className="footer-section">
            <hr />
            <div className="container">
                <div className="row align-items-center ">
                    <div className="col-xl-5 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <h5 className="title-footer">Food Waste Tracker</h5>
                        <p className="about-text">The Food Waste Tracker revolutionizes waste reduction, empowering users with actionable insights for a greener, more sustainable future.</p>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <h5 className="title-footer">Useful link</h5>
                        <ul className="useful-list">
                            <li className="usful-item">Home</li>
                            <li className="usful-item">Career</li>
                            <li className="usful-item">About</li>
                        </ul>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div>
                            <h5 className="title-footer">Follow US</h5>
                            <ul className="socialmedia-list">
                                <li className="item">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </li>
                                <li className="item">
                                    {" "}
                                    <FontAwesomeIcon icon={faInstagram} />
                                </li>
                                <li className="item">
                                    {" "}
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;

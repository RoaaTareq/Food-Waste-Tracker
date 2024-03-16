import React from "react";
import "../../App.css";
import "../../assets/styles/components/Topsection.css";
import Tracking from "../../assets/Images/tracker.jpg";

const Topsection = () => {
    return (
        <section className="Main-section">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <h1>Food Waste Tracker</h1>
                        <p>
                        The Food Waste Tracker revolutionizes waste reduction, empowering users with actionable insights for a greener, more sustainable future.
                        </p>
                        <h2>NuTRION FACTS</h2>
                        <div className="d-flex  justify-content-between">
                            <div className="card-info">2</div>
                            <div className="card-info">3</div>
                            <div className="card-info">4</div>
                            <div className="card-info">5</div>
                            <div className="card-info">6</div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-end">
                        <img src={Tracking} alt="trackingapp" className="trackingapp" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Topsection;

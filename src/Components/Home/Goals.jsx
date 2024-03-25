import React from "react";
import "../../App.css";
import "../../assets/styles/components/Topsection.css";
import '../../assets/styles/components/goal.css'
import Awareness from '../../assets/Images/advertising.png'
import Efficiency from '../../assets/Images/efficiency.png'
import Network from '../../assets/Images/social-network.png'
const Goals = () => {
    return (
        <section className="Goal-section">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                       
                       <h1 className="goal-title">Our Gaols</h1>
                        <div className="d-flex  justify-content-center  row gap-5">
                           <div className="card-1 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                            <img src={Awareness} alt="Awareness"  className="icon"/>
                          
                           <h6 className="sub-title">Awareness</h6>
                           </div>
                           <div className="card-2 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                           <img src={Efficiency} alt="Efficiency"  className="icon"/>
                           <h6 className="sub-title">Efficiency</h6>
                           </div>
                           <div className="card-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                           <img src={Network} alt="Network"  className="icon"/>
                           <h6 className="sub-title">Community Impact</h6>
                           </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </section>
    );
};

export default Goals;

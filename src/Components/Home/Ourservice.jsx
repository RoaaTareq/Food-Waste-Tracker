import React from "react";
import '../../assets/styles/components/Sector.css'

const Sector = () => {
    return (
        <section className="Service-section">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                       
                       <h1 className="goal-title">Our Sector</h1>
                        <div className="d-flex  justify-content-center  row gap-5">
                           <div className="card-1 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                            
                           <h6 className="sub-title">Hotel</h6>
                           </div>
                           <div className="card-2 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                           
                           <h6 className="sub-title">Hospital</h6>
                           </div>
                           <div className="card-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                           
                           <h6 className="sub-title">resturant</h6>
                           </div>
                           <div className="card-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                           
                           <h6 className="sub-title">Others</h6>
                           </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </section>
    );
};

export default Sector;

import React from "react";
import "../../App.css";
import '../../assets/styles/components/team.css'
import Team from '../../assets/Images/Team.png'

const About = () => {
    return (
        <section className="team-section">
            <div className="container">
                
                <div className="row align-items-center ">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        
                      <img src={Team} alt="Jointeam" />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        
                      <h1>Join Our team</h1>
                      <button className="btn-jointeam">Join Our team</button>
                      </div>
                </div>
            </div>
        </section>
    );
};

export default About;

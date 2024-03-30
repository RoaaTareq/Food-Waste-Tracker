import React from "react";
import "../../App.css";
import "../../assets/styles/components/contact.css";
import { useTranslation } from 'react-i18next';


const About = () => {
    const { t , i18n } = useTranslation();
    const mainrtl = i18n.language === 'ar';
    return (
        <section   className={mainrtl ? 'mainrtl' : ''}>
            <div className="container">
               
                
            <div className="screen">
      <div className="screen-header">
        <div className="screen-header-left">
          <div className="screen-header-button close"></div>
          <div className="screen-header-button maximize"></div>
          <div className="screen-header-button minimize"></div>
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
        </div>
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control" placeholder="Your Name" />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="Your Email"/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="Contact NO"/>
            </div>
            <div className="app-form-group message">
              <input className="app-form-control" placeholder="Message"/>
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button">Cancel</button>
              <button className="app-form-button">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  
          </div>
         
        </section>
    );
};

export default About;

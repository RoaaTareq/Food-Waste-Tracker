import React from "react";
import "../../App.css";
import "../../assets/styles/components/About.css";
import { useTranslation } from 'react-i18next';
import Vision from "../../assets/Images/Vision.png";
import Mission from "../../assets/Images/Mission.png";
import Value from "../../assets/Images/Value.png";

const About = () => {
    const { t , i18n } = useTranslation();
    const mainrtl = i18n.language === 'ar';
    return (
        <section   className={mainrtl ? 'mainrtl' : ''}>
            <div className="container">
                <div className="row align-items-center ">
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12">
                        <img src={Vision} alt="vision" className="vision-img" />
                        </div>
                        
                        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12" >
                        <h1 className="main_title">{t('vision')}</h1>
                        <p className="vision-text">
                        {t('vision-text')}
                        </p>
                       
                    </div>
                   
                    
                </div>
                
                <div className="row align-items-center ">
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12">
                    <h1 className="main_title">{t('mission')}</h1>
                        <p className="vision-text">
                        {t('mission-text')}
                        </p>
                        </div>
                        
                        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12" >
                        <img src={Mission} alt="vision" className="vision-img" />
                       
                       
                    </div>
                   
                    
                </div>
                <div className="row align-items-center">
                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 cal card-value">
                        <img src={Value} alt="vision" className="vision-img" />
                        
                    </div>
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 ">
                    <h1 className="main_title">{t('goals')}</h1>
                        
                        <p className="vision-text">
  

                        {t('goals-text')}
                        </p>
                    </div>
                </div>
          
            </div>
        </section>
    );
};

export default About;

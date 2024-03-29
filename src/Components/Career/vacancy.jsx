import React from "react";
import "../../App.css";
import '../../assets/styles/components/team.css'
import { useTranslation } from 'react-i18next';


const About = () => {
    const { t , i18n } = useTranslation();
    const mainrtl = i18n.language === 'ar';
    return (
        <section   className={mainrtl ? 'mainrtl' : ''}>
            <div className="container">
            
                <div className="row align-items-center text-center">
                    <div className="col-xl-12 col-lg-12col-md-12 col-sm-12 col-xs-12">
                       <h1>{t('vacancy')}</h1> 
                    
                </div>
                
                </div>

                <div className="row align-items-center ">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <h1>{t('job-title')}</h1>
                      <p>
                      {t('job-text')}
                      </p>
                      <button className="btn-apply">{t('btn-apply')}</button>
                    
                </div>
                
                </div>
          
            </div>
        </section>
    );
};

export default About;

import React from "react";
import "../../App.css";
import '../../assets/styles/components/team.css'
import Upload from '../../assets/Images/Upload.png'
import { useTranslation } from 'react-i18next';


const About = () => {
    const { t , i18n } = useTranslation();
    const mainrtl = i18n.language === 'ar';
    return (
        <section   className={mainrtl ? 'mainrtl' : ''}>
            <div className="container">
            
                <div className="row align-items-center ">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                       <h1> {t('upload')}</h1> 
                       <p>{t('upload-text')}</p>
                       <button className="btn-apply">{t('btn-upload')}</button>
                    
                </div>
                <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-xs-12">
                       <img src={Upload} alt="upload" className="uploadcv" />
                    
                </div>
                
                

                
                
                </div>
          
            </div>
        </section>
    );
};

export default About;

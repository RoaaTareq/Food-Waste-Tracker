import React from "react";
import "../../App.css";
import "../../assets/styles/components/Topsection.css";
import Tracking from "../../assets/Images/boxfood.png";
import { useTranslation } from 'react-i18next';

const Topsection = () => {
    const { t , i18n } = useTranslation();
    const mainrtl = i18n.language === 'ar';
    return (
        <section className={mainrtl ? 'mainrtl' : ''}>
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h1 className="main-title">{t('main-title')}</h1>
                        <p className="main-text">
                       {t('text-main')}
                        </p>
                       
                        
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-end">
                        <img src={Tracking} alt="trackingapp" className="trackingapp" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Topsection;

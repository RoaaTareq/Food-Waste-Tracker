import React from "react";
import { useTranslation } from 'react-i18next';
import '../../assets/styles/components/Service.css'
import data from '../../assets/Images/data.png'
import analysis from '../../assets/Images/analysis.png'
import calculator from '../../assets/Images/calculator.png'
import deliverybox from '../../assets/Images/delivery-box.png'

const Sector = () => {
    const { t , i18n } = useTranslation();
    const mainrtl = i18n.language === 'ar';
    return (
        <section className="Service-section">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                       
                       <h1 className="service-title">{t('ourservice')}</h1>
                        <div className="d-flex  justify-content-center  row gap-5">
                           <div className="card col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                            <img src={data} alt="collectdata"  className="data-imag"/>
                           <h6 className="sub-title">{t('collect')}</h6>
                           </div>
                           <div className="card col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                           <img src={analysis} alt="analysis"  className="data-imag"/>
                           <h6 className="sub-title">{t('analysis')} </h6>
                           </div>
                           <div className="card col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                            <img src={calculator} alt="calculator" className="data-imag" />
                           
                           <h6 className="sub-title">{t('track')}</h6>
                           </div>
                            <div className="card col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                           <img src={deliverybox} alt="deliverybox" className="data-imag" />
                           <h6 className="sub-title">{t('Other')}</h6>
                           </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </section>
    );
};

export default Sector;

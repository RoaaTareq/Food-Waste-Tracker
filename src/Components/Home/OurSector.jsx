import React from "react";
import { useTranslation } from 'react-i18next';
import '../../assets/styles/components/Sector.css'
import Hospital from '../../assets/Images/hospital.png'
import resturent from '../../assets/Images/cutlery.png'
import building from '../../assets/Images/building.png'
import deliverybox from '../../assets/Images/delivery-box.png'
const Sector = () => {
    const { t , i18n } = useTranslation();
    return (
        <section className="Sector-section">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                       
                       <h1 className="goal-title">{t('sector')}</h1>
                        <div className="d-flex  justify-content-center  row gap-5 slide-container">
                           <div className="card-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                            <img src={building} alt="building"  className="img-sector"/>
                           <h6 className="sub-title">{t('Hotel')}</h6>
                           </div>
                           <div className="card-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                           <img src={Hospital} alt="Hospital"  className="img-sector"/>
                           <h6 className="sub-title">{t('Hospital')}</h6>
                           </div>
                           <div className="card-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                           <img src={resturent} alt="resturent" className="img-sector" />
                           <h6 className="sub-title">{t('resturant')}</h6>
                           </div>
                           <div className="card-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                           <img src={deliverybox} alt="deliverybox" className="img-sector"/>
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

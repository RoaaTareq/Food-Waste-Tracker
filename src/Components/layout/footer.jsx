import React from "react";
import "../../App.css";
import { useTranslation } from 'react-i18next';
import "../../assets/styles/components/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const { t , i18n } = useTranslation();
    const mainrtl = i18n.language === 'ar';
    const isArabic=i18n.language === 'ar'
    return (
        <section className={ mainrtl ? 'mainrtl' : ''}>
            <hr />
            <div className="container">
                <div className="row align-items-center ">
                    <div className="col-xl-5 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <h1 className="main-title">Food <sub>Limit</sub></h1>
                    <p className="main-text">
                       {t('text-main')}
                        </p>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <h5 className={isArabic ? 'title-footer-ar' : 'title-footer '}>{t('useful')} </h5>
                        <ul className="useful-list">
                            <li className="usful-item">{t('home')}</li>
                            <li className="usful-item">{t('about')}</li>
                            <li className="usful-item">{t('career')}</li>
                        </ul>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div>
                            <h5 className={isArabic ? 'title-footer-ar' : 'title-footer '}>{t('Follow')}</h5>
                            <ul className="socialmedia-list">
                                <li className="item">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </li>
                                <li className="item">
                                    {" "}
                                    <FontAwesomeIcon icon={faInstagram} />
                                </li>
                                <li className="item">
                                    {" "}
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;

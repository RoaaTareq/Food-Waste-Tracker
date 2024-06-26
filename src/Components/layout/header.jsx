import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "../../assets/styles/components/header.css";
import LanguageSwitcher from './LanguageSwitcher';
import Mobheader from './menu'
import '../../App.css';
import '../../assets/styles/global/global.css'

const Header = () => {
    const { t , i18n } = useTranslation();
    const mainrtl = i18n.language === 'ar';
    

    return (
        <header className={mainrtl ? 'mainrtl' : ''} >
            <div className="container web-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                    <Link to="/">
                        <h1 className="main-title">Food <sub>Watch</sub></h1>
                        </Link>
                    </div>
                    
                    <ul className="Main-list">
                    <Link to="/">  <li>{t('home')}</li></Link>
                    <Link to="/about">   <li>{t('about')}</li></Link>
                    <Link to="/career"> <li>{t('career')}</li></Link>
                    <Link to="/contact">    <li>{t('contact')}</li></Link>
                    </ul>
                    <div className="d-flex align-items-center gap-3">
                        <LanguageSwitcher />
                        <Link to="/login">
                            <button className="btn-login">{t('login')}</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Mobheader/>
        </header>
    );
};

export default Header;

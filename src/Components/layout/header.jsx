import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "../../assets/styles/components/header.css";
import LanguageSwitcher from './LanguageSwitcher';
import Mobheader from './menu'
import '../../App.css';

const Header = () => {
    const { t , i18n } = useTranslation();
    const mainrtl = i18n.language === 'ar';
    

    return (
        <header className={mainrtl ? 'mainrtl' : ''} >
            <div className="container web-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h1 className="main-title">Food <sub>Limit</sub></h1>
                        
                    </div>
                    
                    <ul className="Main-list">
                        <li>{t('home')}</li>
                        <li>{t('about')}</li>
                        <li>{t('career')}</li>
                        <li>{t('contact')}</li>
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

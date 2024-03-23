import React from "react";
import "../../assets/styles/components/header.css";
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import '../../App.css'

const Header = () => {
    const { t , i18n } = useTranslation();
    const mainrtl = i18n.language === 'ar';
    return (
        <header className={mainrtl ? 'mainrtl' : ''} >
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h1 className="main-title">{t('logo')}</h1>
                    </div>
                    <ul class="Main-list ">
                        <li>{t('home')}</li>
                        <li>{t('about')}</li>
                        <li>{t('career')}</li>
                        <li>{t('contact')}</li>
                    </ul>
                    <div className="d-flex align-items-center gap-3">
                    <LanguageSwitcher />
                        <button className="btn-login">{t('login')}</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

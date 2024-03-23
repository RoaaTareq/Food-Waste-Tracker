import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../assets/styles/components/header.css'

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    window.history.replaceState({}, document.title, `?lang=${newLang}`);
  };

  return (
    <div>
      <button onClick={toggleLanguage} className='btn-lang'>
        {i18n.language === 'en' ? t('ar') : t('en')}
      </button>
    </div>
  );
}

export default LanguageSwitcher;

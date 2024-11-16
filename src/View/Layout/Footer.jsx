

import React from 'react';
import { useTranslation } from 'react-i18next';


const Footer = () => {
  const { i18n } = useTranslation(); 

  return ( 
    <footer className='footer'>
        
            <p>{i18n.t('copy')}</p>
       
  
     
    </footer>
  );
};

export default Footer;

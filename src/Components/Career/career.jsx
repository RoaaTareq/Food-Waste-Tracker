import React from "react";
import "../../App.css";
import { useTranslation } from 'react-i18next';
import Team from './jointeam'
import Vacancy from './vacancy'
import Upload from './upload'


const About = () => {
    const { t , i18n } = useTranslation();
    const mainrtl = i18n.language === 'ar';
    return (
        <section   className={mainrtl ? 'mainrtl' : ''}>
            <div className="container">
                <Team/>
                <Vacancy/>
                <Upload/>
                     
            </div>
        </section>
    );
};

export default About;

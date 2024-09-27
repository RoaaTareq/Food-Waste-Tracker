import React from 'react';
import styles from './CSS/Home.module.css';
import Card from '../../Components/Card/Card';
import Hospitals from '../../assets/Images/homeicon.svg';
import Hotel from '../../assets/Images/hotelicon.svg';
import Company from '../../assets/Images/componyicon.svg';
import Food from '../../assets/Images/foodicon.svg';

function Home() {
    return (
        <section className={styles['about']}>
            <div className="container">
                <h1 className='mt-4 mb-4'>Our Services</h1>
                <div className="d-flex">
                    <div>
                        <Card
                            image={Hospitals}
                            title="Residential"
                            description="Weekly pickup service for your home or apartment"
                            className="custom-card"
                        />
                    </div>
                    <div>
                        <Card
                            image={Hotel}
                            title="Hotels"
                            description="Customized pickup service for your business"
                            className="custom-card"
                        />
                    </div>
                    <div>
                        <Card
                            image={Company}
                            title="Commercial"
                            description="Customized pickup service for your business"
                            className="custom-card"
                        />
                    </div>
                    <div>
                        <Card
                            image={Food}
                            title="Uncover inefficiencies"
                            description="Optimize inventory and purchasing"
                            className="custom-card"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;

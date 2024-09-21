import React from 'react'
import styles from './CSS/Home.module.css'
import Golbal from '../../assets/Images/Global.png'
function Home (){
    return(
    <section className={styles['Home-section']}>
    <div className="container">
    <div className="row align-items-center">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <h1 className={styles['Main-title']}>Tracking food waste System</h1>
        <p  className={styles['Main-text']}>Empowering organizations to contribute to building a sustainable food system for everyone.</p>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <img src={Golbal} alt="golbal" className='image w-100' />
        </div>
    </div>
    </div>
</section>
    )
}

export default Home
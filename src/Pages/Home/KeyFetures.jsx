import React from 'react'
import styles from './CSS/Home.module.css'
import Card from '../../Components/Card/Card'
import Cost from '../../assets/Images/Cost.png'
import Monitoring from '../../assets/Images/analysis.png'
import RealTime from '../../assets/Images/delivery-box.png'

function Home (){
    return(
    <section className={styles['Features']}>
    <div className="container">
        <h1 className='title'>Key Features</h1>
    <div className="row align-items-center ">
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <Card
        title="Reports for cost savings and sustainability."
        image={ Cost}
        className="custom-card "
      />
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <Card
        title="Food waste monitoring and evalutaing"
        image={Monitoring}
    
        className="custom-card "
      />
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <Card
        title="Real-time tracking and data analytics"
        image={RealTime}
    
        className="custom-card"
      />
        </div>
    </div>
    </div>
</section>
    )
}

export default Home
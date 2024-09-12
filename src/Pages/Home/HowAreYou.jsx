import React from 'react'
import styles from './CSS/Home.module.css'
import Card from '../../Components/Card/Card'
import Value from '../../assets/Images/Value.png'
import Mission from '../../assets/Images/Mission.png'
import Vision from '../../assets/Images/Vision.png'

function Home (){
    return(
    <section className={styles['about']}>
    <div className="container">
        <h1 className='title-about'> How Are You ?</h1>
    <div className="row align-items-center ">
        <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <Card
        title="Vision"
        image={Vision}
        description="To lead the healthcare sector in minimizing food waste, promoting sustainability, and ensuring optimal resource management, while contributing to a healthier planet and enhancing hospital efficiency."
        className="custom-card "
      />
      
        </div>
        <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <Card
        title="Mission"
        image={Mission}
    description={"Our mission is to empower hospitals and healthcare facilities with an innovative, data-driven system that tracks, analyzes, and reduces food waste. By providing actionable insights, we help reduce operational costs, improve environmental sustainability, and promote a culture of efficiency in hospital kitchens."}
        className="custom-card "
      />
        </div>
        <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <Card
        title="Value"
        image={Value}
       description={"Our values center on **sustainability** and **efficiency**, helping hospitals reduce food waste and optimize resources. We prioritize **innovation** and **accountability** to drive transparency and improvement, fostering **collaboration** for impactful, lasting change in healthcare and the environment."}
        className="custom-card"
      />
        </div>
    </div>
    </div>
</section>
    )
}

export default Home
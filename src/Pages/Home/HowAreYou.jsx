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
        <h1 className='title'> How Are You ?</h1>
    <div className="row align-items-center ">
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <Card
        title="Reports for cost savings and sustainability."
        image={ Value}
        
        className="custom-card "
      />
      
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <Card
        title="Food waste monitoring and evalutaing"
        image={Mission}
    
        className="custom-card "
      />
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <Card
        title="Vision"
        image={Vision}
         text="To lead the healthcare sector in minimizing food waste, promoting sustainability, and ensuring optimal resource management, while contributing to a healthier planet and enhancing hospital efficiency."

        className="custom-card"
      />
        </div>
    </div>
    </div>
</section>
    )
}

export default Home
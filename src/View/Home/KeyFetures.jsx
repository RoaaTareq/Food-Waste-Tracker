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
        <h3 className='mt-4'>What you get with Waste Track ?</h3>
       
    <div className="d-flex m-auto">
        <div >
        <Card
        title="Real-time insights"
       description="Track food waste as it happens"
        className="custom-card "
      />
        </div>
        <div >
        <Card
        title="Data-driven recommendations"
       
    description="AI-powered insights that help you reduce waste"
        className="custom-card "
      />
        </div>
        <div >
        <Card
        title="Reduce food waste"
         description="Save up to 6% on food costs"
    
        className="custom-card"
      />
        </div>
        <div >
        <Card
        title="Uncover inefficiencies"
        description="Optimize inventory and purchasing"
    
        className="custom-card"
      />
        </div>
    </div>
    </div>
</section>
    )
}

export default Home
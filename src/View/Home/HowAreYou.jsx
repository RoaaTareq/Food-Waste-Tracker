import React from 'react'
import styles from './CSS/Home.module.css'
import Card from '../../Components/Card/Card'


function Home (){
    return(
       <section className={styles['about']}>

    <div className="container">
        <h5 >What you get with Waste Track</h5>
        <span>Waste Track provides the insight and tools you need to reduce food waste and run a more efficient kitchen.</span>
    <div className="d-flex">
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
import React from 'react';
import styles from './CSS/Home.module.css';


function Home() {
    return (
        <section className={styles['join']}>
            <div className="container">
                <h1 className='mt-4 mb-4'>Join Us</h1>
                <p className='mt-4 mb-4 w-50'>We're on a mission to end food waste, and we need your help to do it. Whether you're a hospital or restaurant looking to reduce your food waste or a passionate individual looking to make a difference, we'd love to hear from you. Get in touch with us today to learn more about our system and how we can help you track, reduce, and report your food waste.</p>
                <button className='btn-join mb-4'>Get in touch</button>
               
            </div>
            
        </section>
    );
}

export default Home;

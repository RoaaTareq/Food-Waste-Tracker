import React from 'react'
import TopSection from './Topsection'
import KeyFeatures from './KeyFetures'
import HowAre from'./HowAreYou'
import JoinUs from './JoinUs'
import Footer from '../Layout/Footer'
function Home(){
    return(
        <>
        <TopSection/>
        <KeyFeatures/>
        <HowAre/>
        <JoinUs/>
        <Footer/>
        </>
    )
}

export default Home
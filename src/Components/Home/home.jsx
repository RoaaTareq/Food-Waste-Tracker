import React from 'react';
import Topsection from './Topsection';
import Goals from './Goals';
import About from './About'
import Team from './Jointeam'
import Sector from './OurSector';
import Service from './Ourservice'
const Home = () => {
 

  return (
    <div>
      <Topsection/>
      <Goals/>
      <Service/>
      <Sector/>
      
    {/* <About/>
    <Team/> */}
    
    </div>
  );
};

export default Home;

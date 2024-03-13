import React, { useState } from 'react';
import Topsection from './Topsection';
import About from './About'
import Team from './Jointeam'
const Home = () => {
 

  return (
    <div>
      <Topsection/>
    <About/>
    <Team/>
    </div>
  );
};

export default Home;

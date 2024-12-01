import React from 'react';
import Button from '../../../Components/Buttons/Buttons';
import Table from './Table'
import { Link } from 'react-router-dom';
function Header() {
  

 

  return (
    <div>
      <div className="d-flex justify-content-between pt-5">
        <h1 className='main-title'>Food Waste Info</h1>
        <div>
          <Link to='/employee/create-food' className="btn btn-primary mb-2 me-2" >
           Add Food Item
          </Link>
          <Link  className="btn btn-primary mb-2 me-2" >
          Export CVs
          </Link>
        </div>
      </div>
<Table/>
     
    </div>
  );
}

export default Header;

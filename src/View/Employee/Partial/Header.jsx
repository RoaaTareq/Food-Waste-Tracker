import React from 'react';
import Button from '../../../Components/Buttons/Buttons';
import Table from './Table'
import { Link } from 'react-router-dom';
function Header() {
  

 

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>Food Waste Info</h1>
        <div>
          <Link to='create/food' className="btn-add" >
           Add Food Item
          </Link>
        </div>
      </div>
<Table/>
     
    </div>
  );
}

export default Header;

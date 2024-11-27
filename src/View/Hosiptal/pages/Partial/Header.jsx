import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
 

  return (
    <section>
      <div className='container'>
       <div className="d-flex justify-content-between pt-4">
        <h1 className='main-title'>Employee Info</h1>
        <Link  to="/hospital/member/add-employee" className='btn btn-primary mb-2' >
          Add Employee +
        </Link>
       </div>
      </div>

     
    </section>
  );
}

export default Header;

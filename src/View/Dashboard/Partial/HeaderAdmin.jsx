import React, { useState } from 'react';
import Button from '../../../Components/Buttons/Buttons'
// import Create from '../Models/CreateAdmin'; // Assuming Create is in the same folder
// import styles from '../../CSS/Header.module.css';

function Header() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(prevState => !prevState); // Toggles form visibility
  };

  return (
    <div>
      <div className='button-container'>
        <Button  className='btn-add'>
         Add Admin +
        </Button>
      </div>
      
     
    </div>
  );
}

export default Header;

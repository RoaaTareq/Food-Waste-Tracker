import React, { useState } from 'react';
import Button from '../../../../Components/Buttons/Buttons';
// import Create from '../Models/CreateAdmin'; // Assuming Create is in the same folder
// import styles from '../../CSS/Header.module.css';

function Header() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(prevState => !prevState); // Toggles form visibility
  };

  return (
    <div>
      <div className={styles['button-container']}>
        <Button onClick={handleButtonClick} className={styles['btn-add']}>
          {showForm ? 'Close Form' : 'Add Admin +'}
        </Button>
      </div>
      
      {showForm && (
        <div className={styles['form-container']}>
          <Create />
        </div>
      )}
    </div>
  );
}

export default Header;

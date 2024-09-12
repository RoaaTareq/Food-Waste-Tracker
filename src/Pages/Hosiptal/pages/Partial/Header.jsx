import React, { useState } from 'react';
import Button from '../../../../Components/Buttons/Buttons';
import styles from '../../CSS/Header.module.css';
import HospitalRegister from '../Models/CreateHosiptal'; // Import the HospitalRegister form

function Header() {
  const [showForm, setShowForm] = useState(false);

  const handleAddHospitalClick = () => {
    setShowForm(!showForm); // Toggle the form visibility
  };

  return (
    <div>
      <div className={styles['button-container']}>
        <Button className={styles['btn-add']} onClick={handleAddHospitalClick}>
          Add Hospital +
        </Button>
      </div>

      {/* Conditionally render the form based on showForm */}
      {showForm && <HospitalRegister />}
    </div>
  );
}

export default Header;

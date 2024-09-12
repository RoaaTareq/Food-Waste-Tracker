import React, { useState } from 'react';
import Button from '../../../../Components/Buttons/Buttons';
import styles from '../../CSS/Header.module.css'

function Header() {
  const [showForm, setShowForm] = useState(false);



  return (
    <div>
      <div className={styles['button-container']}>
        <Button className={styles['btn-add']}>
        Add Hospital +
        </Button>
      </div>
      
     
    </div>
  );
}

export default Header;

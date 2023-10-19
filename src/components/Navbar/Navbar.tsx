import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <span className={styles.logo}>Drink<span className={styles.logoMe}>.it</span></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
import React from 'react';
import styles from './Footer.module.css';
import Container from '../Container/Container';

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <Container>
        <div className={styles.footer}>
          <span>@ Drink.it 2023</span>
        </div>
      </Container>
    </div>
  )
}

export default Footer
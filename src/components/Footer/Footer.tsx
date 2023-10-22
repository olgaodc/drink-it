import React from 'react';
import styles from './Footer.module.css';
import Container from '../Container/Container';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <Container>
        <footer className={styles.footer}>
          <nav className={styles.footerNavigation}>
            <span className={styles.logo}>
              Drink
              <span className={styles.logoMe}>
                .it
              </span>
            </span>
            <ul className={styles.navbarList}>
              <li className={styles.listItem}>
                <Link className={styles.itemLink} href={'/'}>
                  Home
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link className={styles.itemLink} href={'/cocktails'}>
                  Cocktails
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link className={styles.itemLink} href={'/random-cocktail'}>
                  Random cocktail
                </Link>
              </li>
            </ul>
          </nav>

          <div className={styles.footerBottom}>@ Drink.it 2023</div>
        </footer>
      </Container>
    </div>
  )
}

export default Footer
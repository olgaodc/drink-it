import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import Container from '../Container/Container';

const Navbar = () => {
  return (
    <header className={styles.navbarWrapper}>
      <Container>
        <nav className={styles.navbar}>
          <Link className={styles.logo} href={'/'}>
            Drink
            <span className={styles.logoMe}>
              .it
            </span>
          </Link>
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
      </Container>
    </header>
  )
}

export default Navbar;
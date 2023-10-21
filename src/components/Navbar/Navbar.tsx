import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import Container from '../Container/Container';

const DesktopMenu = () => {
  return (
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
  )
}

const MobileMenu = (props: { isMenuOpen: boolean; }) => {
  return (
    <div className={`${styles.mobileMenuWrapper} ${props.isMenuOpen ? styles.menuOpened : styles.menuClosed}`}>
      <ul className={styles.mobileMenu}>
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
    </div>
  )
}

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

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
          <DesktopMenu />
          <div onClick={() => {
            setMenuOpen((prevState) => !prevState);
          }} className={styles.hamburgerMenu}>
            <div className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></div>
            <div className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></div>
            <div className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></div>
          </div>
        </nav>
        <MobileMenu isMenuOpen={isMenuOpen} />
      </Container>
    </header>
  )
}

export default Navbar;
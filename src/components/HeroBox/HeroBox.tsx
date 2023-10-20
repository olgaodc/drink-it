import React from 'react';
import styles from './HeroBox.module.css';
import CocktailsImage from '../../assets/pink-cocktails.jpg';
import Container from '../Container/Container';

const HeroBox = () => {
  return (
    <div className={styles.heroBoxWrapper}>
      <Container>
        <div className={styles.heroBox}>
          <div className={styles.heroInfo}>
            <h1 className={styles.subtitle}>Let's have a</h1>
            <h2 className={styles.title}>cocktail</h2>
            <p className={styles.description}>We all love cheeky cocktail, who doesn't? Whether it's sweet or sour, gin or vodka, we have a cocktail to suit you. Get ahead of the crowd out what we have to offer and find you new favorite. Call it "research", we won't tell anyone...</p>
          </div>
          <img className={styles.image} src={CocktailsImage.src} />
        </div>
      </Container>
    </div>
  )
}

export default HeroBox
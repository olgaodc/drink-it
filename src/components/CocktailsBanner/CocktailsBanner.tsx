import React from 'react';
import styles from './CocktailsBanner.module.css';
import Container from '../Container/Container';
import BartenderImage from '../../assets/bartender.png';

const CocktailsBanner = () => {
  return (
    <div className={styles.bgColor}>
      <Container>
        <div className={styles.bannerWrapper}>
          <div className={styles.banner}>
            <img className={styles.image} src={BartenderImage.src} />
            <div className={styles.bannerInfo}>
              <h1 className={styles.subtitle}>Don't know cocktail name?</h1>
              <h2 className={styles.title}>Search by ingredient</h2>
              <button>Try It</button>
            </div>

          </div>
        </div>
      </Container>
    </div>
  )
}

export default CocktailsBanner
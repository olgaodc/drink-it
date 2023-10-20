import React from 'react';
import styles from './CocktailBanner.module.css';
import Container from '../Container/Container';
import CocktailImage from '../../assets/cocktail-question.png';

const CocktailBanner = () => {
  return (
    <div className={styles.bgColor}>
      <Container>
        <div className={styles.bannerWrapper}>
          <div className={styles.banner}>
            <img className={styles.image} src={CocktailImage.src} />
            <h1 className={styles.subtitle}>Or try your fortune and get</h1>
            <h2 className={styles.title}>random cocktail</h2>
            <button>Try It</button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CocktailBanner
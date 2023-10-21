import React from 'react';
import styles from './CocktailBanner.module.css';
import Container from '../Container/Container';
import CocktailImage from '../../assets/pink-cocktails.jpg';
import Button from '../Button/Button';
import { useRouter } from 'next/router';

const CocktailBanner = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/random-cocktail`);
  }

  return (
    <div className={styles.bgColor}>
      <Container>
        <div className={styles.bannerWrapper}>
          <div className={styles.banner}>
            <div className={styles.bannerInfo}>
              <h1 className={styles.subtitle}>Try fortune and get</h1>
              <h2 className={styles.title}>random cocktail</h2>
              <Button onClick={handleClick}>Try It</Button>
            </div>
            <img className={styles.image} src={CocktailImage.src} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CocktailBanner
import React from 'react';
import styles from './CocktailsBanner.module.css';
import Container from '../Container/Container';
import BartenderImage from '../../assets/bartender.png';
import BlobImage from '../../assets/blob.svg';
import Button from '../PrimaryButton/PrimaryButton';
import { useRouter } from 'next/router';

const CocktailsBanner = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/cocktails`);
  }
  
  return (
    <div className={styles.bgColor}>
      <Container>
        <div className={styles.bannerWrapper}>
          <div className={styles.banner}>
            <img className={styles.image} src={BartenderImage.src} />
            <div className={styles.bannerInfo}>
              <h1 className={styles.subtitle}>Don't know cocktail name?</h1>
              <h2 className={styles.title}>Search by ingredient</h2>
              <Button onClick={handleClick}>Try It</Button>
              <img className={styles.blurImage} src={BlobImage.src} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CocktailsBanner
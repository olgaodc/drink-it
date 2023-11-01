import React from 'react';
import { useRouter } from 'next/router';
import styles from './CocktailBanner.module.css';
import Container from '../Container/Container';
import BottlesImage from '../../assets/cocktail-jars.jpg';
import BarImage from '../../assets/cocktail-bar.jpg';
import CitrusImage from '../../assets/cocktail-citrus.jpg';
import CubesImage from '../../assets/cocktail-cubes2.jpg';
import Button from '../PrimaryButton/PrimaryButton';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const CocktailBanner = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/random-cocktail`);
  }

  return (
    <div className={styles.bannerWrapper}>
      <Container>
        <div className={styles.banner}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 530: 2, 800: 3 }}
          >
            <Masonry columnsCount={3} gutter="15px">
              <img className={styles.image} src={CitrusImage.src} alt="dried citrus slices" />
              <div className={styles.bannerInfo}>
                <h1 className={styles.subtitle}>Try fortune and get</h1>
                <h2 className={styles.title}>random cocktail</h2>
                <Button onClick={handleClick}>Try It</Button>
              </div>
              <img className={styles.image} src={BarImage.src} alt="mobile cocktail bar truck" />
              <img className={styles.image} src={BottlesImage.src} alt="three cocktail dispensers in the garden" />
              <img className={styles.image} src={CubesImage.src} alt="fruit-infused ice cubes" />
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </Container >
    </div >
  )
}

export default CocktailBanner
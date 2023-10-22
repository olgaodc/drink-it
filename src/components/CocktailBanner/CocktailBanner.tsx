import React from 'react';
import styles from './CocktailBanner.module.css';
import Container from '../Container/Container';
import BottlesImage from '../../assets/cocktail-jars.jpg';
import BarImage from '../../assets/cocktail-bar.jpg';
import CitrusImage from '../../assets/cocktail-citrus.jpg';
// import MenuImage from '../../assets/cocktail-menu.jpg';
import CubesImage from '../../assets/cocktail-cubes2.jpg';
import Button from '../Button/Button';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useRouter } from 'next/router';

const CocktailBanner = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/random-cocktail`);
  }

  return (
    <div className={styles.bgColor}>
      <Container>
        {/* <div className={styles.bannerWrapper}>
          <div className={styles.banner}>
            <div className={styles.bannerInfo}>
              <h1 className={styles.subtitle}>Try fortune and get</h1>
              <h2 className={styles.title}>random cocktail</h2>
              <Button onClick={handleClick}>Try It</Button>
            </div>
            <img className={styles.image} src={CocktailImage.src} />
          </div>
        </div> */}
        <div className={styles.banner}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 530: 2, 800: 3 }}
          >
            <Masonry columnsCount={3} gutter="15px">
              <img className={styles.image} src={CitrusImage.src} />


              <div className={styles.bannerInfo}>
                <h1 className={styles.subtitle}>Try fortune and get</h1>
                <h2 className={styles.title}>random cocktail</h2>
                <Button onClick={handleClick}>Try It</Button>
              </div>
              <img className={styles.image} src={BarImage.src} alt="" />
              <img className={styles.image} src={BottlesImage.src} alt="" />
              <img className={styles.image} src={CubesImage.src} alt="" />


            </Masonry>
          </ResponsiveMasonry>
        </div>



        {/* <div className={styles.bannerWrapper}>
          <div className={styles.banner}>
            <img className={styles.image} src={BottlesImage.src} alt="" />
            <div className={styles.bannerInfo}>
              <h1 className={styles.subtitle}>Try fortune and get</h1>
              <h2 className={styles.title}>random cocktail</h2>
              <Button onClick={handleClick}>Try It</Button>
            </div>
            <img className={styles.image} src={CocktailImage.src} />
            <img className={styles.image} src={BarImage.src} alt="" />
            <img className={styles.image} src={BarImage.src} alt="" />
            <img className={styles.image} src={BarImage.src} alt="" />
          </div> */}
      </Container >
    </div >
  )
}

export default CocktailBanner
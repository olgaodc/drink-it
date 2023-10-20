import React from 'react';
import styles from './HeroBox.module.css';
import CarouselImage1 from '../../assets/carousel-image-1.jpeg';
import CarouselImage2 from '../../assets/carousel-image-2.jpeg';
import CarouselImage3 from '../../assets/carousel-image-3.jpeg';
import CarouselImage4 from '../../assets/carousel-image-4.jpeg';
import { Carousel } from 'antd';
import Container from '../Container/Container';

const HeroBox = () => {

  return (
    <Container>
      <div className={styles.carouselWrapper}>
        <Carousel autoplay >
          <div>
            <img className={styles.carouselImage} src={CarouselImage1.src} alt="first slide" />
          </div>
          <div>
            <img className={styles.carouselImage} src={CarouselImage2.src} alt="second slide" />
          </div>
          <div>
            <img className={styles.carouselImage} src={CarouselImage3.src} alt="third slide" />
          </div>
          <div>
            <img className={styles.carouselImage} src={CarouselImage4.src} alt="third slide" />
          </div>
        </Carousel>
        <div className={styles.heroInfo}>
          <h1 className={styles.subtitle}>Let's have a</h1>
          <h2 className={styles.title}>cocktail</h2>
          {/* <p className={styles.description}>We all love cheeky cocktail, who doesn't? Whether it's sweet or sour, gin or vodka, we have a cocktail to suit you. Get ahead of the crowd out what we have to offer and find you new favorite. Call it "research", we won't tell anyone...</p> */}
        </div>
      </div>
    </Container>
  )
}

export default HeroBox
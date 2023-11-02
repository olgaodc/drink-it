import React from 'react';
import styles from './HeroBox.module.css';
import CarouselImage1 from '../../assets/carousel-image-1.jpeg';
import CarouselImage2 from '../../assets/carousel-image-2.jpeg';
import CarouselImage3 from '../../assets/carousel-image-3.jpeg';
import CarouselImage4 from '../../assets/carousel-image-4.jpeg';
import { Carousel } from 'antd';
import Container from '../Container/Container';
import { motion } from 'framer-motion';

const carouselAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.3,
  },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: custom * 0.5 }
  })
}

const textAnimation = {
  hidden: {
    y: -300,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 }
  }),
}

const HeroBox = () => {

  return (
    <Container>
      <motion.div
        className={styles.carouselWrapper}
        initial='hidden'
        whileInView='visible'
        custom={1}
        variants={carouselAnimation}
        viewport={{ once: true }}
      >
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
        <motion.div
          className={styles.heroInfo}
          initial='hidden'
          whileInView='visible'
          custom={3}
          variants={textAnimation}
          viewport={{ once: true }}
        >
          <h1 className={styles.subtitle}>Let's have a</h1>
          <h2 className={styles.title}>cocktail</h2>
        </motion.div>
      </motion.div>
    </Container>
  )
}

export default HeroBox
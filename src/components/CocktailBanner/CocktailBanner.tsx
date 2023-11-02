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
import { motion } from 'framer-motion';

const imageAnimation = {
  hidden: {
    y: 300,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  }),
}

const CocktailBanner = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/random-cocktail`);
  }

  return (
    <div className={styles.bannerWrapper}>
      <Container>
        <motion.div 
          className={styles.banner}
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.5, once: true }}
        >
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 530: 2, 800: 3 }}
          >
            <Masonry columnsCount={3} gutter="15px">
            <motion.img 
                className={styles.image} 
                src={CitrusImage.src} 
                alt="dried citrus slices" 
                custom={1}
                variants={imageAnimation}
              />
              <motion.div 
                className={styles.bannerInfo}
                custom={2}
                variants={imageAnimation}
              >
                <h1 className={styles.subtitle}>Try fortune and get</h1>
                <h2 className={styles.title}>random cocktail</h2>
                <Button onClick={handleClick}>Try It</Button>
              </motion.div>
              <motion.img 
                className={styles.image} 
                src={BarImage.src} 
                alt="mobile cocktail bar truck"
                custom={2}
                variants={imageAnimation}
              />
              <motion.img 
                className={styles.image} 
                src={BottlesImage.src} 
                alt="three cocktail dispensers in the garden" 
                custom={3}
                variants={imageAnimation}
              />
              <motion.img 
                className={styles.image} 
                src={CubesImage.src} 
                alt="fruit-infused ice cubes"
                custom={4}
                variants={imageAnimation}
              />
            </Masonry>
          </ResponsiveMasonry>
        </motion.div>
      </Container >
    </div >
  )
}

export default CocktailBanner
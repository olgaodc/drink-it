import React from 'react';
import styles from './CocktailsBanner.module.css';
import Container from '../Container/Container';
import BartenderImage from '../../assets/bartender.png';
import BlobImage from '../../assets/blob.svg';
import { MPrimaryButton } from '../PrimaryButton/PrimaryButton';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';


const textAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  }),
}

const CocktailsBanner = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/cocktails`);
  }

  return (
    <Container>
      <div className={styles.bannerWrapper}>
        <div className={styles.banner}>
          <img className={styles.image} src={BartenderImage.src} />
          <motion.div
            className={styles.bannerInfo}
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.9, once: true }}
          >
            <motion.h1 
              className={styles.subtitle}
              custom={1}
              variants={textAnimation}
            >
              Don't know cocktail name?
            </motion.h1>
            <motion.h2 
              className={styles.title}
              custom={2}
              variants={textAnimation}
            >
              Search by ingredient
            </motion.h2>
            <MPrimaryButton 
              onClick={handleClick}
              custom={3}
              variants={textAnimation}
            >
              Search
            </MPrimaryButton>
            <img className={styles.blurImage} src={BlobImage.src} alt="pink blob" />
          </motion.div>
        </div>
      </div>
    </Container>
  )
}

export default CocktailsBanner
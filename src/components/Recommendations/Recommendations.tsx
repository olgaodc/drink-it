import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Recommendations.module.css';
import Container from '../Container/Container';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardImage1 from '../../assets/pink-moon.jpg';
import CardImage2 from '../../assets/mojito.jpg';
import CardImage3 from '../../assets/pure-passion.jpg';
import CardImage4 from '../../assets/mulled-wine.jpg';
import CardImage5 from '../../assets/raspberry-julep.jpg';
import CardImage6 from '../../assets/winter-rita.jpg';
import CardImage7 from '../../assets/pina-colada.jpg';
import CardImage8 from '../../assets/gin-and-tonic.jpg';
import { motion } from 'framer-motion';

const textAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  }),
}

const imageAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom * 0.2 }
  }),
}


const images = [
  {
    url: CardImage3,
    name: 'Pure Passion',
    id: '178338',
  },
  {
    url: CardImage2,
    name: 'Mojito',
    id: '11000',
  },
  {
    url: CardImage8,
    name: 'Gin And Tonic',
    id: '11403',
  },
  {
    url: CardImage1,
    name: 'Pink Moon',
    id: '178354',
  },
  {
    url: CardImage4,
    name: 'Mulled wine',
    id: '12988',
  },
  {
    url: CardImage5,
    name: 'Raspberry Julep',
    id: '178333',
  },
  {
    url: CardImage6,
    name: 'Winter Rita',
    id: '178347',
  },
  {
    url: CardImage7,
    name: 'Pina Colada',
    id: '17207',
  },

]

const Recommendations = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 900 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 900, min: 656 },
      items: 2
    },
    smallTablet: {
      breakpoint: { max: 656, min: 537 },
      items: 1.7
    },
    largeMobile: {
      breakpoint: { max: 537, min: 453 },
      items: 1.5
    },
    mobile: {
      breakpoint: { max: 453, min: 0 },
      items: 1
    }
  };

  return (
    <div className={styles.recommendationsContainer}>
      <Container>
        <div className={styles.recommendationsWrapper}>
          <motion.div
            className={styles.recommendations}
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.2, once: true }}
          >
            <motion.h3
              className={styles.title}
              custom={1}
              variants={textAnimation}
            >
              We recommended
            </motion.h3>
            <motion.article
              className={styles.description}
              custom={2}
              variants={textAnimation}
            >
              We all love a cheeky cocktail, don't we? Whether you prefer sweet or sour, gin or vodka, we have a cocktail to suit your fancy. Get ahead of the crowd with what we have to offer and find you new favorite. Call it "research", we won't tell anyone...
            </motion.article>
          </motion.div>
        </div>
        <motion.div
          className={styles.carouselWrapper}
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.7, once: true }}
        >
          <Carousel
            responsive={responsive}
            swipeable={true}
            keyBoardControl={true}
          >
            {images && images.map((image, index) => (
              <motion.div
                key={image.id}
                custom={index + 1}
                variants={imageAnimation}
              >
                <Link
                  className={styles.cocktailLink}
                  href={`/cocktail/${image.id}`}

                >
                  <Image
                    className={styles.cocktailImage}
                    src={image.url}
                    alt={`${image.name} image`}
                  />
                  <span className={styles.cocktailTitle}>{image.name}</span>
                </Link>
              </motion.div>
            )
            )}
          </Carousel>
        </motion.div>
      </Container>
    </div>

  )
}

export default Recommendations
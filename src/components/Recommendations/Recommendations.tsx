import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Recommendations.module.css';
import Container from '../Container/Container';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardImage1 from '../../assets/pink-moon.jpg';
import CardImage2 from '../../assets/mojito.jpg';
import CardImage3 from   '../../assets/pure-passion.jpg';
import CardImage4 from  '../../assets/sweet-sangria.jpg';
import CardImage5 from '../../assets/raspberry-julep.jpg';
import CardImage6 from '../../assets/mint-julep.jpg'; 
import CardImage7 from '../../assets/pina-colada.jpg'; 
import CardImage8 from '../../assets/greyhound.jpg';


const images = [
  {
    url: CardImage1,
    name: 'Pink Moon',
    id: '178354',
  },
  {
    url: CardImage2,
    name: 'Mojito',
    id: '11000',
  },
  {
    url: CardImage3,
    name: 'Pure Passion',
    id: '178338',
  },
  {
    url: CardImage4,
    name: 'Sweet Sangria',
    id: '13024',
  },
  {
    url: CardImage5,
    name: 'Raspberry Julep',
    id: '17207',
  },
  {
    url: CardImage6,
    name: 'Mint Julep',
    id: '17206',
  },
  {
    url: CardImage7,
    name: 'Pina Colada',
    id: '178333',
  },
  {
    url: CardImage8,
    name: 'Greyhound',
    id: '17252',
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
          <div className={styles.recommendations}>
            <h3 className={styles.title}>We recommended</h3>
            <article className={styles.description}>We all love cheeky cocktail, who doesn't? Whether it's sweet or sour, gin or vodka, we have a cocktail to suit you. Get ahead of the crowd out what we have to offer and find you new favorite. Call it "research", we won't tell anyone...</article>
          </div>
        </div>
        <div className={styles.carouselWrapper}>
          <Carousel
            responsive={responsive}
            swipeable={true}
            keyBoardControl={true}
          >
            {images && images.map((image) => (
              <Link className={styles.cocktailLink} key={image.id} href={'/'}>
                <Image className={styles.cocktailImage} src={image.url} alt={`${image.name} image`} />
                <span className={styles.cocktailTitle}>{image.name}</span>
              </Link>
            )
            )}
          </Carousel>
        </div>
      </Container>
    </div>

  )
}

export default Recommendations
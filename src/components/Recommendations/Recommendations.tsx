import React from 'react';
import styles from './Recommendations.module.css';
import Container from '../Container/Container';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card } from 'antd';
import CardImage1 from '../../assets/card-image-1.jpg';
import CardImage2 from '../../assets/card-image-2.jpg';
import CardImage3 from '../../assets/card-image-3.jpg';
import CardImage4 from '../../assets/card-image-4.jpg';
import CardImage5 from '../../assets/card-image-5.jpg';

const { Meta } = Card;

const Recommendations = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1300, min: 952 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 952, min: 756 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 756, min: 537 },
      items: 1.7
    },
    mobile2: {
      breakpoint: { max: 537, min: 0 },
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
            <Card cover={<img alt="example" src={CardImage1.src} />}>
              <Meta title="Mojito" />
            </Card>
            <Card cover={<img alt="example" src={CardImage3.src} />} >
              <Meta title="Margarita" />
            </Card>
            <Card cover={<img alt="example" src={CardImage2.src} />} >
              <Meta title="Negroni" />
            </Card>
            <Card cover={<img alt="example" src={CardImage4.src} />} >
              <Meta title="Salty Dog" />
            </Card>
            <Card cover={<img alt="example" src={CardImage5.src} />} >
              <Meta title="Vodka Lemon" />
            </Card>
          </Carousel>
        </div>
      </Container>
    </div>

  )
}

export default Recommendations
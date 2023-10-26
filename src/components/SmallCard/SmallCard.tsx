import React, { FC } from 'react';
import { Card } from 'antd';
import Link from 'next/link';
import styles from './SmallCard.module.css';

const { Meta } = Card;

type Props = {
  id: string,
  name: string,
  photoUrl: string,
  onClickCocktail?: () => void;
}

const SmallCard: FC<Props>  = ({
  id,
  name,
  photoUrl,
  onClickCocktail,
}) => {
  return (
    <Link
      className={styles.cocktailLink}
      key={id}
      href={`/cocktail/${id}`}
      onClick={onClickCocktail}
    >
      <Card
        className={styles.cocktailCard}
        // hoverable={true}
        cover={
          <img
            className={styles.cocktailImage}
            alt={`${name} cocktail`}
            src={photoUrl}
          />
        }
      >
        <Meta
          className={styles.cocktailTitle}
          title={name}
        />
      </Card>
    </Link>
  )
}

export default SmallCard
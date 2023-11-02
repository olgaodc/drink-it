import React, { FC, forwardRef } from 'react';
import { Card } from 'antd';
import Link from 'next/link';
import styles from './SmallCard.module.css';
import { motion } from 'framer-motion';

const { Meta } = Card;

type Props = {
  id: string,
  name: string,
  photoUrl: string,
  onClickCocktail?: () => void;
}

const SmallCard: FC<Props> = forwardRef<HTMLDivElement, Props>(({
  id,
  name,
  photoUrl,
  onClickCocktail,
}, ref) => {
  return (
    <div ref={ref}>
      <Link
        className={styles.cocktailLink}
        key={id}
        href={`/cocktail/${id}`}
        onClick={onClickCocktail}
      >
        <Card
          className={styles.cocktailCard}
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
    </div>
  )
})

export default SmallCard
export const MSmallCard = motion(SmallCard);
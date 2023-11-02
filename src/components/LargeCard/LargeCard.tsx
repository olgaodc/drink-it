import React, { FC } from 'react';
import styles from './LargeCard.module.css';
import GlassImage from '../../assets/cocktail-glass.png';
import { motion } from 'framer-motion';


const textAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 }
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

type Props = {
  name: string,
  photoUrl: string,
  ingredients: string[],
  instruction: string,
  isAlcoholic: string,
  glass: string,

}

const LargeCard: FC<Props> = ({
  name,
  photoUrl,
  isAlcoholic,
  ingredients,
  instruction,
  glass,
}) => {
  return (
    <motion.div 
      className={styles.cocktailCard}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <motion.img 
        className={styles.cocktailImage} 
        src={photoUrl} 
        custom={1}
        variants={imageAnimation}
      />
      <motion.div 
        className={styles.cocktailInfo}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.div 
          className={styles.cocktailNameWrapper}
          custom={1}
          variants={textAnimation}
        >
          <span className={styles.cocktailType}>{isAlcoholic}</span>
          <h2 className={styles.cocktailName}>{name}</h2>
        </motion.div>
        <motion.div 
          className={styles.cocktailGlassWrapper}
          custom={2}
          variants={textAnimation}
        >
          <img className={styles.glassImage} src={GlassImage.src} alt="glass image" />
          <span className={styles.cocktailGlass}>{glass}</span>
        </motion.div>
        <motion.div 
          className={styles.ingredientsListWrapper}
          custom={3}
          variants={textAnimation}
        >
          <h3 className={styles.ingredientsTitle}>Ingredients</h3>
          <ul className={styles.ingredientsList}>
            {ingredients.map((ingredient, index) => (
              <li className={styles.listItem} key={index} >{ingredient}</li>
            ))
            }
          </ul>
        </motion.div>
        <motion.div 
          className={styles.instructionWrapper}
          custom={4}
          variants={textAnimation}
        >
          <h3 className={styles.instructionTitle}>Recipe</h3>
          <p className={styles.cocktailInstruction}>{instruction}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default LargeCard
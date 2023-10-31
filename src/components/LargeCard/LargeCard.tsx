import React, { FC } from 'react';
import styles from './LargeCard.module.css';
import GlassImage from '../../assets/cocktail-glass.png';


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
    <div className={styles.cocktailCard}>
      <img className={styles.cocktailImage} src={photoUrl} />
      <div className={styles.cocktailInfo}>
        <div className={styles.cocktailNameWrapper}>
          <span className={styles.cocktailType}>{isAlcoholic}</span>
          <h2 className={styles.cocktailName}>{name}</h2>
        </div>
        <div className={styles.cocktailGlassWrapper}>
          <img className={styles.glassImage} src={GlassImage.src} alt="glass image" />
          <span className={styles.cocktailGlass}>{glass}</span>
        </div>

        <div className={styles.ingredientsListWrapper}>
          <h3 className={styles.ingredientsTitle}>Ingredients</h3>
          <ul className={styles.ingredientsList}>
            {ingredients.map((ingredient, index) => (
              <li className={styles.listItem} key={index} >{ingredient}</li>
            ))
            }
          </ul>
        </div>
        <div className={styles.instructionWrapper}>
          <h3 className={styles.instructionTitle}>Recipe</h3>
          <p className={styles.cocktailInstruction}>{instruction}</p>
        </div>
      </div>
    </div>
  )
}

export default LargeCard
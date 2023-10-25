import React, { FC } from 'react';
import styles from './LargeCard.module.css';


type Props = {
  name: string,
  photoUrl: string,
  ingredients: string[],
  instruction: string,
  isAlcoholic: string,

}

const LargeCard: FC<Props> = ({
  name,
  photoUrl,
  isAlcoholic,
  ingredients,
  instruction,
}) => {
  return (
    <div className={styles.cocktailCard}>
      <img className={styles.cocktailImage} src={photoUrl} />
      <div className={styles.cocktailInfo}>
        <div className={styles.cocktailNameWrapper}>
          <h2 className={styles.cocktailName}>{name}</h2>
          <span className={styles.cocktailType}>{isAlcoholic}</span>
        </div>

        <div className={styles.ingredientsListWrapper}>
          <span className={styles.ingredientsTitle}>Ingredients</span>
          <ul className={styles.ingredientsList}>
            {ingredients.map((ingredient, index) => (
              <li className={styles.listItem} key={index} >{ingredient}</li>
            ))
            }
          </ul>
        </div>
        <p className={styles.cocktailInstruction}>
          <span className={styles.instructionTitle}>Recipe </span>
          {instruction}
        </p>
      </div>
    </div>
  )
}

export default LargeCard
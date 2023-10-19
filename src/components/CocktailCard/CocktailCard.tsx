import React, { FC } from 'react';
import styles from './CocktailCard.module.css';

type CocktailCardProps = {
  id: string,
  name: string,
  photoUrl: string,
  // ingredients: [],
  // instruction: string,
  isAlcoholic: boolean,
  onClickCocktail: () => void;

}

const CocktailCard: FC<CocktailCardProps> = ({
  id,
  name,
  photoUrl,
  isAlcoholic,
  // ingredients,
  // instruction,
  onClickCocktail,


}) => {

  // for (let i = 1; i <= 15; i++) {
  //     const ingredientKey = `strIngredient${i}`;
  //     if (cocktail[ingredientKey]) {
  //         const ingredient = cocktail[ingredientKey];
  //         ingredients.push(<li className={styles.listItem} key={i}>{ingredient}</li>);
  //     }
  // }

  return (
    <div className={styles.cocktailCard} key={id} onClick={onClickCocktail}>
      <img className={styles.cocktailImage} src={photoUrl} />
      <div className={styles.cocktailInfo}>
        <div className={styles.cocktailNameWrapper}>
          <h2 className={styles.cocktailName}>{name}</h2>
          <span className={isAlcoholic ? styles.alcoholicCocktail : styles.nonAlcoholicCocktail}></span>
        </div>

        {/* <div className={styles.ingredientsListWrapper}>
                    <span className={styles.ingredientsTitle}>Ingredients:</span>
                    <ul className={styles.ingredientsList}>{ingredients}</ul>
                </div> */}
        {/* <p className={styles.cocktailInstruction}>
          <span className={styles.instructionTitle}>Instruction: </span>
          {instruction}
        </p> */}
      </div>
    </div>
  );
};

export default CocktailCard;
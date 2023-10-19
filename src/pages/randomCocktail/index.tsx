import { useEffect, useState } from "react";
import styles from './randomCocktail.module.css';
import Navbar from "@/components/Navbar/Navbar";

const RandomCocktailPage = () => {
  const [cocktail, setCocktail] = useState<any>();

  const fetchRandomCocktail = async () => {
    const response = await fetch('https://thecocktaildb.com/api/json/v1/1/random.php');
    const data = await response.json();
    setCocktail(data.drinks[0]);
    console.log(data.drinks[0]);
  }

  useEffect(() => {
    fetchRandomCocktail();
  }, [])

  const ingredients = [];
  let i = 1;
  if (cocktail && cocktail[`strIngredient${i}`]) {
    for (let i = 1; i <= 15; i++) {
      const ingredientKey = `strIngredient${i}`;
      if (cocktail[ingredientKey]) {
        const ingredient = cocktail[ingredientKey];
        ingredients.push(<li className={styles.listItem} key={i}>{ingredient}</li>);
      }
    }
  }


  // const ingredients = [];
  // let i = 1;
  // while (cocktail && cocktail[`strIngredient${i}`]) {
  //     const ingredientKey = `strIngredient${i}`;
  //     const ingredient = cocktail[ingredientKey];
  //     ingredients.push(<li className={styles.listItem} key={i}>{ingredient}</li>);
  //     i++;
  // }



  return (
    <>
      <Navbar />
      <div className={styles.cocktailSectionWrapper}>
        <div className={styles.container}>
          <div className={styles.cocktailSection}>
            {cocktail ? (
              <div className={styles.cocktailCard}>
                <img className={styles.cocktailImage} src={cocktail.strDrinkThumb} alt="random cocktail image" />
                <div className={styles.cocktailInfo}>
                  <div className={styles.cocktailNameWrapper}>
                    <h2 className={styles.cocktailName}>{cocktail.strDrink}</h2>
                    <div className={styles.cocktailType}>{cocktail.strAlcoholic === 'Alcoholic' ? (<>N-18</>) : (<>Nealkoholinis</>)}</div>
                  </div>
                  <div className={styles.ingredientsWrapper}>
                    <span className={styles.ingredientsTitle}>Ingredients:</span>
                    <ul className={styles.ingredientsList}>{ingredients}</ul>
                  </div>
                  <p className={styles.cocktailInstruction}>
                    <span className={styles.instructionTitle}>Instruction: </span>
                    {cocktail.strInstructions}
                  </p>

                </div>
              </div>
            ) : (<>Loading...</>)}

          </div>
        </div>
      </div>
    </>

  )
}

export default RandomCocktailPage;
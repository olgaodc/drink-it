import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from './randomCocktail.module.css';
import Navbar from "@/components/Navbar/Navbar";
import Container from "@/components/Container/Container";
import LargeCard from "@/components/LargeCard/LargeCard";
import Footer from "@/components/Footer/Footer";
import PrimaryButton from "@/components/Button/Button";
import Spinner from "@/components/Spinner/Spinner";


type CocktailProps = {
  strDrink: string,
  strDrinkThumb: string;
  strInstructions: string,
  strAlcoholic: string;
  [key: string]: string | undefined;
};

const RandomCocktailPage = () => {
  const [cocktail, setCocktail] = useState<CocktailProps>();
  const [isLoaded, setLoaded] = useState(false);

  const getRandomCocktail = async () => {
    try {
      const response = await axios.get('https://thecocktaildb.com/api/json/v1/1/random.php');

      const { drinks } = response.data;
      const drink = drinks[0];

      setCocktail(drink);
      setLoaded(true);

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getRandomCocktail();
  }, []);

  const ingredients = [];

  for (let i = 1; i <= 15; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;

    if (cocktail && cocktail[ingredientKey]) {
      const ingredient = cocktail[ingredientKey];
      let measure = cocktail[measureKey] || '';
      if (measure === 'null') {
        measure = '';
      }
      const fullIngredient = `${measure} ${ingredient}`;

      ingredients.push(fullIngredient);
    }
  }

  return (
    <>
      <Navbar />
      <div className={styles.cocktailSectionWrapper}>
        {isLoaded ? (
          <Container>
            <div className={styles.cocktailSection}>
              {cocktail && (
                <LargeCard
                  name={cocktail.strDrink}
                  photoUrl={cocktail.strDrinkThumb}
                  isAlcoholic={cocktail.strAlcoholic}
                  instruction={cocktail.strInstructions}
                  ingredients={ingredients}
                />
              )}
              <PrimaryButton onClick={getRandomCocktail}>Another cocktail</PrimaryButton>
            </div>
          </Container>
        ) : <Spinner />}
      </div>
      <Footer />
    </>

  )
}

export default RandomCocktailPage;

// export async function getServerSideProps() {
//   try {
//     const response = await axios.get('https://thecocktaildb.com/api/json/v1/1/random.php');
//     console.log(response);
//     const { drinks } = response.data;
//     const drink = drinks[0];
//     console.log(drink);

//     return { props: { drink: drink } };
//   } catch (err) {
//     return { props: { drink: null } };
//   }
// }
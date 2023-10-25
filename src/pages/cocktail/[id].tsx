import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import styles from './cocktailPage.module.css';
import Container from '@/components/Container/Container';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import LargeCard from '@/components/LargeCard/LargeCard';

import { Card } from 'antd';


const { Meta } = Card;

type CocktailProps = {
  strDrink: string,
  strDrinkThumb: string;
  strInstructions: string,
  strAlcoholic: string;
  [key: string]: string | undefined;
  strIngredient1: string;
  idDrink: string;
};

const CocktailPage: FC<CocktailProps> = () => {
  const [cocktail, setCocktail] = useState<CocktailProps>();
  const [similarCocktails, setSimilarCocktails] = useState<CocktailProps[]>([]);
  const router = useRouter();

  useEffect(() => {
    router.query.id && getCocktailWithSuggestions();
  }, [router.query.id]);
  
  const getCocktail = async () => {
    try {
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${router.query.id}`);

      const { drinks } = response.data;
      const drink = drinks[0];

      setCocktail(drink);
      return drink;
    } catch(err) {
      console.log(err);
    }
  }

  // const ingredients: string[] = [];

  // for (let i = 1; i <= 15; i++) {
  //   const ingredientKey = `strIngredient${i}`;
  //   const measureKey = `strMeasure${i}`;

  //   if (cocktail[ingredientKey]) {
  //     const ingredient = cocktail[ingredientKey];
  //     let measure = cocktail[measureKey] || '';
  //     if (measure === 'null') {
  //       measure = '';
  //     }
  //     const fullIngredient = measure ? `${measure} of ${ingredient}` : ingredient;
  //     if (typeof fullIngredient === 'string') {
  //       ingredients.push(fullIngredient);
  //     }
  //   }
  // }

  const getSimilarCocktails = async () => {
    try {
      const drink = await getCocktail();
      if (drink) {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(drink.strIngredient1)}`);

        const { drinks } = response.data;

        const drinkId = drink.idDrink;

        const filteredSimilarDrinks = drinks && drinks.filter((drink: { idDrink: string; }) => drink.idDrink !== drinkId).slice(0, 4);

        //TO DO: 
        //if (filteredSimilarDrinks.length === 0) {
        //  fetch random drink
        //}

        setSimilarCocktails(filteredSimilarDrinks);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const getCocktailWithSuggestions = async () => {
    getCocktail();
    getSimilarCocktails();
  }

  const handleClick = (newCocktail: CocktailProps) => {
    setCocktail(newCocktail);
  }

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
      <div className={styles.contentWrapper}>
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
          </div>
          <div className={styles.suggestionsSectionWrapper}>
            <h2 className={styles.suggestionsTitle}>You might also like</h2>
            <div className={styles.suggestionsSection}>
              {similarCocktails && similarCocktails.map((cocktail: CocktailProps) => (
                <Link 
                  className={styles.suggestionLink}
                  key={cocktail.idDrink}
                  href={`/cocktail/${cocktail.idDrink}`}
                  onClick={() => handleClick(cocktail)}
                >
                  <Card 
                    className={styles.suggestionCard}
                    key={cocktail.idDrink}
                    hoverable={true} 
                    cover={
                      <img 
                        className={styles.suggestionImage}
                        alt={`${cocktail.strDrink} cocktail`}
                        src={cocktail.strDrinkThumb} 
                      />
                    }
                  >
                    <Meta 
                      className={styles.suggestionTitle} 
                      title={cocktail.strDrink} 
                    />
                  </Card>
                </Link>
              ))
              }
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default CocktailPage
import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from './cocktailPage.module.css';
import Container from '@/components/Container/Container';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import LargeCard from '@/components/LargeCard/LargeCard';
import SmallCard from '@/components/SmallCard/SmallCard';
import Spinner from '@/components/Spinner/Spinner';
import { motion } from 'framer-motion';


const animation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  }),
}


type CocktailProps = {
  strDrink: string,
  strDrinkThumb: string;
  strInstructions: string,
  strAlcoholic: string;
  [key: string]: string | undefined;
  strIngredient1: string;
  idDrink: string;
  strGlass: string;
};

const CocktailPage: FC<CocktailProps> = () => {
  const [cocktail, setCocktail] = useState<CocktailProps>();
  const [similarCocktails, setSimilarCocktails] = useState<CocktailProps[]>([]);
  const [isLoaded, setLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.query.id && getCocktailWithSuggestions();
  }, [router.query.id]);

  const getCocktail = async () => {
    try {
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${router.query.id}`);

      const { drinks } = response.data;
      const drink = drinks[0];

      console.log(drink);

      setCocktail(drink);
      return drink;
    } catch (err) {
      console.log(err);
    }
  }

  const getSimilarCocktails = async () => {
    try {
      const drink = await getCocktail();
      if (drink) {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(drink.strIngredient1)}`);

        const { drinks } = response.data;

        const drinkId = drink.idDrink;

        const filteredSimilarDrinks = drinks && drinks.filter((drink: { idDrink: string; }) => drink.idDrink !== drinkId).slice(0, 4);

        if (filteredSimilarDrinks.length === 0) {
          getRandomCocktail()
        } else {
          setSimilarCocktails(filteredSimilarDrinks);
        }

        setLoaded(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const getRandomCocktail = async () => {
    try {
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);

      const { drinks } = response.data;

      setSimilarCocktails(drinks);

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
      {isLoaded ? (
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
                  glass={cocktail.strGlass}
                />
              )}
            </div>
          </Container>

          <motion.div 
            className={styles.suggestionsSectionWrapper}
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.3, once: true }}
          >
            <Container>
              <motion.h2 
                className={styles.suggestionsTitle}
                custom={1}
                variants={animation}
              >
                You might also like
              </motion.h2>
              <motion.div 
                className={styles.suggestionsSection}
                custom={2}
                variants={animation}
              >
                {similarCocktails && similarCocktails.map((cocktail: CocktailProps) => (
                  <SmallCard
                    key={cocktail.idDrink}
                    id={cocktail.idDrink}
                    name={cocktail.strDrink}
                    photoUrl={cocktail.strDrinkThumb}
                    onClickCocktail={() => handleClick(cocktail)}
                    // custom={index + 1}
                    // variants={animation}
                  />
                ))
                }
              </motion.div>
            </Container>
          </motion.div>
        </div>
      ) : <Spinner />
      }

      <Footer />
    </>
  )
}

export default CocktailPage
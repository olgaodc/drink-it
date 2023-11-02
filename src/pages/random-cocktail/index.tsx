import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from './randomCocktail.module.css';
import Navbar from "@/components/Navbar/Navbar";
import Container from "@/components/Container/Container";
import LargeCard from "@/components/LargeCard/LargeCard";
import Footer from "@/components/Footer/Footer";
import { MPrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import Spinner from "@/components/Spinner/Spinner";
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
  strGlass: string;
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
            <motion.div 
              className={styles.cocktailSection}
              initial='hidden'
              whileInView='visible'
              viewport={{ amount: 0.2, once: true }}
            >
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
              <MPrimaryButton 
                onClick={getRandomCocktail}
                custom={5}
                variants={animation}
              >
                Another cocktail
              </MPrimaryButton>
            </motion.div>
          </Container>
        ) : <Spinner />}
      </div>
      <Footer />
    </>

  )
}

export default RandomCocktailPage;
import { useEffect, useState } from "react";
import Navbar from '../../components/Navbar/Navbar';
import styles from './cocktailsPage.module.css';
import Container from "@/components/Container/Container";
import axios from "axios";
import SmallCard from "@/components/SmallCard/SmallCard";
import Footer from "@/components/Footer/Footer";

type CocktailProps = {
  idDrink: string,
  strDrink: string,
  strDrinkThumb: string;
  strAlcoholic: string;
};

type CocktailsProps = Array<CocktailProps> | null;

const CocktailsPage = () => {
  const [cocktails, setCocktails] = useState<CocktailsProps>();
  // const [displayedCocktails, setDisplayedCocktails] = useState<CocktailsProps>();
  const [inputText, setInputText] = useState('');

  const fetchCocktailsByIngredient = async (inputText: string) => {
    try {
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputText}`);

      const { drinks } = response.data;

      setCocktails(drinks);
      // setDisplayedCocktails(drinks);
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    fetchCocktailsByIngredient('ice');
  }, []);

  // const fetchCocktailsByFirstLetter = async (inputText: string) => {
  //   const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${inputText}`);
  //   const data = await response.json();
  //   setDisplayedCocktails(data.drinks)
  //   console.log(data.drinks)
  // }

  return (
    <>
      <Navbar />
      <div className={styles.content}>
        <Container>
          <div className={styles.buttonsWrapper}>
            {/* <button
              onClick={() => setDisplayedCocktails(() => cocktails?.filter((cocktail) => cocktail.strAlcoholic === 'Alcoholic'))}
            >
              Alcoholic
            </button>

            <button
              onClick={() => setDisplayedCocktails(() => cocktails?.filter((cocktail) => cocktail.strAlcoholic !== 'Alcoholic'))}
            >
              Non Alcoholic
            </button>

            <button
              onClick={() => setDisplayedCocktails(cocktails)}
            >
              All Cocktails
            </button> */}

            <input
              className={styles.findCocktailInput}
              onChange={(event) => setInputText(event.target.value)}
              value={inputText}
              placeholder="E.g Gin"
            />

            <button
              className={styles.findCocktailButton}
              onClick={() => {
                fetchCocktailsByIngredient(inputText);
                setInputText('');
              }}
            >
              Find
            </button>
          </div>
          <div className={styles.cocktailsSectionWrapper}>
            <div className={styles.cocktailsSection}>
              {cocktails && cocktails.map((cocktail) => (
                <SmallCard
                  key={cocktail.idDrink}
                  id={cocktail.idDrink}
                  name={cocktail.strDrink}
                  photoUrl={cocktail.strDrinkThumb}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default CocktailsPage;
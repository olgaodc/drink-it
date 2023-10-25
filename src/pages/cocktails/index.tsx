import { useEffect, useState } from "react";
import CocktailCard from '../../components/CocktailCard/CocktailCard';
import Navbar from '../../components/Navbar/Navbar';
import styles from './cocktailsPage.module.css';
import Container from "@/components/Container/Container";

type CocktailProps = {
  idDrink: string,
  strDrink: string,
  strDrinkThumb: string;
  strInstructions: string,
  strAlcoholic: string;
};

type CocktailsProps = Array<CocktailProps> | null;

const CocktailsPage = () => {
  const [cocktails, setCocktails] = useState<CocktailsProps>();
  const [displayedCocktails, setDisplayedCocktails] = useState<CocktailsProps>();
  const [inputText, setInputText] = useState('');

  const fetchCocktails = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
    const data = await response.json();
    setCocktails(data.drinks);
    console.log(data.drinks);
    setDisplayedCocktails(data.drinks);
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  const fetchCocktailById = async (id: string) => {
    const cocktail = cocktails?.find(cocktail => cocktail.idDrink === id);

    if (cocktail) {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();

      console.log('Cocktail info: ', data.drinks[0]);
    }
  }

  const fetchCocktailsByFirstLetter = async (inputText: string) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${inputText}`);
    const data = await response.json();
    setDisplayedCocktails(data.drinks)
    console.log(data.drinks)
  }

  return (
    <>
      <Navbar />
      <div className={styles.cocktailsSectionWrapper}>
        <Container>
          <div className={styles.buttonsWrapper}>
            <button
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
            </button>

            <input
              className={styles.findCocktailInput}
              onChange={(event) => setInputText(event.target.value)}
              value={inputText}
              placeholder="Find cocktails by first letter"
            />

            <button
              className={styles.findCocktailButton}
              onClick={() => {
                fetchCocktailsByFirstLetter(inputText);
                setInputText('');
              }}
            >
              Find
            </button>
          </div>

          <div className={styles.cocktailsSection}>
            {displayedCocktails && displayedCocktails.map((cocktail) => (
              <CocktailCard
                key={cocktail.idDrink}
                id={cocktail.idDrink}
                name={cocktail.strDrink}
                photoUrl={cocktail.strDrinkThumb}
                isAlcoholic={cocktail.strAlcoholic === 'Alcoholic'}
                onClickCocktail={() => fetchCocktailById(cocktail.idDrink)}
              />
            ))}
          </div>
        </Container>

      </div>
    </>
  );
}

export default CocktailsPage;
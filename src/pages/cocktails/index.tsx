import { useEffect, useState } from "react";
import Navbar from '../../components/Navbar/Navbar';
import styles from './cocktailsPage.module.css';
import Container from "@/components/Container/Container";
import axios from "axios";
import SmallCard from "@/components/SmallCard/SmallCard";
import Footer from "@/components/Footer/Footer";
import { Input, Pagination, Select } from "antd";
import PrimaryButton from "@/components/Button/Button";

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
  const [searchOption, setSearchOption] = useState('ingredient'); 
  const [page, setPage] = useState(1);
  const pageSize = 20;


  useEffect(() => {
    fetchCocktailsByIngredient('ice');
  }, []);

  const fetchCocktailsByIngredient = async (inputText: string) => {
    try {
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputText}`);

      const { drinks } = response.data;

      setCocktails(drinks);
    } catch (err) {
      console.log(err)
    }
  };


  const fetchCocktailsByName = async (inputText: string) => {
    try {
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputText}`);

      const { drinks } = response.data;

      setCocktails(drinks);
    } catch (err) {
      console.log(err)
    }
  };


  const fetchCocktailsByFirstLetter = async (inputText: string) => {
    try {
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${inputText}`);

      const { drinks } = response.data;

      setCocktails(drinks);

    } catch (err) {
      console.log(err);
    }
  }

  const onSearchOptionChange = (value: string) => {
    setSearchOption(value);
  };

    const getInputPlaceholder = () => {
      if (searchOption === 'ingredient') {
        return 'e.g gin';
      } else if (searchOption === 'first-letter') {
        return 'e.g a';
      } else if (searchOption === 'name') {
        return 'e.g Margarita';
      }
      return '';
    };
  
    const getInputMaxLength = () => {
      return searchOption === 'first-letter' ? 1 : 15;
    };

  const onSearch = () => {
    if (searchOption === 'ingredient') {
      fetchCocktailsByIngredient(inputText);
      setInputText('');
    } else if (searchOption === 'name') {
      fetchCocktailsByName(inputText);
      setInputText('');
    } else if (searchOption === 'first-letter') {
      fetchCocktailsByFirstLetter(inputText);
      setInputText('');
    } 
  };

  const onPageChange = (currentPage: number) => {
    setPage(currentPage);
  };

  return (
    <>
      <div className={styles.bgImage} >
        <Navbar />
      </div>
      <Container>
        <div className={styles.searchBar}>
          <div className={styles.searchTitle}>Search by</div>
          <Select
            className={styles.cocktailSelect}
            autoFocus={false} 
            defaultValue='Ingredient'
            onChange={onSearchOptionChange}
            options={[
              { value: 'ingredient', label: 'Ingredient' },
              { value: 'name', label: 'Cocktail name' },
              { value: 'first-letter', label: 'Cocktail first letter' }
            ]}
          />
          <Input
            className={styles.cocktailInput}
            onChange={(event) => setInputText(event.target.value)}
            value={inputText}
            autoFocus={false}
            placeholder={getInputPlaceholder()}
            maxLength={getInputMaxLength()}
          />
          <PrimaryButton
            // className={styles.findCocktailButton}
            onClick={onSearch}
          >
            Search
          </PrimaryButton>
        </div>
      </Container>

      <div className={styles.content}>
        <Container>
          <div className={styles.cocktailsSectionWrapper}>
            <div className={styles.cocktailsSection}>
              {cocktails && cocktails.slice((page - 1) * pageSize, page * pageSize).map((cocktail) => (
                <SmallCard
                  key={cocktail.idDrink}
                  id={cocktail.idDrink}
                  name={cocktail.strDrink}
                  photoUrl={cocktail.strDrinkThumb}
                />
              ))}
            </div>
            <div className={styles.paginationWrapper}>
              <Pagination
                className={styles.pagination}
                current={page}
                pageSize={pageSize}
                total={cocktails?.length}
                onChange={onPageChange}
                showSizeChanger={false}
              />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default CocktailsPage;
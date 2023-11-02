import { useEffect, useState } from "react";
import Navbar from '../../components/Navbar/Navbar';
import styles from './cocktailsPage.module.css';
import Container from "@/components/Container/Container";
import axios from "axios";
import { MSmallCard } from "@/components/SmallCard/SmallCard";
import Footer from "@/components/Footer/Footer";
import { Empty, Input, Pagination, Select } from "antd";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
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
  idDrink: string,
  strDrink: string,
  strDrinkThumb: string;
  strAlcoholic: string;
};

type CocktailsProps = Array<CocktailProps> | null;

const CocktailsPage = () => {
  const [cocktails, setCocktails] = useState<CocktailsProps>();
  const [inputText, setInputText] = useState('');
  const [searchOption, setSearchOption] = useState('ingredient');
  const [isLoaded, setLoaded] = useState(false);
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
      setLoaded(true);
      setPage(1);
    } catch (err) {
      console.log(err)
    }
  };


  const fetchCocktailsByName = async (inputText: string) => {
    try {
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputText}`);

      const { drinks } = response.data;

      setCocktails(drinks);
      setPage(1);
    } catch (err) {
      console.log(err)
    }
  };


  const fetchCocktailsByFirstLetter = async (inputText: string) => {
    try {
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${inputText}`);

      const { drinks } = response.data;

      setCocktails(drinks);
      setPage(1);

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
    return searchOption === 'first-letter' ? 1 : 20;
  };

  const onSearch = () => {
    if (searchOption === 'ingredient') {
      fetchCocktailsByIngredient(inputText);
    } else if (searchOption === 'name') {
      fetchCocktailsByName(inputText);
    } else if (searchOption === 'first-letter') {
      fetchCocktailsByFirstLetter(inputText);
    }
  };

  const onPageChange = (currentPage: number) => {
    setPage(currentPage);
  };

  return (
    <>
      {isLoaded ? (
        <motion.div 
          className={styles.pageWrapper}
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.2, once: true }}
        >
          <motion.div 
            className={styles.bgImage} 
            custom={1}
            variants={animation}
          >
            <Navbar />
          </motion.div>
          <Container>
            <motion.div 
              className={styles.searchBar}
              custom={2}
              variants={animation}
            >
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
                onClick={onSearch}
              >
                Search
              </PrimaryButton>
            </motion.div>
          </Container>

          <Container>
            {cocktails ? (
              <div className={styles.cocktailsSectionWrapper}>
                <div className={styles.cocktailsSection}>
                  {cocktails.slice((page - 1) * pageSize, page * pageSize).map((cocktail, index) => (
                    <MSmallCard
                      key={cocktail.idDrink}
                      id={cocktail.idDrink}
                      name={cocktail.strDrink}
                      photoUrl={cocktail.strDrinkThumb}
                      custom={index + 1}
                      variants={animation}
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
            ) : (
              <Empty
                className={styles.empty}
                image='https://cozeller.com/_next/static/images/empty-ada0529a785642ba070674a6d0052c27.png'
                imageStyle={{ height: 250 }}
                description={
                  <span>Cocktails not found</span>
                }
              />
            )}
          </Container>

          <Footer />
        </motion.div>
      ) : (<Spinner />)}

    </>
  );
}

export default CocktailsPage;
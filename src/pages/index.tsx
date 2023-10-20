import styles from './styles.module.css';
import Navbar from '@/components/Navbar/Navbar';
import Container from '@/components/Container/Container';
import HeroBox from '@/components/HeroBox/HeroBox';
import CocktailsBanner from '@/components/CocktailsBanner/CocktailsBanner';
import CocktailBanner from '@/components/CocktailBanner/CocktailBanner';
import Footer from '@/components/Footer/Footer';

export default function HomePage() {
 return (
  <>
    <Navbar/>
    <div className={styles.contentWrapper}>
      <div className={styles.content}>
        <HeroBox />
        <CocktailsBanner />
        <CocktailBanner />
      </div>
    </div>
    <Footer />
  </>
 )
}





// const [inputText, setInputText] = useState("");
// const [filteredText, setFilteredText] = useState("");

// const [library, setLibrary] = useState(['']);

// return (
//   <div className={styles.wrapper}>
//     <input 
//       onChange={(event) => setInputText(event.target.value)}
//       value={inputText} 
//     />

//     <button 
//       onClick={() => {
//         setLibrary((prevState) => [...prevState, inputText]);
//         setInputText('');
//       }} 
//     > Add word </button>

//     <input 
//       placeholder='filter' 
//       value={filteredText}
//       onChange={(event) => {
//         setFilteredText(event.target.value);
//         setLibrary((prevState) => [
//           ...prevState.filter((word) => word.includes(filteredText)),
//         ]);
//       }}
//     />

//     <div> 
//       {library.map((word) => {
//         return <div 
//           onClick={() => {
//             setLibrary((prevState) => {
//               return [...prevState.filter((arrayWord) => arrayWord !== word)];
//             });
//           }} 
//           className={styles.item} 
//           key={uniqid()}
//         > {word}</div>;
//       })}
//     </div>
    
//   </div>
// )
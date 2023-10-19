// import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';
import styles from './main.module.css';
import { useState } from 'react';
import uniqid from 'uniqid';

export default function Home() {
 return (
  <>
    <Navbar/>
    <div className='container'>
          
    </div>
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
/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
//console.log(names);


// Dichiara la funzione qui.
/* accetta (array, letter) */
/* restituisce nuovo array ('word' di 'array' che iniziano per 'letter') */
function filterPerLetter(arr, letter){  
  
  /* (raccolta dati) */
  const wordsPerLetter = [];

  /* per ogni 'word'... */
  for(i=0; i < arr.length; i++) {

    let word = arr[i];
    
    /* prende la firstLetter */
    let firstLetter = word.charAt(0);
    
    /* e la confronta con 'letter'... */    
      /* SE corrisponde -> pusha la 'word' nel nuovo array */
      if(firstLetter === letter) {
        wordsPerLetter.push(word);
      }            
    }
    /* Restituisce (returne) il nuovo array */
    //console.log(wordsPerLetter);
    return wordsPerLetter;
  }
  
  // Invoca la funzione qui e stampa il risultato in console
  const wordsForA = filterPerLetter(names, 'A');
  console.log(wordsForA);
  
  //Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

  



/* ERO BLOCCATA, HO PREFERITO RICOMINCIARE DA 0 ↑ */

// const wordsPerLetter = [];
// console.log(wordsPerLetter);

// let firstLetter;

// for(i = 0; i < names.legth; i++) {
//   let word = names[i];
//   console.log(word);
  
//   /* firstLetter = word.charAt(0);
//   //console.log(firstLetter); */
  
//   /* cerca 'words' che iniziano con 'letter' */
//   /* if(firstLetter === 'A') {
//     wordsPerLetter.push(word);
//   } */
// }

// function getWordsPerLetter(wordsArray, letter) {

//   return wordsPerLetter;
//   //console.log(wordsPerLetter);
  
// }

// /* e le pusha nel nuovo array 'wordsPerLetter' */


// // Invoca la funzione qui e stampa il risultato in console
// /* const wordsPerA = getWordsPerLetter(names, 'A');
// console.log(wordsPerA);
//  */

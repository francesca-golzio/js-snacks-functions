/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

//#region Other Functions */

  /*region Is the letter a vowel? */
  /* function returns true if that's the case */
  const isVowel = (letter) => /* {
    if( */letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u' || letter == 'y' || letter == 'w'/* ){
      return true;
    } else { return false;}
  } */
 
  //console.log(isVowel('a'));

 //#endregion Is the letter a vowel? */

// Dichiara la funzione qui.

/* la funzione ... 
accetta una 👇 stringa */
function checkHowManyVowels(word) {
    /* (Raccolta valori) */
    
    let vowelsAmount = 0;
    
    /* scorre le lettere */
    for(i = 0; i < word.length; i++) {
      let letter = word.charAt(i);
      //console.log(/* typeof  */letter );      

      /* verifica se sono vocali */
      /* con l'aiuto della funzione 'isVowel' */
      const vowelChecked = isVowel(letter);
      //console.log(vowelChecked);

      if (vowelChecked === true) vowelsAmount = vowelsAmount + 1;
      //console.log(vowelsAmount);
      
    }
    
    /* restituisce il numero di vocali contenute nella stringa */
    //console.log(vowelsAmount);
    return vowelsAmount;    
  }
    
  // Invoca la funzione qui e stampa il risultato in console
  checkHowManyVowels(word);
  console.log('Nella stringa ci sono ' + checkHowManyVowels(word) + ' vocali');


//Risultato atteso se si passa 'javascript': 3 (a, a, i)


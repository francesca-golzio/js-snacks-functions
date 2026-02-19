//console.log('🟢');

/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

/* funzione dichiarata per esteso con keyword 'function' */
/* 
function getInitials(arr) {

  for(i = 0; i < arr.length; i++) {
    let nAMe = arr[i];
    //console.log(nAMe[0]);
    let initial = nAMe[0];
    initials.push(initial);
    //console.log(initial);
  }

  return initials;
} */

/* arrow function */

  /* prima, creo una funzione per recuperare l'iniziale di una parola */ 

  function returnIndex0(word) {
    let initial = word[0];
    return initial;
  }
  //console.log(returnIndex0('ciao'));
  

const getInitials = (arr) => {for(i = 0; i < arr.length; i++) { initials.push(returnIndex0(arr[i]))}}
// {

//   //let initials = [];

//   /* for(i = 0; i < arr.length; i++) { initials.push(returnIndex0(arr[i]))}
//     let nAMe = arr[i];
//     //console.log(nAMe[0]);
//     initialToPush = returnIndex0(nAMe)
//     //console.log(initialToPush);
//     initials.push(initialToPush)    
//   } */
  
//   return initials;
//   console.log(initials);
// } 


// Invoca la funzione qui e stampa il risultato in console

getInitials(names)
console.log(initials);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
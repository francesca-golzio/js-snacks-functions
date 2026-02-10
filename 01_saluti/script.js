//console.log('🟢');

/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';

// Dichiara la funzione qui.

// 1 _ estesa con dichiarazione tramite keyword 'function'
/* 
function greetings(aName) {
  let hello = 'Ciao ' + aName + '!';
  return hello;
} */

// 2 _ contratta con arrow function
  // le parentesi () non sono necessarie, cè un solo parametro
  // le parentesi {} non sono necessarie, cè una sola riga di codice
    // senza le {} 'return' diventa implicito
const greetings = aName => 'Ciao ' + aName + '!';

// Invoca la funzione qui e stampa il risultato in console
helloMessage = greetings(userName);
console.log(helloMessage);

//Risultato atteso se si passa 'Mario': // ciao Mario

/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const userName = 'Mario';

let greetings;

// Dichiara la funzione qui.

/* accetta...       una stringa 👇 contenente un nome */
function greetingsByDayMoment(nome) {
  
  const dateNow = new Date;
  const hourNow = dateNow.getHours();
  //console.log(hourNow);

  /* controlla l'ora e restituisce un saluto */
    /* "buongiorno" se è mattina (fino alle 13) */
    if (hourNow <= 13) {
        /* un saluto seguito dal 👇 nome fornito */
      greetings = `buongiorno ${nome}`;
      return greetings;      
    }
    
    /* "buon pomeriggio" se è pomeriggio (fino alle 17) */
    if (hourNow < 17) { 
      greetings = `buon pomeriggio ${nome}`;      
      return greetings;      
    } 
    
    /* "buonasera" se è sera (oltre le 17) */
    if (hourNow >= 17) {
      greetings = `buonasera ${nome}`;      
      return greetings;
    }
}


// Invoca la funzione qui e stampa il risultato in console
greetingsByDayMoment(userName)
console.log(greetingsByDayMoment(userName));



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
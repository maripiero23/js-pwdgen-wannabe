//chiedo all'utente come si chiama
const userName = prompt("Come ti chiami?");

//chiedo all'utente il suo cognome
const userCognome = prompt("Qual'è il tuo cognome?");


//chiedo all'utente il suo colore preferito
const userColor = prompt("Qual'è il tuo colore preferito?");

//salvo in una variabile un riferimento all'elemento html con id
const h2CompleteUser = document.getElementById("info_utente");

//uso il riferimento precedente
h2CompleteUser.innerHTML = userName + userCognome + userColor + 21;





// FACENDO DELLE PROVE
let nameCognomeColor=userName + " " +userCognome +userColor

console.log("Total info=", nameCognomeColor)

console.log(`L'utente si chiama  ${userName}  e di cognome fa  ${userCognome} mentre il suo colore preferito è il ${userColor}`)
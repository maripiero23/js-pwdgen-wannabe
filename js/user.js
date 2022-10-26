//chiedo all'utente come si chiama
const userName = prompt("Come ti chiami?")

//chiedo all'utente il suo cognome
const user2Name = prompt("Qual'è il tuo cognome?")


//chiedo all'utente il suo colore preferito
const userColor = prompt("Qual'è il tuo colore preferito?")

//salvo in una variabile un riferimento all'elemento html con id
const h2CompleteUser = document.getElementById("info_utente")

//uso il riferimento precedente
h2CompleteUser.innerHTML = (userName + user2Name + userColor + 21)





// FACENDO DELLE PROVE
let name2NameColor=userName + " " +user2Name +userColor

console.log("Total info=", name2NameColor)
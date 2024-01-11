// -Stampa il cubo dei N numeri,
// dove N è un numero indicato dall’utente


let numeri = []
let risultato = document.getElementById("rs")
let risultatoCubi = "Il cubo dei numeri che hai inserito: "

for(let i= 0; i< 3; i++){
   let numero= prompt("scrivi un numero")
   numeri.push(parseFloat(numero))
   risultatoCubi += numeri[i] ** 3
   if (i < 2) {
    risultatoCubi+= ' ';
}
}

risultato.innerHTML= risultatoCubi


// Blocco 1 - JSnack 3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let numeri = []
let risultato= document.getElementById("rs")
let somma= 0




for(let i= 0; i< 10; i++){
   let numero= prompt("scrivi un numero")
   numeri.push(parseFloat(numero))
   somma += numeri[i]
}
risultato.innerHTML= `La somma dei numeri che hai inserito é ${somma}`





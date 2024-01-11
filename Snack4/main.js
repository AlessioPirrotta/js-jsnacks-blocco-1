// Crea un array di numeri interi e fai la somma di tutti 
// gli elementi che sono in posizione dispari



let listaNumeri= ["1","5","8","7","9","3","2","5","6","4"]
let risultato = document.getElementById("rs")
let somma= 0



for(let i= 0; i< listaNumeri.length; i++){
    let numero = parseInt(listaNumeri[i])
    if(i % 2 == 0){
        somma+= numero
    }

}
risultato.innerHTML = somma
console.log(listaNumeri)
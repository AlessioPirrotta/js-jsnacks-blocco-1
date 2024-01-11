// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista 
// di nomi e una lista di cognomi, e da queste vuole generare una
//  falsa lista di invitati con nome e cognome

let listaNomi = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hank", "Ivy", "Jack"];
let listaCognomi = ["Rossi", "Bianchi", "Verdi", "Neri", "Gialli", "Marroni", "Azzurri", "Rosa", "Viola", "Arancioni"];
let listaMista = []
let risultato = document.getElementById("rs")

for (let i=0; i <10; i++){
    let nomeRandom= listaNomi[Math.floor(Math.random() * listaNomi.length)]
    let cognomeRandom= listaCognomi[Math.floor(Math.random() * listaCognomi.length)]
    let nomeCognomeRandom= ` ${nomeRandom}  ${cognomeRandom}`
    listaMista.push(nomeCognomeRandom)
}
risultato.innerHTML = listaMista


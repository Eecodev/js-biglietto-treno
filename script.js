//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.

let mioDiv = document.getElementById('text');
console.dir(mioDiv);

let prezzoAlKm = 0.21;
console.log(prezzoAlKm);

let numeroDiKm = parseInt(prompt('Number of Km'));
console.log(numeroDiKm);

let prezzoBase = numeroDiKm * prezzoAlKm;

let client_age = parseInt(prompt('Your age'));
console.log(client_age);

if (client_age < 18) {
    prezzoBase = prezzoBase - (prezzoBase * 20/100);
    console.log('prezzoBase €', prezzoBase);
} else if (client_age >= 65){
    prezzoBase = prezzoBase - (prezzoBase * 40/100);
    console.log('prezzoBase €', prezzoBase);
} else{
    console.log('prezzoBase €', prezzoBase);
}
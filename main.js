const numberKm = parseFloat(prompt("Quanti Km vuoi percorrere?"));
const passengerAge = parseInt(prompt("Quanti anni ha il passeggero"));
//console.log(numberKm);
//console.log(passengerAge);

let ticketPrice = numberKm * 0.21;
//console.log(ticketPrice);

if (passengerAge < 18) {
    ticketPrice = ticketPrice - ((ticketPrice * 20) / 100)
    //console.log(ticketPrice);
}
else if (passengerAge >= 65) {
    ticketPrice = ticketPrice - ((ticketPrice * 40) / 100)
    //console.log(ticketPrice);
}

console.log(`Il prezzo del biglietto è ${ticketPrice.toFixed(2)} €`);

document.getElementById("prezzo").innerHTML = `Il prezzo del biglietto è ${ticketPrice.toFixed(2)} €`
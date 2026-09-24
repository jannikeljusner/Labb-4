"use strict";
/* Lösning till uppgift 3 av Jannike Ljusner */

// Skapar en variabel för att spara en valfri ålder
let age = 15;

// Kollar om åldern är under 18 år, då anges personen som barn
if (age < 18) {
    console.log("Barn");
} 
// Om personen inte är under 18, kollar vi om åldern är under 65, då anges personen som vuxen
else if (age < 65) {
    console.log("Vuxen");
} 
// Om inget av ovanstående stämmer är personen 65 eller äldre och anges som pensionär
else {
    console.log("Pensionär");
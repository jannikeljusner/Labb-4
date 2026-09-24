"use strict";
/* Lösning till uppgift 2 av Jannike Ljusner */
// 1. Skapar grundvärden för bingolotter
let price = 100;
let quantity = 3;

// 2. Räkna ut totalpris och totalpris med moms
let totalPrice = price * quantity;
let totalPriceWithTax = totalPrice * 1.25;

// 3. Skriv ut resultaten
console.log("Styckpris:", price, "kr");
console.log("Antal:", quantity, "st");
console.log("Totalt:", totalPrice, "kr");
console.log("Totalt med moms:", totalPriceWithTax, "kr");

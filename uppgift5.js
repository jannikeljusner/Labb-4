"use strict";
/* Lösning till uppgift 5 av Jannike Ljusner */
// Skapar en array med fem valfria maträtter
let food = ["Pölsa", "Tacos", "Blodpudding", "Soppa", "Pizza"];

// Skriver ut hela arrayen
console.log(food);

// Skriver ut det första elementet Pölsa (index 0)
console.log(food[0]);

// Skriver ut det sista elementet Pizza (index 4)
console.log(food[4]);

// Lägger till en ny maträtt sist i arrayen
food.push("Lasagne");

// Tar bort den första maträtten i arrayen (Pölsa)
food.shift();

// Skriver ut arrayen igen för att se förändringarna
console.log(food);

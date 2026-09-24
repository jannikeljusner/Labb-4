"use strict";
/* Lösning till uppgift 7 av Jannike Ljusner */

// 1. Array med tal
let numbers = [10, 5, 145, 56, 69, 89];

// 2. Funktion som tar emot en array (arr)
function sumArray(arr) {
  let sum = 0; // Nollställer miniräknaren

  // Loop som plussar ihop alla tal
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  // Skickar tillbaka det färdiga svaret
  return sum;
}

// 3. Utskriften: anropar funktionen med array 'numbers'
console.log(sumArray(numbers));

"use strict";
/* Lösning till uppgift 8 av Jannike Ljusner */

// 1. Vald Bok
let myBook = {
  titel: "It",
  författare: "Stephen King",
  utgivningsår: 1986,
};

// 2. Funktionen som skriver ut informationen
function printBook(book) {
  console.log(`Titel: ${book.titel}`);
  console.log(`Författare: ${book.författare}`);
  console.log(`Utgivningsår: ${book.utgivningsår}`);
}

// 3. Skickar
printBook(myBook);

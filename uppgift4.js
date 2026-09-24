"use strict";
/* Lösning till uppgift 4 av Jannike Ljusner */

// Startar en loop som räknar från 1 upp till och med 20
for (let i = 1; i <= 20; i++) {
  // Använder modulus för att kontrollera om talet går att dela jämnt på 2
  if (i % 2 === 0) {
    // Skriver ut siffran om påståendet ovan är sant
    console.log(i);
  }
}

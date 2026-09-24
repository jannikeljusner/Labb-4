"use strict";
/* Lösning till uppgift 9 av Jannike Ljusner */

// Array som innehåller objekt med information om tre personer
let people = [
  { name: "Anna", age: 30, city: "Sundsvall" },
  { name: "Markus", age: 16, city: "Härnösand" },
  { name: "Sofie", age: 45, city: "Hudiksvall" },
];

// Funktion som tar emot ett person-objekt, kontrollerar ålder och skriver ut resultatet
function checkPerson(person) {
  if (person.age >= 18) {
    console.log(`${person.name} bor i ${person.city} och är myndig.`);
  } else {
    console.log(`${person.name} bor i ${person.city} och är inte myndig.`);
  }
}

// Loop som går igenom hela arrayen och anropar funktionen för varje person
for (let i = 0; i < people.length; i++) {
  checkPerson(people[i]);
}

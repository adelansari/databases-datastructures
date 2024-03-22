'use strict';

const persons = require('./person.json');

function search(searchKey, value) {
  // error checking missing

  const found = [];
  for (const person of persons) {
    if (person[searchKey] == value) {
      found.push(person);
    }
  }

  return found;
}

console.log(`Persons with the first name 'Mary':`, search('firstname', 'Mary'));
console.log(`Persons with the last name 'River':`, search('lastname', 'River'));
console.log(`Persons with the age 30:`, search('age', 30));
const age = 30;
const result = search('age', age);
if (result.length > 0) {
  console.log(`Persons with the age ${age}:`);
  for (const person of result) {
    console.log(`- ${person.firstname} ${person.lastname}`);
  }
} else {
  console.log(`No persons with the age ${age} found.`);
}

const prompt = require('prompt-sync')();

let bornYear = prompt('What year were you born? ');
let today = new Date();
let currentYear = today.getFullYear();
let age = currentYear - bornYear;

console.log(`You are ${age} years old. 
You are smelling as new as fresh bought car!`);
const prompt = require('prompt-sync')();

let validateNumber = parseInt(prompt(`Insert a number: `));

let isEven = validateNumber % 2 === 0 ? 'Even Number' : 'Odd Number';

console.log(isEven);
const prompt = require('prompt-sync')();

let numbers = [];
let controlWhile = true;
do {
   let newNumber = parseFloat(prompt('Enter a number: '));
   if (numbers.includes(newNumber)) {
       console.log(`${newNumber} is already in the list.`);
   } else {
    numbers.push(newNumber);
    console.log(`${newNumber} is a new number!`);
   };
   
   let controlWhileAsk = prompt('Do you want to add more numbers? (y/n)');
   if (controlWhileAsk.includes('n')) {
       controlWhile = false;
   } else {
       controlWhile = true;
   };
} while (controlWhile);

numbers = numbers.sort((a, b) => a - b);
console.log(`The numbers are ${numbers}`);
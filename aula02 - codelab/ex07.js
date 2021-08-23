const prompt = require('prompt-sync')();

let foodPrice = parseFloat(prompt('Enter the price of the food: '));
let tipPercentage = (parseFloat(prompt('Enter the percentage of the tip: ')))/100;
let tipAmount = foodPrice * tipPercentage;
let bill = foodPrice + (foodPrice * tipPercentage);

console.log(`Your total bill is R$ ${bill.toFixed(2)}`);
console.log(`The total food you consumed was R$${foodPrice}.`);
console.log(`The tip is: ${tipPercentage}% or ${tipAmount.toFixed(2)}`);
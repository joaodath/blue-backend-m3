const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt('Insert the first number: '));
let num2 = parseFloat(prompt('Insert the second number: '));

let result = num1 > num2 ? num1 : num2 > num1 ? num2 : 'They are equal';

console.log(result);
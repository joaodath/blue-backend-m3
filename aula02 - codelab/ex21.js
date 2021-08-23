const prompt = require('prompt-sync')();
function dreamNumber(endNumber) {
  return Math.ceil(Math.random() * endNumber);
}

let numberGuess = dreamNumber(10);
// console.log(numberGuess);
let numberGuessed = parseFloat(prompt("Guess a number between 1 and 10: "));
result = numberGuessed == numberGuess ? "You got it!" : `You lost! The number was ${numberGuess}.`;
console.log(result);
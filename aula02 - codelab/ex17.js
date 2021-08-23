const prompt = require('prompt-sync')();

let multiplyNumber = parseInt(prompt('Inform the number to multiply by: '));

for (let i = 0; i < 10; i++) {
  console.log(`${multiplyNumber} X ${i+1} = ` + ((i+1)* multiplyNumber));
}
const prompt = require("prompt-sync")();

const username = prompt("What's your name? ");
const userAddress = prompt(`Hey, ${username}! What's your street address? `);
const userCEP = prompt(`${username}, what's your CEP? `);
const userPhone = prompt(`${username}, what's your phone number? `);

console.log(`${username}`);
console.log(`${userAddress}`);
console.log(`CEP: ${userCEP} - Phone ${userPhone}`);

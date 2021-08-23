const prompt = require('prompt-sync')();

let shoppingOrderCost = parseFloat(prompt("Please, inform the cost of this order: "));
let shoppingOrderPay = parseFloat(prompt("Please, inform the amount the client payed: "));
// the value informed must have . instead of ,

let shoppingOrderChange = Math.round(shoppingOrderPay - shoppingOrderCost);

console.log(`The change is R$${shoppingOrderChange.toFixed(2)}`);

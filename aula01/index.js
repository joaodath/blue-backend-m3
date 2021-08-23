const prompt = require("prompt-sync")();

const nome = prompt('Digite seu nome: ');
const idade = parseInt(prompt('Digite sua idade: '));

// Template String
console.log(`Seja bem vindo, ${nome} com idade ${idade}!`);
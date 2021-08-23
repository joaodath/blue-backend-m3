const prompt = require('prompt-sync')();

let monsterLife = parseInt(prompt('How many life points does the monster have? '));

let playerAttack = parseInt(prompt('How many attack points does the player have? '));

let monsterDefeatRounds = Math.ceil(monsterLife/playerAttack);

console.log(`The monster will die in ${monsterDefeatRounds} rounds.`);

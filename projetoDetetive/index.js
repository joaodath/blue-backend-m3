const prompt = require("prompt-sync")();

const name = prompt("What is your name? ");
console.log(`Starting the questioning for ${name}.`);

console.log(``);
console.log(``);

pointTotal = 0;
const ask1 = prompt("Did you call the victim? Yes/No ").toLowerCase();
answer = ask1.charAt(0);
if (answer === "y") {
    pointTotal += 1;
};

const ask2 = prompt("Were you at the scene of the crime? Yes/No ").toLowerCase();
answer = ask2.charAt(0);
if (answer === "y") {
    pointTotal += 1;
};

const ask3 = prompt("Were you in the area of the victim? Yes/No ").toLowerCase();
answer = ask3.charAt(0);
if (answer === "y") {
    pointTotal += 1;
};

const ask4 = prompt("Did you have debts with the victim? Yes/No ").toLowerCase();
answer = ask4.charAt(0);
if (answer === "y") {
    pointTotal += 1;
};

const ask5 = prompt("Have you worked with the victim? Yes/No ").toLowerCase();
answer = ask5.charAt(0);
if (answer === "y") {
    pointTotal += 1;
};

// checking
// Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".

if (pointTotal < 2) {
    console.log(`${name} is innocent.`);
} else if (pointTotal === 2) {
    console.log(`${name} is a suspect.`);
} else if (3 <= pointTotal <= 4) {
    console.log(`${name} is a partner on the crime.`);
} else if (pointTotal === 5) {
    console.log(`${name} is the killer.`);
};
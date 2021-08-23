const prompt = require('prompt-sync')();

let salaryOld = parseFloat(prompt('Salary R$: '));
let salaryNew = 0;
let salaryAdjust = " ";
let salaryRaise = 0;

if (salaryOld <= 280.00) {
    salaryNew = salaryOld + (salaryOld * 0.20);
    salaryAdjust = (0.20*100) + "%";
    salaryRaise = 0.20 * salaryOld;
} else if (salaryOld > 280.00 && salaryOld <= 700.00) {
    salaryNew = salaryOld + (salaryOld * 0.15);
    salaryAdjust = (0.15*100) + "%";
    salaryRaise = 0.15 * salaryOld;
} else if (salaryOld > 700.00 && salaryOld <= 1500.00) {
    salaryNew = salaryOld + (salaryOld * 0.10);
    salaryRaise = 0.10 * salaryOld;
    salaryAdjust = (0.10*100) + "%";
} else if (salaryOld > 1500.00) {
    salaryNew = salaryOld + (salaryOld * 0.05);
    salaryAdjust = (0.05*100) + "%";
    salaryRaise = 0.05 * salaryOld;
}

console.log(`Old Salary: R$${salaryOld}
Adjustment Applied: ${salaryAdjust}
Salary Raise: R$${salaryRaise}
New Salary: R$${salaryNew}`);
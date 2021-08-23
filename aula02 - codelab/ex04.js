const prompt = require("prompt-sync")();

let classSize = parseInt(prompt('How many students are in this class? '));

let dictStudents = {};

for (let i = 0; i < classSize; i++) {
    let studentName = prompt('What is the name of the student? ');
    let studentGrade = parseInt(prompt(`What is ${studentName}'s grade? `));	
    dictStudents[studentName] = studentGrade;
}

console.log(`
STUDENT         GRADE
=============  =======
`);
for (let [student,grade] of Object.entries(dictStudents)) {
    console.log(`${student}            ${grade}`);
}
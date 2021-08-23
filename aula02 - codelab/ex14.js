const prompt = require('prompt-sync')();

let gradeStudent = parseFloat(prompt('Insert the student\'s grade: '));

let result = '';

if (gradeStudent < 6) {
    result = 'F';
} else if (gradeStudent >= 6 && gradeStudent <= 7) {
    result = 'D';
} else if (gradeStudent > 7 && gradeStudent <= 8) {
    result = 'C';
} else if (gradeStudent > 8 && gradeStudent <= 9) {
    result = 'B';
} else if (gradeStudent > 9 && gradeStudent <= 10) {
    result = 'A';
};

console.log(result);

// Javascript | Math. sign( ) Function
// It returns 1 if the argument passed is a positive number.
// It returns -1 if the argument passed is a negative number.
// It returns 0 if the argument passed is a positive zero.
// It returns -0 if the argument passed is a negative zero.
// If none of the above cases match,it returns Nan.

const prompt = require('prompt-sync')();

let validateNumber = parseInt(prompt('Insert a real number. Zero [0] is not allowed: '));

let result = Math.sign(validateNumber);

do {
    let validateNumber = parseInt(prompt('Insert a real number. Zero [0] is not allowed : '));

    result = Math.sign(validateNumber);
} while (result === 0 || result === -0) {
    
};

if (result === 1) {
    console.log('The number is positive');
} else if (result === -1) {
    console.log('The number is negative');
} else if (result == 'Nan' || result == 'NaN') {
    console.log('Invalid number');
}
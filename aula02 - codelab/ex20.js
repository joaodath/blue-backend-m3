const prompt = require('prompt-sync')();
function vote(age){
    if (age < 16) {
        return 'VOTE DENIED';
    } else if (age >= 16 && age < 18 || age >= 70) {
        return 'VOTE OPTIONAL';
    } else if (age >= 18 && age < 70) {
        return 'VOTE REQUIRED';
    }
}

console.log(vote(parseInt(prompt('Enter your age: '))));    
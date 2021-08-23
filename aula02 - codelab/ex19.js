const prompt = require('prompt-sync')();
function area(width, lenght) {
    return width * lenght;
}

console.log(`The area is ${area(parseFloat(prompt('width: ')), parseFloat(prompt('lenght:')))} m²`);
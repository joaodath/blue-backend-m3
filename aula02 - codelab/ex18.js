const prompt = require('prompt-sync')();

//c is the main number, i is the mulitplier
for (let c = 1; c <= 10; c++) {
    for (let i = 1; i < 10; i++) {
    console.log(`${c} X ${i} = ` + (c * i));
    };
    console.log();
};
const prompt = require("prompt-sync")();
// Instantiates the dict of clients
const clients = {};
keepOn = true;

let userName = prompt(`What is your name? `);

while (keepOn == true) {
console.log(`
Welcome, ${userName}!
Here are your options:

1. Add a new client
2. Remove an existing client
3. List all clients
4. Exit the program`);

let userOption = parseInt(prompt(`Enter your choice: `));
if (userOption === 1) {
    let clientName = prompt(`Enter the client's name: `);
    let clientEmail = prompt(`Enter the client's email: `);
    clients[clientName] = clientEmail;
    console.log(`
    Client added successfully!
    Name: ${clientName}
    Email: ${clientEmail}`);
    keepOn = true;

} else if (userOption === 2) {
    let clientName = prompt(`Enter the client's name: `);
    if (clients[clientName]) {
        delete clients[clientName];
        console.log(`
        Client removed successfully!
        Name: ${clientName}`);
    } else {
        console.log(`
        Client not found!`);
    }
    keepOn = true;

} else if (userOption === 3) {
    console.log(`
    Clients: `);
    for (let [clientName, clientEmail] of Object.entries(clients)) {
        console.log(`
        Name: ${clientName}
        Email: ${clientEmail}
        ----- <> -----`);
    }
    keepOn = true;

} else if (userOption === 4) {
    keepOn = false;
    console.log(`Okay. Bye!`);

} else {
    console.log(`
    Invalid option!`);
    keepOn = true;
}
}
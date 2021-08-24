const calc = require('./calculadora');

const prompt = require('prompt-sync')();

console.log(`Olá!, bem vindo à ${calc.nome}!`);

const n1 = +prompt('Digite o primeiro número: ');
const n2 = +prompt('Digite o segundo número: ');
console.log()

console.log(`
Qual cálculo você gostaria de fazer?

[1] - Soma
[2] - Subtração
[3] - Multiplicação
[4] - Divisão
`);

const opcao = +prompt('Escolha uma opção: ');

if (opcao === 1) {
    console.log(`A soma de ${n1} e ${n2} é ${calc.soma(n1, n2)}`);
} else if (opcao === 2) {
    console.log(`A subtração de ${n1} e ${n2} é ${calc.subtracao(n1, n2)}`);
} else if (opcao === 3) {
    console.log(`A multiplicação de ${n1} e ${n2} é ${calc.multi(n1, n2)}`);
} else if (opcao === 4) {
    console.log(`A divisão de ${n1} e ${n2} é ${calc.div(n1, n2)}`);
} else {
    console.log('Opção inválida!');
};

// o mesmo if de cima, mas ternário
// opcao === 1 ? console.log(`A soma de ${n1} e ${n2} é ${calc.soma(n1, n2)}`) : opcao === 2 ? console.log(`A subtração de ${n1} e ${n2} é ${calc.subtracao(n1, n2)}`) : opcao === 3 ? console.log(`A multiplicação de ${n1} e ${n2} é ${calc.multi(n1, n2)}`) : opcao === 4 ? console.log(`A divisão de ${n1} e ${n2} é ${calc.div(n1, n2)}`) : console.log('Opção inválida!');

// tentar fazer esse if com switch depois
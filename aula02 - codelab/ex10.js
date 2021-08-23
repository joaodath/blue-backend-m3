const prompt = require('prompt-sync')();

console.log(`
I currently can convert from Real [R$] to the following currencies:
1 - Dollar [USD $]
2 - Euro [EUR €]
3 - Pound [GBP £]
4 - Canadian Dollar [CAD $]
5 - Argentinian Peso [ARS $]
6 - Chilean Peso [CLP $]
`);

let amoutToConvert = prompt(`Insert the value to be converted: `);

let dollarQuote = 0.19;
let euroQuote = 0.16;
let poundQuote = 0.14;
let canadianDollarQuote = 0.24;
let argentinianPesoQuote = 18.06;
let chileanPesoQuote = 146.25;

let dollar = (amoutToConvert * dollarQuote).toFixed(2);
let euro = (amoutToConvert * euroQuote).toFixed(2);
let pound = (amoutToConvert * poundQuote).toFixed(2);
let canadianDollar = (amoutToConvert * canadianDollarQuote).toFixed(2);
let argentinianPeso = (amoutToConvert * argentinianPesoQuote).toFixed(2);
let chileanPeso = (amoutToConvert * chileanPesoQuote).toFixed(2);

console.log(`
${amoutToConvert} R$ = ${dollar} USD
${amoutToConvert} R$ = ${euro} EUR
${amoutToConvert} R$ = ${pound} GBP
${amoutToConvert} R$ = ${canadianDollar} CAD
${amoutToConvert} R$ = ${argentinianPeso} ARS
${amoutToConvert} R$ = ${chileanPeso} CLP
`);

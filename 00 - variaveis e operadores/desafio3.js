const percokwh = 0.05;
const consumo = 280;
const taxaAdicional = 0.15;

const valorTotal = consumo * percokwh;
const valorComTaxa = valorTotal + (valorTotal * taxaAdicional);
console.log("O valor do gasto de energia é: R$" + valorComTaxa.toFixed(2));
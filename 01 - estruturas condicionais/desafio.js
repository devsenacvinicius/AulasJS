const precoEtanol = 4.5;
const precoGasolina = 5.89;
const tipoCombustivel = "gasolina";
const consumoMedio = 10;
const distancia = 112;

if (tipoCombustivel === "etanol") {
    valorGasto = (distancia / consumoMedio) * precoEtanol;
} else {
    valorGasto = (distancia / consumoMedio) * precoGasolina;
}
console.log("O valor gasto para realizar esta viagem é : R$"  + valorGasto.toFixed(2),
);

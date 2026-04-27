let precoCombustivel = 5.0;
let gastoMEDIO = 10;
let distancia = 100;


let combutivelNecessario = distancia / gastoMEDIO;
let valorGasto = combutivelNecessario * precoCombustivel;

console.log(`O valor gasto com combustível é R$ ${valorGasto.toFixed(2)}`);
// Exercício 1:
//Desenvolva uma função que receba um número como parâmetro e
// verifique se ele é par ou ímpar. Retorne true se for par e false se for ímpar.
function isPar(num) {
  return num % 2 === 0;
}
console.log(isPar(0));
console.log(isPar(0.9));

//modelo 2
function numPar(num) {
  if (num % 2 === 0) {
    return true;
  } else if (num === 0) {
    return "O número é zero, que é considerado par.";
  } else {
    return false;
  }
}
console.log(numPar(10));
console.log(numPar(0.9));

// Exercício 2:
//Implemente uma função que calcule a média aritmética de um array de
// números e retorne o resultado. Utilize essa função para calcular a
// média de diferentes conjuntos de números.
function mediaAritmetica(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return soma / arr.length;
}
console.log(mediaAritmetica([2, 4, 6, 8])); // 5
console.log(mediaAritmetica([8, 8, 6, 8])); // 7.5

//modelo 2
function mediaAritimetica(arr) {
  const soma = arr.reduce((acc, curr) => acc + curr, 0);
  return soma / arr.length;
}

console.log(mediaAritimetica([2, 4, 6, 8]));
console.log(mediaAritimetica([8, 8, 6, 8]));

//Exercício 3:
//Crie uma função que receba uma string como parâmetro e retorne a
// mesma string com todas as letras em caixa alta. Utilize essa
// função para converter diferentes strings.
function converterParaMaiuscula(str) {
  return str.toUpperCase();
}

console.log(converterParaMaiuscula("olá, mundo!")); // "OLÁ, MUNDO!"
console.log(converterParaMaiuscula("javascript é incrível!")); // "JAVASCRIPT É INCRÍVEL!"
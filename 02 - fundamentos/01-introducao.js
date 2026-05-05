function soma(a, b) {
  // Função para somar dois números
  return a + b; // Retorna a soma dos dois números
}

const numero1 = 5; // Declaração de uma variável para armazenar o primeiro número
const numero2 = 10; // Declaração de uma variável para armazenar o segundo número

const resultado = soma(numero1, numero2); // essa linha chama a função soma passando numero1 e numero2 como argumentos e armazena o resultado na variável resultado
console.log(`A soma de ${numero1} e ${numero2} são ${resultado}.`); // Imprime no console a mensagem com os números e o resultado da soma usando template literals
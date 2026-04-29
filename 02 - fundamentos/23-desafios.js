//Desafio 1
const saudacao = function (nome) {
    return `Olá, ${nome}!`;
};
console.log(saudacao("Maria")); // Saída: Olá, Maria!
setTimeout(function () {
    console.log("Esta mensagem aparece após 2 segundos.");
}, 2000);


//Desafio 2
const multiplicacao = function (a, b) {
    return a * b;
};
console.log(multiplicacao(5, 3)); // Saída: 15


//Desafio 3
const numeros = [1, 2, 3, 4, 5];
const quadrados = numeros.map(function (num) {
    return num * num;
});


//Desafio 4
const pessoas = [
    { nome: "Alice", idade: 30 },
    { nome: "Bob", idade: 25 },
    { nome: "Charlie", idade: 35 }
];


//Desafio 5
const compararIdade = function (pessoa1, pessoa2) {
    if (pessoa1.idade > pessoa2.idade) {
        return `${pessoa1.nome} é mais velha que ${pessoa2.nome}.`;
    } else if (pessoa1.idade < pessoa2.idade) {
        return `${pessoa1.nome} é mais nova que ${pessoa2.nome}.`;
    } else {
        return `${pessoa1.nome} e ${pessoa2.nome} têm a mesma idade.`;
    }
};
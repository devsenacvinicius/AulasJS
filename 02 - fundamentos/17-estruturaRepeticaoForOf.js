// Estruturs de repetição for...of
// O for...of é uma estrutura de repetição introduzida no ECMAScript
// 2015 (ES6) que permite iterar sobre elementos de objetos
// iteráveis, como arrays, strings, mapas,
// conjuntos e outros objetos que implementam o protocolo de iteração. Ele é
// especialmente útil para percorrer coleções de dados de forma
// mais concisa e legível.

// Exemplo de uso do for...of com um array
const listaDeEmails = [
    "marciocoutinho@gmail.com",
    "adelecoutinho@gmail.com",
    "senac@gmail.com",
];

for (let email of listaDeEmails) {
    console.log(`Envindando email para: ${email}`);
}

// Exemplo de uso do for...of com uma string
const nome = "Marcio Coutinho";
for (let char of nome) {
    console.log(char);
}
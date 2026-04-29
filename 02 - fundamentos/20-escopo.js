// Escopo em JavaScript
// O escopo determina a visibilidade e acessibilidade de variáveis
// funções e objetos em diferentes partes do código.
// Existem dois tipos principais de escopo: global e local (ou de função).

// Escopo Global
var escopoGlobal = "Eu sou uma variável global";

function mostrarescopoGlobal() {
    let escopoGlobal = "Eu sou uma variável local";
    console.log(escopoGlobal); // Acessível dentro da função
}

mostrarescopoGlobal(); // Chama a função para mostrar o escopo global
console.log(escopoGlobal);  // Erro: escopoLocal não é definido
console.log(escopoGlobal); // Acessível fora da função
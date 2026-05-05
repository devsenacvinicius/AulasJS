// Escopo em JavaScript
// O escopo determina a visibilidade e acessibilidade de variáveis
// e funções em diferentes partes do código.
// Existem dois tipos principais de escopo: global e local (ou de função).

// Escopo Global
let escopoGlobal = "Eu sou uma variável global";

function mostrarEscopoGlobal() {
  let escopoLocal = "Eu sou uma variável local";
  console.log(escopoLocal); // Acessível dentro da função
}

mostrarEscopoGlobal(); // Chama a função para mostrar o escopo global
console.log(escopoLocal); // Erro: variável não acessível fora da função
console.log(escopoGlobal); // Acessível fora da função
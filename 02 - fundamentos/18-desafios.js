// Desafio 01 Arrays
const frutas = ["Banana", "Maçã", "Uva", "Abacaxi", "Laranja"];
console.log(frutas.length);

// Desafio 02 For
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Desafio 03 For...in
let usuario = {
    nome: "Marcio",
    email: "marcio@gmail.com",
};
for (let chave in usuario) {
    console.log(chave + ": " + usuario[chave]);
}

// Desafio 04 For...of
for (let fruta of frutas) {
    console.log(fruta);
}

// Desafio 05
function encontrarFruta(fruta) {
    for (let i = 0; i < frutas.length; i++) {
        if (frutas[i] === fruta) {
          return "Fruta encontrada: ";
        }
    }
    return "Fruta não encontrada: ";
}
console.log(encontrarFruta("Uva"));
console.log(encontrarFruta("Pera"));

// Desafio 01 Arrays
const frutas = ["banana", "Maçã", "Uva", "jaca", "manga"];
console.log(frutas.length);

// Desafio 02 for
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// Desafio 03 for...in
let usuario = {
  nome: "Marcio",
  email: "marcio@gmail.com",
};
for (let porta in usuario) {
  console.log(porta + ": " + usuario[porta]);
}

// Desafio 04 for...of
for (let fruta of frutas) {
  console.log(fruta);
}

// Desafio 05
function encontrarFruta(fruta) {
  for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] === fruta) {
      return "Fruta encontrada";
    }
  }
  return "Fruta não encontrada";
}
console.log(encontrarFruta("banana"));
console.log(encontrarFruta("coco"));
// Tipos Primitivos

// String
// Number
// Boolean
// Undefined
// Null
// Symbol

// String: Representa uma sequência de caracteres
let nome = "Marcio Coutinho";
let nome2 = "Adele";
let nome3 = "João";
let nome4 = `Maria`;

// Number: Representa números, tanto inteiros quanto decimais
let idade = 30;
let altura = 1.75;

// Boolean: Representa um valor lógico, que pode ser
// verdadeiro (true) ou falso (false)
let isStudent = true;
let isMarried = false;

let eEstudante = true;
let eCasado = false;

// Undefined: Representa uma variável que foi declarada,
// mas ainda não foi atribuída um valor
let endereco;
let telefone;
console.log(endereco); // undefined

// Null: Representa a ausência intencional de um valor
let salario = null;

// Symbol: Representa um valor único e imutável, geralmente
// usado como identificador
let id = Symbol("id");
let id2 = Symbol("id");

console.log(nome); // Marcio Coutinho
console.log(nome2); // Adele
console.log(nome3); // João
console.log(nome4); // Maria
console.log(idade); // 30
console.log(altura); // 1.75
console.log(isStudent); // true
console.log(isMarried); // false
console.log(eEstudante); // true
console.log(eCasado); // false
console.log(salario); // null
console.log(id); // Symbol(id)
console.log(id2); // Symbol(id)
console.log(id === id2); // false (cada Symbol é único)
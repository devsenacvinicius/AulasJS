// Estruturas de repetição - for in

// for in - lê os índices ou chaves do objeto
const pessoa = {
  nome: "Marcio",
  idade: 36,
  profissao: "Programador",
};

for (const atributo in pessoa) {
  console.log("O atributo " + atributo + " = " + pessoa[atributo]);
}
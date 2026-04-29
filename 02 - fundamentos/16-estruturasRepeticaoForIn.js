// Estruturas de repetição

// For in - lê os índices ou chaves do objeto
const pessoa = {
    nome: "Vinicius",
    idade: 22,
    profissao: "programador",
};

for (const atributo in pessoa) {
    console.log("atributo: " + atributo + " = " + pessoa[atributo]);
}

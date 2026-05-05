// Objetos são coleções de propriedades, onde cada
// propriedade é uma associação entre um
// nome (chave) e um valor.
// Eles são usados para armazenar e organizar dados relacionados.

// Criando um objeto
let pessoa = {
  nome: "Marcio",
  idade: 30,
  profissao: "Desenvolvedor",
  taTrabalhando: true,
  saudacao: function () {
    console.log("Olá, meu nome é " + this.nome);
  },
};

// Acessando propriedades
console.log(pessoa.nome); // acessando a propriedade 'nome'
console.log(pessoa.idade); // acessando a propriedade 'idade'
console.log(pessoa.profissao); // acessando a propriedade 'profissao'
console.log(pessoa.taTrabalhando); // acessando a propriedade 'taTrabalhando'
console.log(pessoa); // acessando o objeto completo

pessoa.saudacao(); // chamando o método 'saudacao'
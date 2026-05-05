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

// Modificando propriedades
pessoa.idade = 31;
pessoa.profissao = "Engenheiro de Software";

console.log(pessoa);

// Adicionando novas propriedades
pessoa.cidade = "Arapiraca";

console.log(pessoa);

// Deletando propriedades
delete pessoa.taTrabalhando;
console.log(pessoa);
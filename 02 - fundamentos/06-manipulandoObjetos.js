// Criando um objeto
let pessoa = {
    nome: "Marcio",
    idade: 30,
    profissao: "Desenvolvedor",
    taTrabalnhando: true,
    saudacao: function() {
        console.log("Olá, meu nome é " + this.nome);
    },
};

// modificando uma propriedades
pessoa.idade = 31;
pessoa.profissao = "Engenheiro de Software";

console.log(pessoa);

// Adicionando novas propriedades
pessoa.cidade = "Arapiraca";

console.log(pessoa);

// Deletando propriedades
delete pessoa.taTrabalnhando;
console.log(pessoa);

// Objetos são coleções de propriedades,
// onde cada propriedade é uma associação entre um
// nome (chave) e um valor.
// Eles são usados para armazenar dados e funcionalidades relacionados em uma única estrutura.

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

// Acessando propriedades
console.log(pessoa.nome); // acessando a propriedade 'nome'
console.log(pessoa["idade"]); // acessando a propriedade 'idade' usando notação de colchetes
console.log(pessoa.profissao); // acessando a propriedade 'profissao'
console.log(pessoa.taTrabalnhando); // acessando a propriedade 'taTrabalnhando'
console.log(pessoa);

pessoa.saudacao(); // chamando o método 'saudacao'

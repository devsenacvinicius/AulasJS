// Desafio 01
let nome = "Marcio Coutinho";
let idade = 37;
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

// Desafio 02
let saudacao = "Olá, seja bem-vindo!";
saudacao = 15;
console.log(saudacao);

// Desafio 03
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

// Desafio 04
pessoa.hobbies = ["Programar", "Viajar", "Cozinhar"];
console.log(pessoa.hobbies);

// Desafio 05
let media = 4.3;
if (media >= 7) {
  console.log("Parabéns você é um aluno: Aprovado");
} else if (media < 6 && media >= 4) {
  console.log("Você é um aluno: Recuperação");
} else {
  console.log("Infelizmente você é um aluno: Reprovado");
}
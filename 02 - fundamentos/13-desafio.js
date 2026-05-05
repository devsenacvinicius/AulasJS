// Desafio 01 Switch Case
let diaSemana = Math.floor(Math.random() * 7);
let nomeDia;

switch (diaSemana) {
  case 0:
    nomeDia = "Hoje é Domingo";
    break;
  case 1:
    nomeDia = "Hoje é Segunda-feira";
    break;
  case 2:
    nomeDia = "Hoje é Terça-feira";
    break;
  case 3:
    nomeDia = "Hoje é Quarta-feira";
    break;
  case 4:
    nomeDia = "Hoje é Quinta-feira";
    break;
  case 5:
    nomeDia = "Hoje é Sexta-feira";
    break;
  case 6:
    nomeDia = "Hoje é Sábado";
    break;
  default:
    nomeDia = "Número inválido, não existe mais dia na semana";
}
console.log(nomeDia);

//Desafio 02
let num = 0;
if (num >= 10 && num <= 20) {
  console.log("O número está entre 10 e 20");
} else if (num === 5) {
  console.log("Seu número é igual a 5");
} else {
  console.log("Seu número é NADA");
}

// Desafio 03
let nome = "Marcio Coutinho";
let sobreNome = "Coutinho";

if (nome === sobreNome) {
  console.log("Os nomes são iguais");
} else {
  console.log("Os nomes são diferentes");
}
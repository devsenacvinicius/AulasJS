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
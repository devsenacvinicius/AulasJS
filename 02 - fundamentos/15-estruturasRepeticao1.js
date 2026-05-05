// Estruturas de Repetição 1
// for

// Inicialização; Condição de parada; Incremento/Decremento
for (let i = 0; i < 100; i++) {
  console.log("Executando o for: " + i);
}

const listaDeEmails = [
  "marciocoutinho@gmail.com",
  "adelecoutinho@gmail.com",
  "senaca@gmail.com",
];

for (let i = 0; i < listaDeEmails.length; i++) {
  console.log("Enviando email para: " + listaDeEmails[i]);
}
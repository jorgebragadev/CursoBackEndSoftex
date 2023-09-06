const entrada = require('prompt-sync')({ sigint: true });

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
      return "Par";
    } else {
      return "Ímpar";
    }
  }
  
  // Solicita ao usuário um número
  const numeroDigitado = parseInt(entrada("Digite um número:"));
  
  // Chama a função para verificar se o número é par ou ímpar e exibe o resultado
  const resultado = verificarParOuImpar(numeroDigitado);
  console.log(`O número ${numeroDigitado} é ${resultado}.`);
  
  
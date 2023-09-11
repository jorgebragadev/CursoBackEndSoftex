const entrada = require('prompt-sync')({ sigint: true });

try {
    // Solicita ao usuário dois números
    let numero1 = parseFloat(entrada("Informe o primeiro número:"));
    let numero2 = parseFloat(entrada("Informe o segundo número:"));
  
    if (isNaN(numero1) || isNaN(numero2)) {
      throw new Error("Você precisa informar números válidos.");
    }
  
    let resultado = numero1 / numero2;
  
    if (numero2 === 0) {
      throw new Error("A divisão por zero não é permitida.");
    }
  
    console.log(`O resultado da operação é: ${resultado}`);
  } catch (erro) {
    console.error(`Ocorreu um erro: ${erro.message}`);
  } finally {
    console.log("Fim da execução do programa.");
  }
  
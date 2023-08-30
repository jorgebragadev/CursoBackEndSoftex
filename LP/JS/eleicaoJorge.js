// Inicializando os votos
let candidato_X = 0;
let candidato_Y = 0;
let candidato_Z = 0;
let branco = 0;
let nulo = 0;

// Função para verificar se um valor é um número inteiro
function isInteger(value) {
  return /^\d+$/.test(value);
}

// Função para registrar um voto
function votar(candidato) {
  if (candidato === "X") {
    candidato_X++;
  } else if (candidato === "Y") {
    candidato_Y++;
  } else if (candidato === "Z") {
    candidato_Z++;
  } else if (candidato === "BRANCO") {
    branco++;
  } else {
    nulo++;
  }
}

// Loop de votação
while (true) {
  let voto = prompt(`Digite o número do candidato:
                     X = 889
                     Y = 847 
                     Z = 515
                     BRANCO = 0 (para voto em branco). 
                     Digite 'FIM' para encerrar a votação:`);
  if (voto === "FIM" || voto === "fim") {
    break;
  } else if (isInteger(voto)) {
    voto = parseInt(voto);
    if (voto === 889) {
      votar("X");
    } else if (voto === 847) {
      votar("Y");
    } else if (voto === 515) {
      votar("Z");
    } else if (voto === 0) {
      votar("BRANCO");
    } else {
      votar("NULO");
    }
  } else {
    alert("Voto inválido. Por favor, vote novamente.");
  }
}

// Calculando o vencedor
let vencedor;
let maiorVotos = 0;
if (candidato_X > candidato_Y && candidato_X > candidato_Z) {
  vencedor = "X";
  maiorVotos++;
}else if (candidato_Y > candidato_X && candidato_Y > candidato_Z) {
  vencedor = "Y";
  maiorVotos++;
} else if (candidato_Z > candidato_X && candidato_Z > candidato_y) {
  vencedor = "Z";
  maiorVotos ++;
}
somaTotal = 0;
somaTotal = candidato_X + candidato_Y + candidato_Z + branco + nulo;
// Exibindo os resultados
alert (`Resultado da eleição: 
        Candidato X: ${candidato_X} votos
        Candidato Y: ${candidato_Y} votos
        Candidato Z: ${candidato_Z} votos
        Votos em branco: ${branco}
        Votos nulos: ${nulo}
        Vencedor: Candidato ${vencedor} com ${maiorVotos} votos
        Soma Total = ${somaTotal}`);
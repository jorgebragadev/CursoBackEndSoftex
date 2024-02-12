const fila = [3, 7, 9, 1, 0];

// Função para remover o primeiro elemento da fila
function removerDaFila() {
  return fila.shift();
}

// Removendo todos os elementos da fila e exibindo a sequência
const sequenciaFila = [];
while (fila.length > 0) {
  sequenciaFila.push(removerDaFila());
}

console.log("Sequência removida na fila:", sequenciaFila);

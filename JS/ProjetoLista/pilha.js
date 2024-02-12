const pilha = [3, 7, 9, 1, 0];

// Função para remover o último elemento da pilha
function removerDaPilha() {
  return pilha.pop();
}

// Removendo todos os elementos da pilha e exibindo a sequência
const sequenciaPilha = [];
while (pilha.length > 0) {
  sequenciaPilha.push(removerDaPilha());
}

console.log("Sequência removida na pilha:", sequenciaPilha);

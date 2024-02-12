const lista = [3, 7, 9, 1, 0];

// Removendo todos os elementos da lista e exibindo a sequência
const sequenciaLista = [];
while (lista.length > 0) {
  sequenciaLista.push(lista.shift());
}

console.log("Sequência removida na lista:", sequenciaLista);

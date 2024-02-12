function buscaBinaria(array, valor) {
  let esquerda = 0;
  let direita = array.length - 1;

  while (esquerda <= direita) {
    const meio = Math.floor((esquerda + direita) / 2);

    if (array[meio] === valor) {
      return meio; 
    } else if (array[meio] < valor) {
      esquerda = meio + 1; 
    } else {
      direita = meio - 1; 
    }
  }

  return -1; 
}

const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const valorProcurado = 20;

const indice = buscaBinaria(array, valorProcurado);

if (indice !== -1) {
  console.log(`O valor ${valorProcurado} foi encontrado no índice ${indice}.`);
} else {
  console.log(`O valor ${valorProcurado} não foi encontrado no array.`);
}

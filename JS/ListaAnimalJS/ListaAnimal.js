// Criar uma matriz bidimensional para armazenar informações sobre animais
const animais = [
  // [nome, espécie, idade]
  ["Leão", "Felino", 5],
  ["Girafa", "Herbívoro", 7],
  ["Elefante", "Herbívoro", 10],
  ["Águia", "Ave", 3],
  ["Tubarão", "Peixe", 15],

];

// Função para exibir informações sobre os animais
function exibirInformacoesAnimais(animais) {
  console.log("Nome\t\tEspécie\t\tIdade");
  console.log("--------------------------------");
  for (const animal of animais) {
    const [nome, especie, idade] = animal;
    console.log(`${nome}\t\t${especie}\t\t${idade}`);
  }
}

// Chamando a função para exibir as informações dos animais
exibirInformacoesAnimais(animais);

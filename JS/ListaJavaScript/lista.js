// Criando as listas
let nomes = ["Alice", "Bob", "Jorge", "Diana", "Eva", "Fernando", "Gabriel", "Helena", "Isabela", "João"];
let idades = [25, 30, 22, 27, 29, 33, 26, 28, 24, 31];
let coresFavoritas = ["azul", "verde", "rosa", "amarelo", "roxo", "vermelho", "laranja", "preto", "branco", "cinza"];

// Imprimindo as listas originais
console.log("Lista de nomes:", nomes);
console.log("Lista de idades:", idades);
console.log("Lista de cores favoritas:", coresFavoritas);

// Fazendo modificações
idades[2] = 47; // Alterando a idade da terceira pessoa (Carlos) para 23
coresFavoritas[5] = "azul-marinho"; // Alterando a cor favorita da sexta pessoa (Fernando) para "azul-marinho"

// Imprimindo as listas modificadas
console.log("\nApós modificações:");
console.log("Lista de nomes:", nomes);
console.log("Lista de idades:", idades);
console.log("Lista de cores favoritas:", coresFavoritas);

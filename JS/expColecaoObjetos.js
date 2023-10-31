// Criei um Map para armazenar as informações dos participantes e suas pontuações
const pontuacoes = new Map();


pontuacoes.set("João", 50);
pontuacoes.set("Pedro", 120);
pontuacoes.set("Luiza", 70);
pontuacoes.set("Marcela", 10);
pontuacoes.set("Yuri", 34);


for (const [nome, pontuacao] of pontuacoes) {
  console.log(`${nome}: ${pontuacao}`);
}





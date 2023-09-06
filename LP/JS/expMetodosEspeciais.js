class Pessoa {
    constructor(nome, idade) {
      this._nome = nome; 
      this._idade = idade;
    }
  
    // Método acessor para obter o nome
    get nome() {
      return this._nome;
    }
  
    // Método acessor para obter a idade
    get idade() {
      return this._idade;
    }
  
    // Método modificador para definir o nome
    set nome(novoNome) {
      if (typeof novoNome === 'string') {
        this._nome = novoNome;
      } else {
        console.log('O nome deve ser uma string.');
      }
    }
  
    // Método modificador para definir a idade
    set idade(novaIdade) {
      if (typeof novaIdade === 'number' && novaIdade > 0) {
        this._idade = novaIdade;
      } else {
        console.log('A idade deve ser um número positivo.');
      }
    }
  }
  
  const pessoa1 = new Pessoa('Alice', 30);
  
  console.log(`Nome: ${pessoa1.nome}`);
  console.log(`Idade: ${pessoa1.idade}`);
  
  pessoa1.nome = 'Bob';
  pessoa1.idade = 25;
  
  console.log(`Novo Nome: ${pessoa1.nome}`);
  console.log(`Nova Idade: ${pessoa1.idade}`);
  
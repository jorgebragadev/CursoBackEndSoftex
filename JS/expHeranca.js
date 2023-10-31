
class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  

    exibirInfo() {
      console.log(`Nome: ${this.nome}`);
      console.log(`Idade: ${this.idade}`);
    }
  }
  
  // Classe derivada Funcionario que herda de Pessoa
  class Funcionario extends Pessoa {
    constructor(nome, idade, cargo, salario) {
      super(nome, idade); 
      this.cargo = cargo;
      this.salario = salario;
    }
  
    // Método para exibir informações do funcionário, incluindo cargo e salário
    exibirInfo() {
      super.exibirInfo(); // Chama o método da classe base
      console.log(`Cargo: ${this.cargo}`);
      console.log(`Salário: R$ ${this.salario.toFixed(2)}`);
    }
  }
  

  const pessoa = new Pessoa("Alice", 30);
  
 
  const funcionario = new Funcionario("Bob", 25, "Desenvolvedor", 5000);
  
  // Exibindo informações da pessoa e do funcionário
  console.log("Informações da Pessoa:");
  pessoa.exibirInfo();
  
  console.log("\nInformações do Funcionário:");
  funcionario.exibirInfo();
  
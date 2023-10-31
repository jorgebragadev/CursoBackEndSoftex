console.log("Objeto Material: Carro");

class Carro {
    constructor(marca, modelo, anoFabricacao) {
      this.marca = marca;
      this.modelo = modelo;
      this.anoFabricacao = anoFabricacao;
      this.motorLigado = false;
      this.velocidadeAtual = 0;
    }
  
    ligarMotor() {
      this.motorLigado = true;
      console.log(`O motor do ${this.marca} ${this.modelo} foi ligado.`);
    }
  
    acelerar(velocidade) {
      if (this.motorLigado) {
        this.velocidadeAtual += velocidade;
        console.log(`O ${this.modelo} está agora a ${this.velocidadeAtual} km/h.`);
      } else {
        console.log("Ligue o motor antes de acelerar.");
      }
    }
  
    parar() {
      this.velocidadeAtual = 0;
      console.log(`O ${this.modelo} parou.`);
    }
  }
  
  const meuCarro = new Carro("Toyota", "Corolla", 2022);
  meuCarro.ligarMotor();
  meuCarro.acelerar(60);
  meuCarro.parar();
  
  console.log();
  console.log("Objeto Material: Livro");
  class Livro {
    constructor(titulo, autor, numPaginas) {
      this.titulo = titulo;
      this.autor = autor;
      this.numPaginas = numPaginas;
      this.paginaAtual = 1;
      this.aberto = false;
    }
  
    abrirLivro() {
      this.aberto = true;
      console.log(`O livro "${this.titulo}" de ${this.autor} foi aberto.`);
    }
  
    virarPagina() {
      if (this.aberto && this.paginaAtual < this.numPaginas) {
        this.paginaAtual++;
        console.log(`Página ${this.paginaAtual} está sendo visualizada.`);
      } else if (this.aberto) {
        console.log("Você já chegou à última página.");
      } else {
        console.log("Abra o livro antes de virar a página.");
      }
    }

  
    fecharLivro() {
      this.aberto = false;
      console.log(`O livro "${this.titulo}" de ${this.autor} foi fechado.`);
    }
  }
  
  const meuLivro = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1000);
  meuLivro.abrirLivro();
  meuLivro.virarPagina();
  meuLivro.fecharLivro();


  console.log();
  console.log("Objeto Abstrato: Conta Bancária");
  class ContaBancaria {
    constructor(numeroConta, saldoInicial, nomeTitular) {
      this.numeroConta = numeroConta;
      this.saldo = saldoInicial;
      this.nomeTitular = nomeTitular;
    }
  
    depositar(valor) {
      this.saldo += valor;
      console.log(`Depósito de R$${valor} realizado na conta de ${this.nomeTitular}. Saldo atual: R$${this.saldo}`);
    }
  
    sacar(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado na conta de ${this.nomeTitular}. Saldo atual: R$${this.saldo}`);
      } else {
        console.log(`Saldo insuficiente na conta de ${this.nomeTitular}.`);
      }
    }
  
    verificarSaldo() {
      console.log(`Saldo na conta de ${this.nomeTitular}: R$${this.saldo}`);
    }
  }
  
  const minhaConta = new ContaBancaria("12345", 1000, "João");
  minhaConta.depositar(500);
  minhaConta.sacar(300);
  minhaConta.verificarSaldo();

  console.log();
  console.log("Objeto Abstrato: Rede Social")
 
  class RedeSocial {
    constructor(nome, numUsuarios, dataCriacao) {
      this.nome = nome;
      this.numUsuarios = numUsuarios;
      this.dataCriacao = dataCriacao;
    }
  
    criarPostagem(usuario, conteudo) {
      console.log(`${usuario} criou uma postagem em ${this.nome}: "${conteudo}"`);
    }
  
    curtirPostagem(usuario, postagem) {
      console.log(`${usuario} curtiu a postagem de ${postagem}`);
    }
  
    compartilharPostagem(usuario, postagem) {
      console.log(`${usuario} compartilhou a postagem de ${postagem}`);
    }
  }
  
  const minhaRedeSocial = new RedeSocial("Facebook", "2.8 bilhões", "04/02/2004");
  minhaRedeSocial.criarPostagem("Alice", "Que dia lindo!");
  minhaRedeSocial.curtirPostagem("Bob", "Alice");
  minhaRedeSocial.compartilharPostagem("Charlie", "Bob");
  
  
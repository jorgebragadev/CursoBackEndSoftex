class MinhaClasse {
    constructor(valor) {
      this.valor = valor;
    }
  
// Método de instância
    imprimirValor() {
      console.log(`Valor: ${this.valor}`);
    }
  
// Método estático
    static metodoEstatico() {
      console.log("Este é um método estático da classe.");
    }
  }
  
  // Criando uma instância da classe
  const instancia = new MinhaClasse(42);
  
  // Chamando o método de instância
  instancia.imprimirValor();
  
  // Chamando o método estático diretamente na classe
  MinhaClasse.metodoEstatico();
  
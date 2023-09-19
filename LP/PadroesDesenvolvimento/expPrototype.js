// Classe abstrata Veiculo
class Veiculo {
    constructor(tipo, modelo, marca, cor, numeroRodas) {
      this.tipo = tipo;
      this.modelo = modelo;
      this.marca = marca;
      this.cor = cor;
      this.numeroRodas = numeroRodas;
    }
  
    clone() {
      // Cria um clone das propriedades do veículo atual
      const clonePropVeiculo = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
      return clonePropVeiculo;
    }
  
    represent() {
      // Método para representar o veículo
      return `Tipo: ${this.tipo}, Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}`;
    }
  }
  
  // Subclasse Carro
  class Carro extends Veiculo {
    constructor(tipo, modelo, marca, cor, numeroRodas, numeroPortas) {
      super(tipo, modelo, marca, cor, numeroRodas);
      this.numeroPortas = numeroPortas;
    }
  
    represent() {
      // Sobrescreve o método e incluir o número de portas
      return `${super.represent()}, Portas: ${this.numeroPortas}`;
    }
  }
  
  // Subclasse Moto
  class Moto extends Veiculo {
    constructor(tipo, modelo, marca, cor, numeroRodas, cilindradas) {
      super(tipo, modelo, marca, cor, numeroRodas);
      this.cilindradas = cilindradas;
    }
  
    represent() {
      // Sobrescreve o método e incluir as cilindradas
      return `${super.represent()}, Cilindradas: ${this.cilindradas}`;
    }
  }
  
  // Classe Aplicacao
  class Aplicacao {
    static criarVeiculos() {
      const veiculos = [];
      
      const carro1 = new Carro('Carro', 'Sedan', 'Ford', 'Prata', 4, 4);
      const carro2 = new Carro('Carro', 'Hatchback', 'Volkswagen', 'Azul', 4, 2);
      const moto1 = new Moto('Moto', 'Esportiva', 'Honda', 'Vermelha', 2, 1000);
      const moto2 = new Moto('Moto', 'Custom', 'Harley-Davidson', 'Preto', 2, 1200);
  
      veiculos.push(carro1, carro2, moto1, moto2);
  
      return veiculos;
    }
  
    static cloneVeiculos(veiculos) {
      const clonedVeiculos = [];
      
      for (const veiculo of veiculos) {
        const clone = veiculo.clone();
        clonedVeiculos.push(clone);
      }
  
      return clonedVeiculos;
    }
  
    static representarVeiculos(veiculos) {
      for (const veiculo of veiculos) {
        console.log(veiculo.represent());
      }
    }
  }
  
  const veiculosOriginais = Aplicacao.criarVeiculos();
  const veiculosClonados = Aplicacao.cloneVeiculos(veiculosOriginais);
  
  console.log('Veículos Originais:');
  Aplicacao.representarVeiculos(veiculosOriginais);
  
  console.log('\nVeículos Clonados:');
  Aplicacao.representarVeiculos(veiculosClonados);
  
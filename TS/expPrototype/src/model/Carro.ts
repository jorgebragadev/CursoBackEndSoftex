import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo {
    constructor(
      modelo: string,
      marca: string,
      cor: string,
      numeroRodas: number,
      private numeroPortas: number
    ) {
      super(modelo, marca, cor, numeroRodas);
    }
  
    clone(): Carro {
      return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas);
    }
  
    represent(): string {
      return `Carro - Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}, Portas: ${this.numeroPortas}`;
    }
  }
  
  
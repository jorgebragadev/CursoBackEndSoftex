import { Veiculo } from "./Veiculo";

export class Moto extends Veiculo {
    constructor(
      modelo: string,
      marca: string,
      cor: string,
      numeroRodas: number,
      private cilindradas: number
    ) {
      super(modelo, marca, cor, numeroRodas);
    }
  
    clone(): Moto {
      return new Moto(this.modelo, this.marca, this.cor, this.numeroRodas, this.cilindradas);
    }
  
    represent(): string {
      return `Moto - Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}, Cilindradas: ${this.cilindradas}`;
    }
  }
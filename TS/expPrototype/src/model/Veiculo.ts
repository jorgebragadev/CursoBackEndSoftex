
export abstract class Veiculo {
    constructor(
      protected modelo: string,
      protected marca: string,
      protected cor: string,
      protected numeroRodas: number
    ) {}
  
    abstract clone(): Veiculo;
    abstract represent(): string;
  }
  
  
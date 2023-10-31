
export abstract class Sanduiche {
    descricao: string = "Sanduíche";
  
    abstract custo(): number;
  
    getDescricao(): string {
      return this.descricao;
    }
  }
  
  
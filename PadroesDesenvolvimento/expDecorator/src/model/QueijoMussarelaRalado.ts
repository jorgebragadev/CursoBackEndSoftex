import { Sanduiche } from "./Sanduiche";

// Decorator para adicionar queijo mussarela ralado ao sanduíche
export class QueijoMussarelaRalado extends Sanduiche {
    constructor(private sanduiche: Sanduiche) {
      super();
    }
  
    custo(): number {
      return this.sanduiche.custo() + 2.00;
    }
  
    getDescricao(): string {
      return `${this.sanduiche.getDescricao()}, Queijo Mussarela Ralado`;
    }
  }
  
  
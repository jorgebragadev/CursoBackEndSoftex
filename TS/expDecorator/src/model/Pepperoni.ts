import { Sanduiche } from "./Sanduiche";

export class Pepperoni extends Sanduiche {
    constructor(private sanduiche: Sanduiche) {
      super();
    }
  
    custo(): number {
      return this.sanduiche.custo() + 0.99;
    }
  
    getDescricao(): string {
      return `${this.sanduiche.getDescricao()}, Pepperoni`;
    }
  }
  
  
import { Sanduiche } from "./Sanduiche";

export class FrangoAssado extends Sanduiche {
    descricao: string = "Sanduíche de Frango Assado";
  
    custo(): number {
      return 4.50;
    }
  }
  
  
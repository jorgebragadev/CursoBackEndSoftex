import { Pato } from "./Pato";
import { Galinha } from "./iGalinha";

  export class AdaptadorPato implements Galinha {
    private pato: Pato;
  
    constructor(pato: Pato) {
      this.pato = pato;
    }
  
    cacarejar(): void {
      this.pato.grasnar();
    }
  
    botarOvo(): void {
      console.log("O pato não põe ovos.");
    }
  }
  
 
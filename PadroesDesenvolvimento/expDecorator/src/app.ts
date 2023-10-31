import { FrangoAssado } from "./model/FrangoAssado";
import { Pepperoni } from "./model/Pepperoni";
import { QueijoMussarelaRalado } from "./model/QueijoMussarelaRalado";

function montarSanduiche() {
    const sanduiche = new FrangoAssado();
    const sanduicheComPepperoni = new Pepperoni(sanduiche);
    const sanduicheFinal = new QueijoMussarelaRalado(sanduicheComPepperoni);
  
    console.log(`${sanduicheFinal.getDescricao()} custa $${sanduicheFinal.custo().toFixed(2)}`);
  }
  
  // Chama a função para montar e imprimir o sanduíche
  montarSanduiche();
  
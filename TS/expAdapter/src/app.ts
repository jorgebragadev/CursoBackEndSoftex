import { AdaptadorPato } from "./modelo/AdaptadorPato";
import { AdaptadorPatoDemo } from "./modelo/AdaptadorPatoDemo";
import { Pato } from "./modelo/Pato";

  const pato = new Pato();
  const adaptadorPato = new AdaptadorPato(pato);
  
  console.log("Usando o Pato como Galinha:");
  AdaptadorPatoDemo.testarAdaptador(adaptadorPato);
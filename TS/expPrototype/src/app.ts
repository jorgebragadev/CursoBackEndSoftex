import { Carro } from "./model/Carro";
import { Moto } from "./model/Moto";
import { Veiculo } from "./model/Veiculo";

  class Aplicacao {
    criarVeiculos(): Veiculo[] {
      const veiculos: Veiculo[] = [];
      const carro1 = new Carro("Sedan", "Toyota", "Azul", 4, 4);
      const carro2 = new Carro("SUV", "Ford", "Vermelho", 4, 5);
      const moto1 = new Moto("Sport", "Honda", "Preto", 2, 1000);
      const moto2 = new Moto("Cruiser", "Harley-Davidson", "Prata", 2, 1500);
  
      veiculos.push(carro1, carro2, moto1, moto2);
  
      return veiculos;
    }
  
    clonarVeiculos(veiculos: Veiculo[]): Veiculo[] {
      const veiculosClonados: Veiculo[] = [];
      for (const veiculo of veiculos) {
        veiculosClonados.push(veiculo.clone());
      }
      return veiculosClonados;
    }
  
    imprimirVeiculos(veiculos: Veiculo[]): void {
      for (const veiculo of veiculos) {
        console.log(veiculo.represent());
      }
    }
  }
  

  const app = new Aplicacao();
  const veiculos = app.criarVeiculos();
  const veiculosClonados = app.clonarVeiculos(veiculos);
  
  console.log("Veículos originais:");
  app.imprimirVeiculos(veiculos);
  
  console.log("\nVeículos clonados:");
  app.imprimirVeiculos(veiculosClonados);
  
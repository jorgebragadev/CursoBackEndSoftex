class Sanduiche {
    custo() {
      return 0;
    }
  
    descricao() {
      return 'Sanduíche';
    }
  }
  
  class FrangoAssado extends Sanduiche {
    custo() {
      return 4.50;
    }
  
    descricao() {
      return 'Sanduíche de Frango Assado';
    }
  }
  
  class IngredienteDecorator extends Sanduiche {
    constructor(sanduiche) {
      super();
      this.sanduiche = sanduiche;
    }
  
    custo() {
      return this.sanduiche.custo();
    }
  
    descricao() {
      return this.sanduiche.descricao();
    }
  }
  
  class Pepperoni extends IngredienteDecorator {
    custo() {
      return this.sanduiche.custo() + 0.99;
    }
  
    descricao() {
      return this.sanduiche.descricao() + ', Pepperoni';
    }
  }
  
  class QueijoMussarelaRalado extends IngredienteDecorator {
    custo() {
      return this.sanduiche.custo() + 2.00;
    }
  
    descricao() {
      return this.sanduiche.descricao() + ', Queijo Mussarela Ralado';
    }
  }
  
  // Criando o sanduíche de frango assado com pepperoni e queijo mussarela ralado
  let sanduiche = new FrangoAssado();
  sanduiche = new Pepperoni(sanduiche);
  sanduiche = new QueijoMussarelaRalado(sanduiche);
  
  // Imprimindo a descrição e o custo do sanduíche
  console.log(sanduiche.descricao() + ' =  custa $' + (sanduiche.custo() + 7.49).toFixed(2));
  
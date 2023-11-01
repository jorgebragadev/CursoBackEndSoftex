const entrada = require('prompt-sync')({ sigint: true });

interface Strategy {
    execute(a: number, b: number): number;
   }

   class OperationAdd implements Strategy {
    execute(a: number, b: number): number {
       return a + b;
    }
   }
   
   class OperationSubtract implements Strategy {
    execute(a: number, b: number): number {
       return a - b;
    }
   }
   
   class OperationMultiply implements Strategy {
    execute(a: number, b: number): number {
       return a * b;
    }
   }

   function main() {
    let num1 = Number (entrada("Digite o primeiro valor: "));
    let num2 = Number (entrada("Digite o segundo valor: "));
    let operation = entrada("Digite a operação matemática (+, -, *): ");
   
    let strategy: Strategy;
   
    switch (operation) {
       case "+":
         strategy = new OperationAdd();
         break;
       case "-":
         strategy = new OperationSubtract();
         break;
       case "*":
         strategy = new OperationMultiply();
         break;
       default:
         console.log("Operação inválida.");
         return;
    }
   
    let result = strategy.execute(num1, num2);
    console.log(`O resultado da operação é: ${result}`);
   }
   
   main();
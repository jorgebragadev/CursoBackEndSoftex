class SistemaSeguranca {
    private static instancia: SistemaSeguranca;
    private senhaBaseSecreta: string = "senha123"; // Senha da Base Secreta
  
    private constructor() {}
  
    static getInstance(): SistemaSeguranca {
      if (!SistemaSeguranca.instancia) {
        SistemaSeguranca.instancia = new SistemaSeguranca();
      }
      return SistemaSeguranca.instancia;
    }
  
    acessarBaseSecreta(senha: string): void {
      if (senha === this.senhaBaseSecreta) {
        console.log("Acesso concedido à Base Secreta!");
      } else {
        console.log("Acesso negado! Senha incorreta.");
      }
    }
  }
  
  // Programa principal
  const agenteSecreto = SistemaSeguranca.getInstance();
  
  // Tentativa de acesso à Base Secreta
  agenteSecreto.acessarBaseSecreta("senha123"); // Acesso concedido
  agenteSecreto.acessarBaseSecreta("senha456"); // Acesso negado
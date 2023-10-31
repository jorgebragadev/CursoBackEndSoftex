// Definindo uma interface comum para os produtos
interface Computer {
  getRAM(): number;
  getHDD(): number;
  getCPU(): number;
  getType(): string;
  toString(): string;
}

// Implementações concretas da interface Computer
class PC implements Computer {
  constructor(private ram: number, private hdd: number, private cpu: number) {}

  getRAM(): number {
    return this.ram;
  }

  getHDD(): number {
    return this.hdd;
  }

  getCPU(): number {
    return this.cpu;
  }

  getType(): string {
    return "PC";
  }

  toString(): string {
    return `PC - RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`;
  }
}

class Server implements Computer {
  constructor(private ram: number, private hdd: number, private cpu: number) {}

  getRAM(): number {
    return this.ram;
  }

  getHDD(): number {
    return this.hdd;
  }

  getCPU(): number {
    return this.cpu;
  }

  getType(): string {
    return "Server";
  }

  toString(): string {
    return `Server - RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`;
  }
}

// Factory para criar instâncias de Computer
class ComputerFactory {
  createComputer(type: string, ram: number, hdd: number, cpu: number): Computer {
    if (type === "PC") {
      return new PC(ram, hdd, cpu);
    } else if (type === "Server") {
      return new Server(ram, hdd, cpu);
    } else {
      throw new Error("Tipo de computador não suportado");
    }
  }
}

// Exemplo de uso da fábrica
const factory = new ComputerFactory();

const pc = factory.createComputer("PC", 8, 512, 2.4);
const server = factory.createComputer("Server", 32, 1024, 3.0);

console.log(pc.toString());    // Saída: PC - RAM: 8GB, HDD: 512GB, CPU: 2.4GHz
console.log(server.toString()); // Saída: Server - RAM: 32GB, HDD: 1024GB, CPU: 3.0GHz

// Interface dos computadores
class Computer {
    constructor(ram, hdd, cpu, type) {
      this.ram = ram;
      this.hdd = hdd;
      this.cpu = cpu;
      this.type = type;
    }
  
    getRAM() {
      return this.ram + 'GB';
    }
  
    getHDD() {
      return this.hdd + 'GB';
    }
  
    getCPU() {
      return this.cpu + 'GHz';
    }
  
    getType() {
      return this.type;
    }
  
    toString() {
      return `${this.type} - RAM: ${this.getRAM()}, HDD: ${this.getHDD()}, CPU: ${this.getCPU()}`;
    }
  }
  
  // Classe PC
  class PC extends Computer {
    constructor(ram, hdd, cpu) {
      super(ram, hdd, cpu, 'PC');
    }
  }
  
  // Classe servidor
  class Server extends Computer {
    constructor(ram, hdd, cpu) {
      super(ram, hdd, cpu, 'Server');
    }
  }
  
  // Fábrica criando instâncias do tipo abstrato da interface
  class ComputerFactory {
    static createComputer(type, ram, hdd, cpu) {
      if (type.toLowerCase() === 'pc') {
        return new PC(ram, hdd, cpu);
      } else if (type.toLowerCase() === 'server') {
        return new Server(ram, hdd, cpu);
      } else {
        throw new Error('Invalid computer type');
      }
    }
  }
  

  const pc = ComputerFactory.createComputer('pc', 16, 512, 3.4);
  const server = ComputerFactory.createComputer('server', 32, 2048, 4.0);
  
  console.log(pc.toString());
  console.log(server.toString());
  
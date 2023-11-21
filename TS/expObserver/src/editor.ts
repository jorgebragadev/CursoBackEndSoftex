
class Editor extends EventEmitter {
    protected lines: string[] = [];
   
    open(): void {
       this.emit('abrir');
    }
   
    save(): void {
       this.emit('salvar');
    }
   }
   
   class TextEditor extends Editor {
    insertLine(lineNumber: number, text: string): void {
       this.lines.splice(lineNumber, 0, text);
    }
   
    removeLine(lineNumber: number): void {
       this.lines.splice(lineNumber, 1);
    }
   }
   
   let textEditor = new TextEditor();
   
   textEditor.on('abrir', () => {
    console.log('O Editor de Texto está aberto');
   });
   
   textEditor.on('salvar', () => {
    console.log('Editor de texto está salvando');
   });
   
   textEditor.open();
   
   
   textEditor.save();
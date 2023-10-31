class NumeroComplexo:
    def __init__(self, real, imaginaria):
        self.real = real
        self.imaginaria = imaginaria

    def adicionar(self, outro_complexo):
        real_resultante = self.real + outro_complexo.real
        imaginaria_resultante = self.imaginaria + outro_complexo.imaginaria
        return NumeroComplexo(real_resultante, imaginaria_resultante)

    def subtrair(self, outro_complexo):
        real_resultante = self.real - outro_complexo.real
        imaginaria_resultante = self.imaginaria - outro_complexo.imaginaria
        return NumeroComplexo(real_resultante, imaginaria_resultante)

    def multiplicar(self, outro_complexo):
        real_resultante = (self.real * outro_complexo.real) - (self.imaginaria * outro_complexo.imaginaria)
        imaginaria_resultante = (self.real * outro_complexo.imaginaria) + (self.imaginaria * outro_complexo.real)
        return NumeroComplexo(real_resultante, imaginaria_resultante)

    def dividir(self, outro_complexo):
        divisor = (outro_complexo.real**2 + outro_complexo.imaginaria**2)
        real_resultante = ((self.real * outro_complexo.real) + (self.imaginaria * outro_complexo.imaginaria)) / divisor
        imaginaria_resultante = ((self.imaginaria * outro_complexo.real) - (self.real * outro_complexo.imaginaria)) / divisor
        return NumeroComplexo(real_resultante, imaginaria_resultante)

    def imprimir(self):
        print(f"Parte Real: {self.real}")
        print(f"Parte Imaginária: {self.imaginaria}")

# Criando instâncias de números complexos
complexo1 = NumeroComplexo(3, 2)
complexo2 = NumeroComplexo(1, 4)
complexo3 = NumeroComplexo(5, -1)

# Realizando operações e imprimindo propriedades
resultado = complexo1.adicionar(complexo2)
print("Adição:")
resultado.imprimir()

resultado = complexo1.subtrair(complexo2)
print("\nSubtração:")
resultado.imprimir()

resultado = complexo1.multiplicar(complexo2)
print("\nMultiplicação:")
resultado.imprimir()

resultado = complexo1.dividir(complexo2)
print("\nDivisão:")
resultado.imprimir()

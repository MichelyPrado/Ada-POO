//Crie uma classe círculo que tenha os seguintes atributos:
//raio: o raio do círculo.
//Além disso, crie os seguintes métodos estáticos
//calcularArea(raio): retorna a área do círculo
//calcularCircurferencia(raio): retorna a circurferencia do circulo

class Circulo {
    static calcularArea(raio) {
        return Math.PI * raio ** 2
    }

    static calcularCircunferencia(raio) {
        return 2 * Math.PI * raio
    }
}

console.log(`Área do círculo: ${Circulo.calcularArea(10)}`);
console.log(`Circunferência do círculo: ${Circulo.calcularCircunferencia(10)}`);

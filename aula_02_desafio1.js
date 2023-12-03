// crie uma classe MathUtils que tenha os seguintes métodos estáticos
// sum(a,b): retorna a soma de dois números
// sub(a,b): retorna a subtração de dois números
// mul(a,b): retorna o produto de dois números
// div(a,b): retorna a divisão de dois números

class MathUtils {
    constructor(){}
    static sum(a, b) {
        return a + b 
    }

    static sub(a,b) {
        return a - b
    }

    static mul(a,b) {
        return a * b 
    }

    static div(a,b) {
        return a / b
    }
}

const m = new MathUtils()

console.log(MathUtils.sum(20, 2))
console.log(MathUtils.sub(20, 2))
console.log(MathUtils.mul(20, 2))
console.log(MathUtils.div(20, 2))
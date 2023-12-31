//Crie uma classe Animal que tenha as seguintes propriedades:
//nome, idade, espécie
//Além disso, crie um método imprimirDados() que imprima no console as informações do animal. Crie também um método emitirSom() que emita o som do animal atráves do console.log().
//Crie duas classes derivadas da classe Animal usando herança: Cachorro e Gato
//A classe Cachorro deve ter a propriedade Tamanho.
//A classe Gato deve ter a propridade cor.
//O método emitir som deve ser sobrescrito e emitir o respectivo som do animal da classe filho.

class Animal {
    constructor*(nome, idade, especie) {
        this.nome = nome;
        this.idade = idade;
        this.especie = especie;
    }

    imprimirDados() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Especie: ${this.especie}`);
    }

    emitirSom() {
        console.log("latidos")
    }
}

class Cachorro extends Animal {
    constructor(nome, idade, especie, tamanho) {
        super(nome, idade, especie)
        this.tamanho = tamanho
    }

    imprimirDados() {
        return super.imprimirDados() + `, Tamanho: ${this.tamanho}`
    }

    emitirSom() {
        console.log("au-au");
      }
}

class Gato extends Animal {
    constructor(nome, idade, especie, cor) {
        super(nome, idade, especie)
        this.cor = cor
    }
    imprimirDados() {
        return super.imprimirDados() + `, Cor: ${this.cor}`
    }

    emitirSom() {
        console.log("Miau")
    }
}

const gato1 = new Gato('Persa', 3, 'Felis Catus', 'branco')
const cachorro1 = new Cachorro('Vira-lata', 5, 'Caramelo', 'Médio')

console.log(cachorro1.imprimirDados())
console.log(cachorro1.emitirSom())
console.log(gato1.imprimirDados())
console.log(gato1.emitirSom())
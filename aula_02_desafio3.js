//Crie uma classe chamada Conta que possua os atributos para armazenar o numero da conta, o nome do titular e o saldo. Adicione métodos para realizar depositos e saques.
//A classe Conta deve ter os seguintes atributos privados:
//numeroConta
//numeroTitular
//saldo
//Esses atributos só podem ser acessados de dentro da classe Conta.
//Criar o método privado para validar saldo que verifica se a Conta possui saldo positivo e assim permitir o saque.
//No caso de saldo negativo, apresentar a mensagem e não permitir saque.

class Conta{
    #numeroConta;
    #numeroTitular;
    #saldo;

    constructor(numeroConta, numeroTitular, saldo = 0) {
        this.#numeroConta = numeroConta;
        this.#numeroTitular = numeroTitular;
        this.#saldo = saldo;
    }

    #validarSaldo(saque) {
        if(this.#saldo >= saque) {
            return true;
        } else {
            console.log("Saldo insuficiente. Operação cancelada.");
            return false;
        }
    }

    depositos(quantia) {
        this.#saldo += quantia;
        console.log(`Depósito de ${quantia} efetuado com sucesso. Saldo atual: ${this.#saldo}`);
    }
    
    saques(quantia) {
        if(this.#validarSaldo(quantia)) {
            this.#saldo -= quantia;
            console.log(`Saque de ${quantia} efetuado com sucesso. Saldo atual ${this.#saldo}`);
        }
    }
    
    getSaldo() {
        return this.#saldo;
    }    
}

const contaCorrente = new Conta(111, "Titular 01", 250);

contaCorrente.depositos(100);
contaCorrente.saques(50);
contaCorrente.saques(800);
console.log(contaCorrente.getSaldo());



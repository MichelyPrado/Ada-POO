const agenda = {
    contatos: [   
 {
    nome: 'Aluno1',
    telefone: 'telefone1',
    email: 'email1'
 },
 {
    nome: 'Aluno2',
    telefone: 'telefone2',
    email: 'email2'
 },
 {
    nome: 'Aluno3',
    telefone: 'telefone3',
    email: 'email3'
 }
],
adicionar: function(contato){
    this.contatos = push(contato)
 }
}

const contato = {
    nome: 'Aluno1',
    telefone: 'telefone1',
    email: 'email1'
}

console.log(contato.nome); 
console.log(agenda.contatos)



class Agenda {
    contatos = [];
    constructor(){}
    adicionar(contato) {
        this.contatos.push(contato)
    }
}

const ag = new Agenda();

console.log(ag.contatos)

ag.adicionar(
    {
    nome: 'alguem',
    telefone: '99999-9999'
    email: 'alguem@gmail'
})

console.log(ag.contatos)



class Contato {
    nome
    telefone
    email
    dataNascimento

    constructor(nome, telefone, email){
        this.nome = nome
        this.telefone = telefone
        this.email = email
    }
}

//produção

const contato1 = new Contato('Contato 1', '123456');
const contato2 = new Contato('Maria', '54321');

console.log(contato1.nome)

ag.adicionar(contato1)
ag.adicionar(contato2)

console.log(ag.contatos)
// Faça um catálogo/cardápio digital em HTML;
// Modele as entidades necessárias imaginando possibilidade de cadastro, ediçãi e deleção d eitens (entregar o UML simplificado);
// Utilizar todos os conceitos vistos em sala de aula até o momento, de forma que faça sentido para o contexto do projeto;
// Criar pelo menos uma função utilizando prototype;

// EXTRA:
// Criar um HTML para mostrar o catálogo;
// Deve possuir um formuçário para casdastro de produtos

//Modelem as entidades necessárias imaginando possibilidades de compra, cadastro, edição e deleção de itens (entregar UML simplificado)

class Produto {
	#id;
	#nome;
	#quantidade
	#preco;

	constructor(id, nome, quantidade, preco) {
		this.#id = id;
		this.#nome = nome;
		this.#quantidade = quantidade;
		this.#preco = preco;
	}

	get id() {
		return this.#id;
	}

	get nome() {
		return this.#nome;
	}

	get quantidade() {
		return this.#quantidade;
	}

	get preco() {
		return this.#preco.toFixed(2);
	}

	set nome(novoNome) {
		this.#nome = novoNome;
	}

	set quantidade(novaQuantidade) {
		this.#quantidade = novaQuantidade;
	}
	
	set preco(novoPreco) {
		this.#preco = novoPreco;
	}

	static criarNovoProduto(id, nome, quantidade, preco) {
		return new Produto(id, nome, quantidade, preco);
	}

	checarProdutos() {
		if (this.nome) {
			return 'Produto válido!';
		}
	}
}

export default Produto
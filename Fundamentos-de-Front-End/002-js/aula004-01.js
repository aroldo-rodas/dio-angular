class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    descricao(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos!`);
    }
}

function main(){
    const pessoa = new Pessoa('Bolsolula', 69);

    pessoa.descricao();
}

main();
const carro = {
    modelo:'fusion',
    cor:'preta',
    ano:2008,

    descricao:function(){
        console.log(`O modelo é ${this.modelo}, cor ${this.cor} e ano ${this.ano}.`);
    }
}

carro.descricao()
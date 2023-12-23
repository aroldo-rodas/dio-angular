class Pessoa{
    constructor(nome, peso, altura){
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    calcularImc(){
        return this.peso / (this.altura ** 2);
    }

    classificarImc(){
        const imc = this.calcularImc();

        if(imc < 18.5){
            return('Seu imc é de '+ imc.toFixed(2) + '. Abaixo do peso!');
        } else if(imc >= 18 && imc.toFixed(2) <= 25){
            return('Seu imc é de '+ imc.toFixed(2) + '. Peso normal!');
        } else if(imc > 25 && imc.toFixed(2) <= 30){
             return('Seu imc é de '+ imc.toFixed(2) + '. Acima do peso!');
        } else if(imc > 30 && imc.toFixed(2) <= 40){
             return('Seu imc é de '+ imc.toFixed(2) + '. Obeso!');
        } else if(imc > 40){
            return('Seu imc é de '+ imc.toFixed(2) + '. Obesidade grave!');
        }
    }
}

function main(){
    const pessoa = new Pessoa('José', 70, 1.75);

    console.log(pessoa.calcularImc());
    console.log(pessoa.classificarImc());
}

main();
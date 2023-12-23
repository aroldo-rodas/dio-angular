//Classe carro
class Carro{
    constructor(marca, modelo, cor, gastoMedioPorKm){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    valorDePercursoArbitrario(qunatidadeKm, precoCombustivel){
        return (qunatidadeKm / this.gastoMedioPorKm) * precoCombustivel;
    }
}

function main(){
    const carro = new Carro('Volkswagen', 'Gol', 'Branco', 12);

    console.log('A autonomia do carro é de ' + carro.valorDePercursoArbitrario(100, 5.69).toFixed(2) + ' R$.');
}

main();
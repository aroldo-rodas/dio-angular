//Calcular o preço gasto em uma viagem por meio de algumas variáveis

let gasolina = 5.16;
let consumoCarro = 12;
let distancia = 673
let gasto;

//Calculo do gasto
gasto = (distancia / consumoCarro) * gasolina;

console.log('O gasto estimado para essa viagem é de ', gasto.toFixed(2));

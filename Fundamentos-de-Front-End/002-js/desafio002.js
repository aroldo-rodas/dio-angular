//Modificando o desafio 1

let etanol = 3.64;
let gasolina = 5.16;
let consumoDoCarroGasolina = 12;
let consumoCarroEtanol = 9;
let distanciaKm = 658;

let gastoGasolina = (distanciaKm / consumoDoCarroGasolina) * gasolina;
let gastoEtanol = (distanciaKm / consumoCarroEtanol) * etanol;

if(gastoGasolina < gastoEtanol){
    console.log('O gasto com gasolina é menor, dando um total de R$ ' + gastoGasolina.toFixed(2));
}
else{
    console.log('O gasto com etanol é menor, dando um total de R$ ' + gastoEtanol.toFixed(2));
}
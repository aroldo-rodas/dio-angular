//Função que calcula e retorna IMC
function imc(altura, massa){
    return massa / (altura ** 2);
}

//Procedimento que imprime o IMC
function classificarImc(imc){
    if(imc < 18.5){
        console.log('Seu imc é de '+ imc.toFixed(2) + '. Abaixo do peso!');
    } else if(imc >= 18 && imc.toFixed(2) <= 25){
        console.log('Seu imc é de '+ imc.toFixed(2) + '. Peso normal!');
    } else if(imc > 25 && imc.toFixed(2) <= 30){
         console.log('Seu imc é de '+ imc.toFixed(2) + '. Acima do peso!');
    } else if(imc > 30 && imc.toFixed(2) <= 40){
         console.log('Seu imc é de '+ imc.toFixed(2) + '. Obeso!');
    } else if(imc > 40){
        console.log('Seu imc é de '+ imc.toFixed(2) + '. Obesidade grave!');
    }
}

//Função principal
function main(){
    let altura = 1.74;
    let massa = 73;
    let resultado;

    resultado = imc(altura, massa);

    classificarImc(resultado);
}

main()
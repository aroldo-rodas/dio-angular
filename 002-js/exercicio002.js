//Calculo de imc.toFixed(2)

let peso = 73;
let altura = 1.74;
let imc = peso / (altura **2)


//Exemplo usando aninhamento
if(imc < 18.5){
    console.log('Seu imc é de '+ imc.toFixed(2) + '. Abaixo do peso!');
}
else{
    if(imc >= 18 && imc.toFixed(2) <= 25){
        console.log('Seu imc é de '+ imc.toFixed(2) + '. Peso normal!');
    }
    else{
        if(imc > 25 && imc.toFixed(2) <= 30){
            console.log('Seu imc é de '+ imc.toFixed(2) + '. Acima do peso!');
        }
        else{
            if(imc > 30 && imc.toFixed(2) <= 40){
                console.log('Seu imc é de '+ imc.toFixed(2) + '. Obeso!');
            }
            else{
                if(imc > 40){
                    console.log('Seu imc é de '+ imc.toFixed(2) + '. Obesidade grave!');
                }
            }
        }
    }
}

//Exemplo usando else if
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
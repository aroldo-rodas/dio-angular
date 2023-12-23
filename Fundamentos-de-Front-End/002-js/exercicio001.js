//Calcular média e verificar se está reprovado

let nota1 = 5;
let nota2 = 3;
let nota3 = 7;
let media = (nota1 + nota2 + nota3) / 3;

if(media >= 7){
    console.log('APROVADO!');
}
else {
    if(media >= 5 ){
        console.log('RECUPERAÇÃO!');
    }
    else{
        console.log('RETIDO!');
    }
}
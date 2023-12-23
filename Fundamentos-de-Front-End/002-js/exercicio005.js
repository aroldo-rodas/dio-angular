//Função verificar idade
function verificarIdade(idade){
    if(idade >= 18){
        return true;
    }
    else{
        return false;
    }
}

function main(){
    let idade = 18;

    console.log('Você é maior de idade? ' + verificarIdade(idade));
}

main();
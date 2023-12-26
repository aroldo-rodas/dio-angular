//Destructuring recebendo a função get
const {get} = require('./exercicio010-00');
let lista = [];

for(let i = 0; i < 5; i++){
    lista.push(get());
}

//Ser ordenar a lista
let maior = lista[0];
for(let i = 0; i < lista.length; i++){
    if(maior < lista[i]){
        maior = lista[i];
    }
}
console.log(maior);

//Sem ordenar a lista
let maiorValor = Math.max.apply(null, lista);
console.log(maiorValor);

//Ordenando a lista
lista.sort();
console.log(lista[lista.length - 1]);
const lista = [5, 50, 10, 98, 23];
let i = 0;

function get(){
    const valor = lista[i];
    i++;
    return valor;
}

module.exports = {get};
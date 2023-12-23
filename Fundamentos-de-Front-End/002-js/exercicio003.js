/* Opção de pagamento
   1 - Débito 10% desconto
   2 - Pix ou dinhero 15% desconto
   3 - 2x, segue o valor da etiqueta
   4 - Valor da etiqueta e acréscimo de 10% */

let etiqueta = 100;
let opcao = 4;

if(opcao === 1){
    console.log('O valor a ser pago com o desconto, vai de ' + etiqueta + 'R$ para ' + (etiqueta * 0.90));
} else if(opcao === 2){
    console.log('O valor a ser pago com o desconto, vai de ' + etiqueta + 'R$ para ' + (etiqueta * 0.85));
} else if(opcao == 3){
    console.log('O valor a ser pago ' + etiqueta + 'R$');
} else if(opcao  === 4){
    console.log('O valor a ser pago com o juros, vai de ' + etiqueta + 'R$ para ' + (etiqueta * 1.10).toFixed(2));
}

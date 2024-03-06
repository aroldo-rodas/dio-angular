//Variáveis
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon/?${offset}=0&${limit}=10`;

//Requisição
fetch(url)

    //Recebe a resposta e converte para json usando Arrow Function
    .then((response) => response.json())

    //Recebe a resposta já convertida
    .then((jsonBody) => console.log(jsonBody))

    //Caso ocorra erro
    .catch((error) => console.log(error));
    
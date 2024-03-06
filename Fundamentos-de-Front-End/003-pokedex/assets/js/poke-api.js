//Objeto que irá consumir a API
const pokeApi = {};

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

    //Retorna os resultados
    return fetch(url)

        //Recebe a resposta e converte para json usando Arrow Function
        .then((response) => response.json())

        //Recebe a resposta já convertida
        .then((jsonBody) => jsonBody.results)

        //Erro
        .catch((error) => console.log(error))
};


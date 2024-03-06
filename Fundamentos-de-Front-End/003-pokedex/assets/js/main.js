//Variáveis
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

function convertPokemonToHtml(pokemon) {
    return `
        <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>

                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
                </div>
                
            </li>
    `
}

//Pegando o elemento html pelo ID
const pokemonLi = document.getElementById("pokemonList");


pokeApi.getPokemons()

    //Pega o array de pokemon
    .then((pokemons = []) => {

        const pokemonListHtml = [];

        //Laço para contar a quantidade pokemons e atribuir ele na função convert para html
        for(let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonListHtml.push(convertPokemonToHtml(pokemon));
        }

        //Adiciona a lista inteira no html
        pokemonLi.innerHTML = pokemonLi.innerHTML + pokemonListHtml;

    })

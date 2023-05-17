const pokemonContainer = document.querySelector('.pokemon-container')
const spinner = document.querySelector("#spinner");

function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data) => {
            createPokemon(data);
            spinner.style.display = "none";
        });

}
function fetchPokemons(number) {
    var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    number  += numeroAleatorio;
    for (let i = numeroAleatorio; i <= number; i++) {
        var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        fetchPokemon(i);
    }
}

function createPokemon(pokemon) {
   

    const cardContainer = document.createElement('div');
    cardContainer.classList.add("pokemon-container")

    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default
    spriteContainer.appendChild(sprite);

    const number = document.createElement("p");
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;


    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = pokemon.name;

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);
    pokemonContainer.appendChild(card);


}
fetchPokemons(200);
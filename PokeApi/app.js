const promises = [];
var i = 0;
const rightButton = document.getElementById("buttonRight");
const leftButton = document.getElementById("buttonLeft");
const pName = document.getElementById("pokemonName");
const pType = document.getElementById("pokemonType");
const CurrentImg = document.getElementById("PokemonSprite");
const fetchPokeApi = () => {
  // Getting data of first 150 pokemon into an array of objects
  for (let i = 1; i <= 150; i++) {
    const url = "https://pokeapi.co/api/v2/pokemon/" + i;
    promises.push(fetch(url).then((res) => res.json()));
  }
  Promise.all(promises).then((results) => {
    const Pokemon = results.map((data) => ({
      name: data.name,
      index: data.id,
      sprite: data.sprites.other.dream_world["front_default"],
      type: data.types.map((type) => type.type.name).join(" & "),
    }));
    rightButton.addEventListener("click", nextPokemon); // Going right
    function nextPokemon() {
      i++;
      CurrentPokemon(Pokemon[i]);
    }
    leftButton.addEventListener("click", previousPokemon); // Going left
    function previousPokemon() {
      i--;
      CurrentPokemon(Pokemon[i]);
    }
    CurrentPokemon(Pokemon[i]);
  });
};
fetchPokeApi();

const CurrentPokemon = (Pokemon) => {
  // Setting of data of current pokemon
  CurrentImg.src = Pokemon.sprite;
  pName.innerText = Pokemon.name;
  pType.innerText = Pokemon.type;
};

const promises = [];
var i = 0;
const rightButton = document.getElementById("buttonRight");
const leftButton = document.getElementById("buttonLeft");
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
    rightButton.addEventListener("click", nextPokemon);
    function nextPokemon() {
      i++;
      CurrentPokemon(Pokemon[i]);
    }
    leftButton.addEventListener("click", previousPokemon);
    function previousPokemon() {
      i--;
      CurrentPokemon(Pokemon[i]);
    }
    CurrentPokemon(Pokemon[i]);
  });
};
fetchPokeApi();

const CurrentImg = document.getElementById("PokemonSprite"); // Setting of first/next/prev pokemon sprite
const CurrentPokemon = (Pokemon) => {
  CurrentImg.src = Pokemon.sprite;
};

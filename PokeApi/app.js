const promises = [];
const i = 1;
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
    console.log(Pokemon);
  });
};
fetchPokeApi();

var rightButton = document.getElementById("buttonRight"); // Changing of pokemon
rightButton.addEventListener("click", nextPokemon);
function nextPokemon() {}

var CurrentImg = document.getElementById("PokemonSprite");
CurrentImg.src =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg";

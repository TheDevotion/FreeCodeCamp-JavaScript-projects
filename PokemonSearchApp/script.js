// search elements:
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

//display elements:
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");

// stats elements:

const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

// valid pokemons array:

let validPokemonsArr = [];
let url;

const fetchPokemonIdData = () => {
  fetch("https://pokeapi-proxy.freecodecamp.rocks/api/pokemon")
    .then((response) => response.json())
    .then((data) => {
      validPokemonsArr = data.results;
      checkValidPokemon(validPokemonsArr); // it comes in then because we can only do this if we fetched all data.
    })
    .catch((error) => {
      console.error("Error in fetching:", error);
      alert("There was an error getting the pokemon ID data");
    });
};

const checkValidPokemon = (validPokemonsArr) => {
  const input = searchInput.value.toLowerCase();

  //check if it matches any pokemon name or ID

  const matchFound = validPokemonsArr.find((res) => {
    return res.name.toLowerCase() === input || res.id.toString() === input;
  });

  if (matchFound) {
    showPokemon(matchFound.url);
  } else {
    alert("Pokémon not found");
  }
};

const showPokemon = (url) => {
  console.log(url);
};

searchButton.addEventListener("click", fetchPokemonIdData);

// search elements:
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

//display elements:
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const pokemonTypes = document.getElementById("types");

const spriteContainer = document.querySelector(".sprite-container");

// stats elements:

const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

// valid pokemons array:

let validPokemonsArr = [];
let currentPokemon = [];

const fetchPokemonIdData = () => {
  // fetching the data of valid pokemons:
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
    getCurrentPokemon(matchFound.url);
  } else {
    alert("Pokémon not found");
  }
};

const getCurrentPokemon = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      currentPokemon = data;
      showPokemon(currentPokemon); // it comes in then because we can only do this if we fetched all data.
    })
    .catch((error) => {
      console.error("Error in fetching current Pokemon:", error);
      alert("There was an error getting the CURRENT pokemon data");
    });
};

const showPokemon = (currentPokemon) => {
  pokemonName.innerText = currentPokemon.name;
  pokemonId.innerText = currentPokemon.id;
  weight.innerText = currentPokemon.weight;
  height.innerText = currentPokemon.height;

  // sprite:
  spriteContainer.innerHTML = `<img src="${currentPokemon.sprites.front_default}" alt="${currentPokemon.name} image">`;

  // types:
  // pokemon have multiple types.

  // clearing the types first:

  currentPokemon.types.forEach((el) => {
    pokemonTypes.innerHTML += ` <span claas="type ${el.type.name}">${el.type.name}</span>`;
  });
};

searchButton.addEventListener("click", fetchPokemonIdData);

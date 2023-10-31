const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }
}

const renderPokemon = async (pokemon) => {

  pokemonName.classList.remove('normal', 'water', 'fire', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug',
  'ghost', 'steel', 'dragon', 'dark', 'fairy');
  pokemonName.innerHTML = 'Loading...';
  pokemonNumber.innerHTML = '';

  const data = await fetchPokemon(pokemon);

  if (data) {
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['front_default'];
  
    input.value = '';
    searchPokemon = data.id;
    
    if (data['types']['0']['type']['name'] === 'normal') {
      pokemonName.classList.remove('normal', 'water', 'fire', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug',
      'ghost', 'steel', 'dragon', 'dark', 'fairy');
      pokemonName.classList.add('normal');
    }

    if (data['types']['0']['type']['name'] === 'water') {
      pokemonName.classList.remove('normal', 'water', 'fire', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug',
      'ghost', 'steel', 'dragon', 'dark', 'fairy');
      pokemonName.classList.add('water');
    }

    if (data['types']['0']['type']['name'] === 'fire') {
      pokemonName.classList.remove('normal', 'water', 'fire', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug',
      'ghost', 'steel', 'dragon', 'dark', 'fairy');
      pokemonName.classList.add('fire');
    }

    if (data['types']['0']['type']['name'] === 'grass') {
      pokemonName.classList.remove('normal', 'water', 'fire', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug',
      'ghost', 'steel', 'dragon', 'dark', 'fairy');
      pokemonName.classList.add('grass');
    }

    if (data['types']['0']['type']['name'] === 'flying') {
      pokemonName.classList.remove('normal', 'water', 'fire', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug',
      'ghost', 'steel', 'dragon', 'dark', 'fairy');
      pokemonName.classList.add('flying');
    }

    if (data['types']['0']['type']['name'] === 'fighting') {
      pokemonName.classList.remove('normal', 'water', 'fire', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug',
      'ghost', 'steel', 'dragon', 'dark', 'fairy');
      pokemonName.classList.add('fighting');
    }

    if (data['types']['0']['type']['name'] === 'poison') {
      pokemonName.classList.remove('normal', 'water', 'fire', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug',
      'ghost', 'steel', 'dragon', 'dark', 'fairy');
      pokemonName.classList.add('poison');
    }

    if (data['types']['0']['type']['name'] === 'electric') {
      pokemonName.classList.remove('normal', 'water', 'fire', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug',
      'ghost', 'steel', 'dragon', 'dark', 'fairy');
      pokemonName.classList.add('electric');
    }

    if (data['types']['0']['type']['name'] === 'ground') {
      pokemonName.classList.remove('normal', 'water', 'fire', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug',
      'ghost', 'steel', 'dragon', 'dark', 'fairy');
      pokemonName.classList.add('ground');
    }

    if (data['types']['0']['type']['name'] === 'rock') {
      pokemonName.classList.remove('normal', 'water', 'fire', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug',
      'ghost', 'steel', 'dragon', 'dark', 'fairy');
      pokemonName.classList.add('rock');
    }

    if (data['types']['0']['type']['name'] === 'psychic') {
      pokemonName.classList.remove('normal', 'water', 'fire', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug',
      'ghost', 'steel', 'dragon', 'dark', 'fairy');
      pokemonName.classList.add('psychic');
    }

    if (data['types']['0']['type']['name'] === 'ice') {
      pokemonName.classList.remove('normal', 'water', 'fire', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug',
      'ghost', 'steel', 'dragon', 'dark', 'fairy');
      pokemonName.classList.add('ice');
    }

    if (data['types']['0']['type']['name'] === 'bug') {
      pokemonName.classList.remove('normal', 'water', 'fire', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug',
      'ghost', 'steel', 'dragon', 'dark', 'fairy');
      pokemonName.classList.add('bug');
    }

    if (data['types']['0']['type']['name'] === 'ghost') {
      pokemonName.classList.remove('normal', 'water', 'fire', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug',
      'ghost', 'steel', 'dragon', 'dark', 'fairy');
      pokemonName.classList.add('ghost');
    }

    if (data['types']['0']['type']['name'] === 'steel') {
      pokemonName.classList.remove('normal', 'water', 'fire', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug',
      'ghost', 'steel', 'dragon', 'dark', 'fairy');
      pokemonName.classList.add('steel');
    }

    if (data['types']['0']['type']['name'] === 'dragon') {
      pokemonName.classList.remove('normal', 'water', 'fire', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug',
      'ghost', 'steel', 'dragon', 'dark', 'fairy');
      pokemonName.classList.add('dragon');
    }

    if (data['types']['0']['type']['name'] === 'dark') {
      pokemonName.classList.remove('normal', 'water', 'fire', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug',
      'ghost', 'steel', 'dragon', 'dark', 'fairy');
      pokemonName.classList.add('dark');
    }

    if (data['types']['0']['type']['name'] === 'fairy') {
      pokemonName.classList.remove('normal', 'water', 'fire', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug',
      'ghost', 'steel', 'dragon', 'dark', 'fairy');
      pokemonName.classList.add('fairy');
    }
    
  } else {
    pokemonImage.style.display = 'none';
    pokemonName.innerHTML = 'Not found :c';
    pokemonNumber.innerHTML = '';
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});

buttonPrev.addEventListener('click', () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }
});

buttonNext.addEventListener('click', () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);

const pokemonContainer = document.querySelector(".pokemon-container");

//Creamos la funcion para que se muestren los pokemones de la API.
function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {
        createPokemon(data);
    });
}

//Funcion para que los pokemones ingresen de forma aleatoria.
function pokemonsAle (){
    let ale = Math.floor(Math.random() * 150) + 1;
    fetchPokemon(ale);
}

//Funcion para que el usuario recargue la pagina y se muestre un nuevo conjunto de pokemones de manera aleatoria.
function fetchPokemons(number) {
    for (let i = 1; i <= number; i++) {
        pokemonsAle(i);
    }
}

//Funcion para que se observen los numeros e imagenes de los pokemones en la pagina
function createPokemon(pokemon){
    const card = document.createElement("div");
    card.classList.add("pokemon-block");

    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("img-container");

    const sprite = document.createElement("img");
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const number = document.createElement("p");
    number.textContent= `#${pokemon.id.toString().padStart(3, "0")}`;

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = pokemon.name;

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);

    pokemonContainer.appendChild(card);
    function removeChildNodes(parent){
    while (parent.firstChild){
      parent.removeChild(parent.firstChild);
      
    }
  }
}


//Le indicamos de cuanto sera el limite que tiene que enviar al HTML.
fetchPokemons(6);

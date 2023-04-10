// Create a self-executing anonymous function that returns an object with methods for managing Pokemon data
const pokemonRepository = (() => {
  // Declare an array of Pokemon objects
  const pokemonList = [];
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  // Method for adding a new Pokemon to the array
  const add = (pokemon) => {
    pokemonList.push(pokemon);
  };

  // Method for getting all Pokemon in the array
  const getAll = () => {
    return pokemonList;
  };

  // Method for adding a new Pokemon to the list on the page
  const addListItem = (pokemon) => {
    // Get the <ul> element that will contain the list of Pokemon
    const pokemonListElement = document.querySelector(".list-group","text-center");
    // Create a new <li> element for the Pokemon
    const listItem = document.createElement('li');
    listItem.classList.add("list-group-item");
    // Create a new <button> element for the Pokemon
    const button = document.createElement('button');
    // Set the text of the button to the Pokemon's name
    button.innerText = pokemon.name;
    button.classList.add("btn", "btn-primary");
    // Add a class to the button for styling purposes
    button.classList.add('pokemon-button');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#exampleModal');
    // Add an event listener to the button that will show the Pokemon's details when clicked
    button.addEventListener('click', function() {
      loadDetails(pokemon).then(function() {
        showDetails(pokemon);
      });
    }); 
    // Append the button to the list item
    listItem.appendChild(button);
    // Append the list item to the <ul> element
    pokemonListElement.appendChild(listItem);
  };
  

  // Function for loading a list of Pokemon from the API
  function loadList() {
    return fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Loop through each item in the results array returned by the API
        data.results.forEach(item => {
          // Create a new Pokemon object with the name and details URL from the API
          const pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          // Add the Pokemon to the array
          add(pokemon);
        });
      })
      .catch(error => console.error(error));
  }

  // Function for loading the details of a specific Pokemon from its details URL
  function loadDetails(pokemon) {
    return fetch(pokemon.detailsUrl)
      .then(response => response.json())
      .then(data => {
        // Add additional properties to the Pokemon object based on the details returned by the API
        pokemon.imageUrl = data.sprites.front_default;
        pokemon.height = data.height;
        pokemon.types = data.types;
      })
      .catch(error => console.error(error));
  }

  // Function for showing the details of a specific Pokemon in the console
  function showDetails(pokemon) {
    showModal(pokemon);
  }

  function showModal(pokemon) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");

    modalTitle.empty();
    modalBody.empty();

    let pokemonName = $("<h1>" + pokemon.name + "</h1>")
    let pokemonImage = $('<img class="modal-img" style="width:50%">');
    pokemonImage.attr("src", pokemon.imageUrl);
    let pokemonHeight = $("<p>" + "Height : " + pokemon.height + "</p>");

    modalTitle.append(pokemonName);
    modalBody.append(pokemonImage);
    modalBody.append(pokemonHeight);
  }
  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();  
    }
    });


  // Return an object containing the add, getAll, and addListItem methods, as well as the loadList and loadDetails functions
  return {
    add,
    getAll,
    addListItem,
    loadList,
    loadDetails: loadDetails,
    showModal: showModal
  };
})();

// Load the list of Pokemon from the API and add them to the page when the page finishes loading
pokemonRepository.loadList().then(() => {
  pokemonRepository.getAll().forEach(pokemon => {
    pokemonRepository.addListItem(pokemon);
  });
});
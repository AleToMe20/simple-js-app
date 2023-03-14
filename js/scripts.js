// assigning three pokemon Objects to pokemonList array 
let pokemonRepository = (function () {
    let pokemonList = [
        {
            name: 'Bulbasaur',
            height: 0.7,
            types: ['grass', 'poison']
        },
        {
            name: 'Ivysaur',
            height: 1,
            types: ['grass', 'poison']
        },
        {
            name: 'Venusaur',
            height: 2,
            types: ['grass', 'poison']
        },
    ];

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    function addListItem(pokemon) {
        let pokemonListFolder = document.querySelector(".pokemon-list");
        let createlistItem = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("pokemon-button");
        createlistItem.appendChild(button);
        pokemonListFolder.appendChild(createlistItem);
        button.addEventListener('click', function () {
            showDetails(pokemon);
        })
    }
        function showDetails(pokemon) {
            console.log(pokemon.name);
        }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails
    };
})();
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});

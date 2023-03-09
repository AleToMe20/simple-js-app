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

    return {
        add: add,
        getAll: getAll
    };
})();

function printArrayDetails(pokemon) {
    if (pokemon.height > 1) {
        document.write(pokemon.name + ' (height: ' + pokemon.height + ')' + " - Wow, that's big!" + '<br>')
    }
    else {
        document.write(pokemon.name + ' (height: ' + pokemon.height + ')' + '<br>')
    }
};
pokemonRepository.getAll().forEach(printArrayDetails);
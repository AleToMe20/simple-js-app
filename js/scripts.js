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

function printArrayDetails(i) {
    if (i.height > 0.6) {
        document.write(i.name + ' (height: ' + i.height + ')' + " - Wow, that's big!" + '<br>')
    }
    else {
        document.write(pokemon.name + ' (height: ' + pokemon.height + ')' + '<br>')
        document.write(i.name + ' (height: ' + i.height + ')' + '<br>')
    }
};
repository.forEach(printArrayDetails);
pokemonRepository.getAll().forEach(printArrayDetails);
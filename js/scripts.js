// assigning three pokemon Objects to pokemonList array 
let pokemonList = [
    // defining three pokemon objects
    {
        name: 'Bulbasaur',
        height: 0.7,
        types: ['grass', 'poison'
        ]
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
    }
]

    pokemonList.forEach(function(pokemon){
        if (pokemonList.height >= 1.5) {
            document.write(pokemon.name + " (height: " + pokemon.height + "m) - Wow, that is a big Pokemon!!" + "<p>")
        } else {
            document.write(pokemon.name + " (height: " + pokemon.height + "m) - Wow, that is a small Pokemon!!" + "<p>")
        }
    });

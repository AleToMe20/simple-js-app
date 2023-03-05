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
for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 1) {
        console.log(pokemonList[i].name + " (height: " + pokemonList[i].height + ") - Wow, that's big!");
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")  - Wow, that's big!");
    } 
    else {
        console.log(pokemonList[i].name + " (height: " + pokemonList[i].height + ")");
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height);
    }
}
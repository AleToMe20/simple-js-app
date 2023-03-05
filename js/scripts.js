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
    document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")");
    document.write("<p>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ")");
    if (pokemonList[i].height >= 1.5) {
        document.write("Wow, that's big!!")
        document.write(" Wow, that's big!!") + "</p>"
    }
}
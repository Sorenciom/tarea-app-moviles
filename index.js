function getPokemonDetails(pokemonName) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
    .then(response => response.json())
    .then(data => {

        // convierte la primera letra a mayuscula, e imprime el nombre
        let capitalizedPokemonName = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        console.log("Nombre:", capitalizedPokemonName);
        

        // Imprime los tipos del Pokémon
        let types = data.types.map(typeInfo => typeInfo.type.name).join(', ');
        console.log("Tipo(s):", types);
        

        // imprime las habilidades del pokemon
        let abilities = data.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ');
        console.log("Habilidades:", abilities);
        
        // muestra las stats del pokemon
        data.stats.forEach(stat => {
            console.log(`${stat.stat.name}: ${stat.base_stat}`);
        });

    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// introduce el nombre del pokemon a consultar.
getPokemonDetails("charizard");
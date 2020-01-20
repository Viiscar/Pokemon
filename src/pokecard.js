import React, { useState, useEffect } from 'react';

function Pokecard() {
    const [pokemon, setPokemon] = useState();
    const [sprite, setSprite] = useState();

    const pokemonRes = pokemon && pokemon.results ? pokemon.results : [];

    const pokeUrl = pokemonRes.map(pkmn => pkmn.url);

    // récupérer liste de pokémons
    useEffect(() => {
      const fetchData = async () => {
        const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon/')
          .then(response => response.json());
        setPokemon(pokemons);
      };
      fetchData();
      
    }, []);

    //récupérer les sprites des pokémons
    useEffect(() => {
     
      const fetchData2 = async () => {
        let sprites = [];
        for (let i = 0; i < pokeUrl.length; i++) {
          const pokemons = await fetch(pokeUrl[i])
            .then(response => response.json());
          sprites.push(pokemons.sprites.front_default)
        };
        setSprite(sprites);
      }
      
      fetchData2();
    }, [pokemon]);

    //console.log(pokemon);
    //console.log(sprite);
    //console.log(pokeUrl);


    return (

      
        pokemonRes.map((pkmn, index) => 
            <div key = {index} >
                <p>{pkmn.name}</p> 
                <img src={sprite ? sprite[index] : ""} alt={pkmn.name}></img> 
            </ div>
        )
    )
}

export default Pokecard;
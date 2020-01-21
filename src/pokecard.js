import React, { useState, useEffect } from 'react';

function Pokecard(props) {

    const [sprite, setSprite] = useState();
    const pokemonRes = props.pokemon && props.pokemon.results ? props.pokemon.results : [];
    const pokeUrl = pokemonRes.map(pkmn => pkmn.url);

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
    }, [props.pokemon]);

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

// Line 6:24:  'pokemon' is not defined  no-undef
// Line 6:35:  'pokemon' is not defined  no-undef
// Line 6:53:  'pokemon' is not defined  no-undef
// Line 23:9:  'pokemon' is not defined  no-undef

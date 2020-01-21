import React, { useState, useEffect } from 'react';

function Pokecard(props) { 

    const[pokemon, setPokemon] = useState(props)
    const [sprite, setSprite] = useState();

    //récupérer les sprites des pokémons
    useEffect(() => {
     
      setPokemon(props)
      const fetchData2 = async () => {
        let sprites = [];

        pokemon.results.map( async (pkmn, index) => 
            
          {const pokemons = await fetch(pkmn.url[index])
            .then(response => response.json());
          sprites.push(pokemons.sprites.front_default)}
        
        )
        setSprite(sprites);

      }
      
      fetchData2();
    }, [props]);

    return (

      
      pokemon.results.map((pkmn, index) => 
        <div key = {index} >
            <p>{pkmn.name}</p> 
            <img src={sprite ? sprite[index] : ""} alt={pkmn.name}></img> 
        </ div>
      )
    )
}

export default Pokecard;

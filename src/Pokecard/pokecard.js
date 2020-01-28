import React, { useState, useEffect } from 'react';
import './style.css';

function Pokecard(props) { 

    const[pokemon, setPokemon] = useState(props.pokelist)
    const [sprite, setSprite] = useState();
    const [id, setId] = useState();
    const [weight, setWeight] = useState();

    //récupérer les sprites des pokémons
    useEffect(() => {
     
      setPokemon(props.pokelist)
      const fetchData2 = async () => {
            
        const fetchResult = await fetch(props.url)
          .then(response => response.json());
        
        setSprite(fetchResult.sprites.front_default);
        setId(fetchResult.id);
        setWeight(fetchResult.weight);

      }
      
      fetchData2();
    }, [pokemon]);
  
    const pokemonDetails = pokemon ? pokemon : {name : ''};
    return (
      <div className="pokecard"> 
        <label className="pokename">
            {pokemonDetails.name}
        </label>
        <img src={sprite} alt={pokemonDetails.name}></img>
      </div>

    )}

export default Pokecard;

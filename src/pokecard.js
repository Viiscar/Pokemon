import React, { useState, useEffect } from 'react';

function Pokecard(props) {

    const [sprite, setSprite] = useState();

    useEffect(() => {
     
      const fetchData2 = async () => {
        let sprites = [];

        props.pokeResult.map( async (pkmn, index) => 
            
          {const pokemons = await fetch(pkmn.url[index])
            .then(response => response.json());
          sprites.push(pokemons.sprites.front_default)}
        
        )
        setSprite(sprites);
      }
      
      fetchData2();
    }, [props.pokemon]);

    return (

      
      props.pokeResult.map((pkmn, index) => 
            <div key = {index} >
                <p>{pkmn.name}</p> 
                <img src={sprite ? sprite[index] : ""} alt={pkmn.name}></img> 
            </ div>
      )
    )
}

export default Pokecard;

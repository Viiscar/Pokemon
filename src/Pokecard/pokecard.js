import React, { useState, useEffect } from 'react';
import './style.css';

function Pokecard(props) { 

    const [name] = useState(props.name);
    const [sprite, setSprite] = useState();
    
    //récupérer les sprites des pokémons
    useEffect(() => {
     
      const fetchData2 = async () => {
            
        const fetchResult = await fetch(props.url)
          .then(response => response.json());
        
        setSprite(fetchResult.sprites.front_default);

      }
      
      fetchData2();
    }, []);
  
    return (
      <div className="pokecard"> 
        <label className="pokename">
            {name}
        </label>
        <img src={sprite} alt={name}></img>
      </div>

    )}

export default Pokecard;

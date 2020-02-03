import React, { useState, useEffect } from 'react';
import Pokecard from './pokecard.js';
import {Link} from 'react-router-dom';

function Home(){
    const [pokemons, setPokemons] = useState();
    const pokemonRes = pokemons && pokemons.results ? pokemons.results : [];
     
    // récupérer liste de pokémons
    useEffect(() => {
        const fetchData = async () => {
        const fetchResult = await fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(response => response.json());
        setPokemons(fetchResult);
        };
        fetchData();
        
    }, []);

    return ( 
        <div className="App">
            
            {pokemonRes.map((pokemon, index) => 
                <>
                <Link to={"/detail/"+parseInt(index+1)}>
                    <Pokecard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
                </Link>
                </>
            )}
              
        </div>
    )
}

export default Home;
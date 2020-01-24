import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Pokecard from './Pokecard/pokecard.js';
import './App.css';

function App() {

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

  //console.log(pokemonRes)
  return ( 
    
    <div className="App">   
        
        {/*Afficher les 20 premiers pokémons*/}

        {
          pokemonRes.map((pokemon) => 
          
            <Pokecard key={pokemon.name} pokelist= {pokemon} url={pokemon.url}/>
          
          )
        }
      
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Pokecard from './pokecard.js';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState();
    
  // récupérer liste de pokémons
  useEffect(() => {
    const fetchData = async () => {
      const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(response => response.json());
      setPokemon(pokemons);
    };
    fetchData();
    
  }, []);

  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/*Afficher les 20 premiers pokémons*/}
        <Pokecard />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

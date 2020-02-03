import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Pokecard from './Pokecard/pokecard.js';
import Detail from "./Pokecard/detail";
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

  
  return ( 
    <div className="App">
      <Router>
          {
            pokemonRes.map((pokemon, index) => 
              <>
                <Link to={"/"+parseInt(index+1)}>
                  <Pokecard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
                </Link>
              </>
            )
          }
          <Switch>
            <Route path="/:id" component={Detail} />    
          </Switch>
      </Router>
    </div>)
}

export default App;
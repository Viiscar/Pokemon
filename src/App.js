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

      <Router>

        <div className="App">   
            
          {/*Afficher les 20 premiers pokémons*/}

          {
            pokemonRes.map((pokemon, index) => 
              <>
                <Link to={"/"+index}>
                  <Pokecard key={pokemon.name} pokelist= {pokemon} url={pokemon.url} />
                </Link>

                <div>
                  <Switch>
                    <Route exact path={"/"+index} component={Detail} />    
                  </Switch>
                </div>
              </>
            )
          }

        </div>

      </Router>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import './style.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Detail from "./detail"

function Pokecard(props) { 

    const[pokemon, setPokemon] = useState(props.pokelist)
    const [sprite, setSprite] = useState();
    const [id, setId]=useState();

    //récupérer les sprites des pokémons
    useEffect(() => {
     
      setPokemon(props.pokelist)
      const fetchData2 = async () => {
            
        const fetchResult = await fetch(props.url)
          .then(response => response.json());
        
        setSprite(fetchResult.sprites.front_default);
        setId(fetchResult.id);

      }
      
      fetchData2();
    }, [pokemon]);
  
    const pokemonDetails = pokemon ? pokemon : {name : ''};
    return (
      <>
        <Router>
          <Link to={"/"+id}>
            <div className="pokecard"> 
              <label className="pokename">
                  {pokemonDetails.name}
              </label>
              <img src={sprite} alt={pokemonDetails.name}></img>
            </div>
          </Link>
        

          <div>
            <Switch>
              <Route exact path={"/"+id} component={Detail}/>    
            </Switch>
          </div>
        </Router>
      </>
     
    )}

export default Pokecard;

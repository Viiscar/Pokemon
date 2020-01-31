import React, { useState, useEffect } from 'react';
import {useHistory} from "react-router";

function Detail(props){

    const history = useHistory();
    const[pokemon, setPokemon] = useState(props.pokelist)
    const [id, setId] = useState();
    const [weight, setWeight] = useState();
    const [height, setHeigt] = useState();
    const [exp, setExp] = useState();

    useEffect(() => {
     
        setPokemon(props.pokelist)
        const fetchData2 = async () => {
              
          const fetchResult = await fetch(props.url)
            .then(response => response.json());
          
          setId(fetchResult.id);
          setWeight(fetchResult.weight);
          setHeigt(fetchResult.height);
          setExp(fetchResult.exp);
  
        }
        
        fetchData2();
      }, []);

    function goBackHandle(){
        history.goBack();
    }

    return(
        <div className="detail">
            <span className="id">{"N "+ id}</span>
            <span>{"Taille: " + height}</span>
            <span>{"Poids: " + weight}</span>
            <span>{"Expérience de base: " + exp}</span>

            <button onClick={goBackHandle} >Retour</button>
        </div>
    )
}

export default Detail;
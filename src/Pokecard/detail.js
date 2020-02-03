import React, { useState, useEffect } from 'react';
import {useHistory} from "react-router";

function Detail(props){

    const { match } = props;
    let {id} = match.params;

    const history = useHistory();
    const [name, setName] = useState();
    const [sprite, setSprite] = useState();
    const [weight, setWeight] = useState();
    const [height, setHeigt] = useState();
    const [exp, setExp] = useState();

    useEffect(() => {
        const fetchData2 = async () => {     
          const fetchResult = await fetch('https://pokeapi.co/api/v2/pokemon/'+id)
            .then(response => response.json());
          setName(fetchResult.name);
          setSprite(fetchResult.sprites.front_default);
          setWeight(fetchResult.weight);
          setHeigt(fetchResult.height);
          setExp(fetchResult.base_experience);
  
        }
        
        fetchData2();
    }, [id]);

    function goBackHandle(){
        history.goBack();
    }

    return(
        <div className="detail">
            <span className="id">{"N "+ id}</span>
            <img src={sprite} alt={name}></img>
            <span>{"Taille: " + height + 0 + " cm"}</span>
            <span>{"Poids: " + weight/10 + " kg"}</span>
            <span>{"Expérience de base: " + exp}</span>
            <button onClick={goBackHandle} >Retour</button>
        </div>
    )
}

export default Detail;
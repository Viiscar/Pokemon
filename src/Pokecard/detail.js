import React from "react";
import {useHistory} from "react-router";

function Detail(){

    const history = useHistory();

    function goBackHandle(){
        history.goBack();
    }

    return(
        <div>
            <p>Pokemon</p>
            <button onClick={goBackHandle} >Retour</button>
        </div>
    )
}

export default Detail;
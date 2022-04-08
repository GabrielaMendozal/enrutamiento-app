import React from 'react';

function Palabra(props){
    return( 
        <div>
            <p>The word is: {props.match.params.variable}</p>
        </div>        
    )
}

export default Palabra;
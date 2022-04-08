import React from 'react';

function Numero(props){
    
    
        return(
            <div>
                <p>The number is: {props.match.params.variable}</p> 
            </div>
        )
    
    
}

export default Numero;
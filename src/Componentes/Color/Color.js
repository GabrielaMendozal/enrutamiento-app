import React from "react";

const Color = (props) => {
    console.log(props);
    return (
        <div style={{backgroundColor:props.match.params.colorFondo}} className="variable">
            <p style={{color:props.match.params.colorTexto}}>The word is: {props.match.params.variable}</p>
        </div>
    )
}

export default Color;
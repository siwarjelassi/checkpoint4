import React from 'react';


function Title(props) {
  
    if (props.small) {
        return (
    <h3 style={props.style}>
        {props.children}
       </h3>);
    }
  
    else 
         return ( 
            <h1 style={props.style}>
        {props.children}
       </h1>);

    
}

export default Title;

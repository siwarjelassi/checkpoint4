import React from 'react';
import Title from './Title'
import Photo from './Photo'
import siwar from "./photo/siwar.jpg"

function Wrapper(props) {
return (
    <>
<Photo src={siwar} />

<Title style={{

    color:'red'

}}>Siwar Jelassi </Title>

<Title small>Textile Engineer</Title>
</>
)
}

export default Wrapper;
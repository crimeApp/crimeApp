import React from 'react';
import './input.css';

const ButtonPrueba = ({ text, color, callback }) => {

    return (
        <button className={color} onClick={()=> callback}>
            {text}
        </button>
    )
}

export default ButtonPrueba;
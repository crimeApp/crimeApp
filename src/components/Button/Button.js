import React from 'react';
import { useHistory } from 'react-router-dom';
import './Button.css';

//Tamaño: s = 10px , m = 20px, l = 30px | default m
//Proporcion de ancho en 1 de alto | defauld: ancho columna
//shape = square, round | dafault: round
//color = #******

const CustomButton = ({ text, color, textColor, width, size, shape}) => {

    color = color ?? '#FFFFFF'; 
    textColor = textColor ?? '#';

    switch (size) {
        case 's':
            size = 20;
            break;
        case 'm':
            size = 30;
            break;
        case 'l':
            size = 50;
            break;
        default:
            size = 40;
            break;
    }

    width = width ? String((Number(width) * size) + 'px') : '100%';

    switch (shape) {
        case 'square':
            shape = '10';
            break;
        default:
            shape = '40';
            break;
    }

 
    const styleButton = {
        '--primary-color': color,
        '--height': String(size + 'px'),
        '--width': width,
        '--font-size': String((size / 32) + 'EM'),
        '--border-radius': String(shape + 'px'),
        '--text-color': textColor

    }

    const history = useHistory();
    const navigateTo = () => history.push('/something');
    return (
        <button style={styleButton} onClick= {navigateTo}>
            {text}
        </button>
    )
}





export default CustomButton;
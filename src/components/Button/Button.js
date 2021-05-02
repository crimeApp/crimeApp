import React from 'react';
import { useHistory } from 'react-router-dom';
import './Button.css';

const CustomButton = ({ text, color, textColor, width, size, shape}) => {

    color = color ?? '#FFFFFF'; 
    textColor = textColor ?? '#FFFFFF';

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

    width = width ? String(width + 'px') : '100%';

    switch (shape) {
        case 'square':
            shape = '10';
            break;
        default:
            shape = '40';
            break;
    }

 
    const styleButton = {
        'background': color,
        'height': String(size + 'px'),
        'width': width,
        'border-radius': String(shape + 'px'),
        'color': textColor,
    }

    const history = useHistory();
    const navigateTo = () => history.push('/something');
    return (
        <button  style={styleButton} >
            {text}
        </button>
    )
}





export default CustomButton;
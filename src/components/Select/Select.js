import { React } from 'react';
import './Select.css';

/* 
xs, sm, md , lg , xl ==> con un grid para configurar el tamanio
className, style ==> para editar los estilos
value, onChange ==> para cambiar los valores
ref ==> por si usamos useForm
name ==> para ponerle un nombre al elemento y evento
id o key ==> para identificarlo
color o type para tener varias versiones en uno solo
label, placeholder, text, error, text_error para mostrar en pantalla
icon por si tiene iconos
*/ 
const Select = ({ label, options, value, handleChange, error, size, spacing  }) => {
    return (
        <div className={`select-container ${size}`}>
            <label id="label" className={`select-label ${spacing}`}>
                {label}
            </label>
            <select 
                labelId="label" 
                id="select"
                value={value} 
                className={`select-content ${error? 'error' : ''}`}
                onChange={handleChange}>
                
                {options.map((option) =>
                        <option 
                            className='select-option'
                            key={option}
                            value={option}>
                            {option}
                        </option>
                )}

            </select>
        </div>
    )
}

export default Select;